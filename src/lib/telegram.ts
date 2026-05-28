const TELEGRAM_DIRECT = "https://t.me/mlc_direct";

const EMOJI: Record<string, string> = {
  b2c: "🎓",
  b2b: "🏢",
  partner: "🤝",
  ai_creator: "🤖"
};

type LeadNotification = {
  id: string;
  name: string;
  contact: string;
  lead_type: string;
  message?: string;
  source_page: string;
};

export async function notifyAdmin(lead: LeadNotification) {
  const token = import.meta.env.VITE_TG_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TG_ADMIN_CHAT_ID;

  if (!token || !chatId) {
    return;
  }

  let solutionLabel = "";
  let cleanComment = lead.message ?? "";

  if (lead.lead_type === "ai_creator" && lead.message?.startsWith("[")) {
    const match = lead.message.match(/^\[(.+?)\](?:: (.*))?$/);
    if (match) {
      solutionLabel = match[1];
      cleanComment = match[2] ?? "";
    }
  }

  const text = [
    `${EMOJI[lead.lead_type] ?? "📩"} <b>Новая заявка — MLC сайт</b>`,
    "",
    solutionLabel ? `🔧 <b>Решение:</b> ${solutionLabel}` : "",
    `👤 <b>Имя:</b> ${lead.name}`,
    `📞 <b>Контакт:</b> ${lead.contact}`,
    `🏷 <b>Тип:</b> ${lead.lead_type.toUpperCase()}`,
    `📄 <b>Страница:</b> ${lead.source_page}`,
    cleanComment ? `💬 <b>Комментарий:</b> ${cleanComment}` : "",
    "",
    `🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}`,
    `🆔 <code>${lead.id}</code>`
  ]
    .filter(Boolean)
    .join("\n");

  const replyMarkup = {
    inline_keyboard: [
      [
        { text: "✅ Связался", callback_data: `status:contacted:${lead.id}` },
        { text: "🏆 Конвертирован", callback_data: `status:converted:${lead.id}` }
      ],
      [
        { text: "❌ Закрыть", callback_data: `status:closed:${lead.id}` },
        {
          text: "💬 Написать",
          url: lead.contact.startsWith("@") ? `https://t.me/${lead.contact.replace("@", "")}` : TELEGRAM_DIRECT
        }
      ]
    ]
  };

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      reply_markup: replyMarkup
    })
  });
}

export function openTelegramFallback(message: string) {
  const url = `${TELEGRAM_DIRECT}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
