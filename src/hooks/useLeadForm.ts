import { useState } from "react";

export type LeadType = "b2c" | "b2b" | "partner" | "ai_creator";

type SubmitLeadPayload = {
  name: string;
  contact: string;
  lead_type: LeadType;
  message?: string;
  source_page: string;
};

export function useLeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submitLead(data: SubmitLeadPayload) {
    setLoading(true);
    setError(null);

    try {
      const utmSource = new URLSearchParams(window.location.search).get("utm_source") ?? "direct";
      const { supabase } = await import("@/lib/supabase");

      if (!supabase) {
        const { openTelegramFallback } = await import("@/lib/telegram");
        openTelegramFallback(
          `Новая заявка MLC\nИмя: ${data.name}\nКонтакт: ${data.contact}\nТип: ${data.lead_type}\nСтраница: ${data.source_page}\n${data.message ? `Сообщение: ${data.message}` : ""}`
        );
        setSuccess(true);
        return true;
      }

      const { data: inserted, error: insertError } = await supabase
        .from("leads")
        .insert([{ ...data, utm_source: utmSource }])
        .select("id")
        .single();

      if (insertError) {
        throw insertError;
      }

      const { notifyAdmin } = await import("@/lib/telegram");
      await notifyAdmin({
        ...data,
        id: inserted.id
      });

      setSuccess(true);
      return true;
    } catch {
      setError("Ошибка отправки. Напишите нам напрямую: @mlc_direct");
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { submitLead, loading, success, error, setSuccess };
}
