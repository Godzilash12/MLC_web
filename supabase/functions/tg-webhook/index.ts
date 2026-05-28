import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const BOT_TOKEN = Deno.env.get("TG_BOT_TOKEN")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const STATUS_LABEL: Record<string, string> = {
  contacted: "✅ Статус: Связались",
  converted: "🏆 Статус: Конвертирован",
  closed: "❌ Статус: Закрыт"
};

Deno.serve(async (req) => {
  const body = await req.json();

  if (body.callback_query) {
    const { id: callbackId, message, data } = body.callback_query;
    const [, status, leadId] = data.split(":");

    if (!leadId || !status) {
      return new Response("bad data", { status: 400 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    await supabase.from("leads").update({ status }).eq("id", leadId);

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callback_query_id: callbackId,
        text: STATUS_LABEL[status] ?? "Обновлено",
        show_alert: false
      })
    });

    const originalText = message.text ?? "";
    const newText = originalText.replace(/\n📌 Статус:.*$/s, "") + `\n📌 ${STATUS_LABEL[status]}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: message.chat.id,
        message_id: message.message_id,
        text: newText,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [] }
      })
    });
  }

  return new Response("ok", { status: 200 });
});
