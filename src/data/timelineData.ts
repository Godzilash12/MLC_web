export interface TimelineEvent {
  id: string;
  year: number;
  dateLabel: string;
  titleKey: string;
  descKey: string;
  isMilestone: boolean;
  sourceUrl?: string;
  photos?: string[];
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: "e01", year: 2022, dateLabel: "Февр 2022", titleKey: "t_e01_title", descKey: "t_e01_desc", isMilestone: true, photos: [] },
  { id: "e02", year: 2022, dateLabel: "19 фев 2022", titleKey: "t_e02_title", descKey: "t_e02_desc", isMilestone: false },
  { id: "e03", year: 2022, dateLabel: "30 апр 2022", titleKey: "t_e03_title", descKey: "t_e03_desc", isMilestone: true, photos: ["/milestone/m02-1.webp", "/milestone/m02-2.webp", "/milestone/m02-3.webp", "/milestone/m02-4.webp"], sourceUrl: "https://t.me/mlc_uz/99" },
  { id: "e04", year: 2022, dateLabel: "Сен 2022", titleKey: "t_e04_title", descKey: "t_e04_desc", isMilestone: false },
  { id: "e05", year: 2022, dateLabel: "Дек 2022", titleKey: "t_e05_title", descKey: "t_e05_desc", isMilestone: false },
  { id: "e06", year: 2023, dateLabel: "18 фев 2023", titleKey: "t_e06_title", descKey: "t_e06_desc", isMilestone: true, photos: ["/milestone/m03-1.webp", "/milestone/m03-2.webp", "/milestone/m03-3.webp", "/milestone/m03-4.webp"] },
  { id: "e07", year: 2023, dateLabel: "Май 2023", titleKey: "t_e07_title", descKey: "t_e07_desc", isMilestone: false },
  { id: "e08", year: 2023, dateLabel: "Сен 2023", titleKey: "t_e08_title", descKey: "t_e08_desc", isMilestone: false },
  { id: "e09", year: 2023, dateLabel: "Ноя 2023", titleKey: "t_e09_title", descKey: "t_e09_desc", isMilestone: true, photos: ["/milestone/m04-1.webp", "/milestone/m04-2.webp", "/milestone/m04-3.webp"], sourceUrl: "https://www.spot.uz/oz/2023/10/25/president-tech-award-winners/" },
  { id: "e10", year: 2024, dateLabel: "Янв 2024", titleKey: "t_e10_title", descKey: "t_e10_desc", isMilestone: false },
  { id: "e11", year: 2024, dateLabel: "16-18 фев 2024", titleKey: "t_e11_title", descKey: "t_e11_desc", isMilestone: true, photos: ["/milestone/m05-1.webp", "/milestone/m05-2.webp", "/milestone/m05-3.webp", "/milestone/m05-4.webp"], sourceUrl: "https://t.me/mlc_uz/440" },
  { id: "e12", year: 2024, dateLabel: "6 мар 2024", titleKey: "t_e12_title", descKey: "t_e12_desc", isMilestone: false },
  { id: "e13", year: 2024, dateLabel: "Мар 2024", titleKey: "t_e13_title", descKey: "t_e13_desc", isMilestone: false },
  { id: "e14", year: 2024, dateLabel: "2 май 2024", titleKey: "t_e14_title", descKey: "t_e14_desc", isMilestone: true, photos: ["/milestone/m06-1.webp", "/milestone/m06-2.webp", "/milestone/m06-3.webp", "/milestone/m06-4.webp", "/milestone/m06-5.webp"], sourceUrl: "https://t.me/mlc_uz/591" },
  { id: "e15", year: 2025, dateLabel: "Янв 2025", titleKey: "t_e15_title", descKey: "t_e15_desc", isMilestone: false },
  { id: "e16", year: 2025, dateLabel: "Фев 2025", titleKey: "t_e16_title", descKey: "t_e16_desc", isMilestone: false },
  { id: "e17", year: 2025, dateLabel: "Авг 2025", titleKey: "t_e17_title", descKey: "t_e17_desc", isMilestone: true, photos: ["/milestone/m07-1.webp"], sourceUrl: "https://t.me/mlc_uz/692" },
  { id: "e18", year: 2025, dateLabel: "Окт 2025", titleKey: "t_e18_title", descKey: "t_e18_desc", isMilestone: false },
  { id: "e19", year: 2025, dateLabel: "Дек 2025", titleKey: "t_e19_title", descKey: "t_e19_desc", isMilestone: false },
  { id: "e20", year: 2025, dateLabel: "26 дек 2025", titleKey: "t_e20_title", descKey: "t_e20_desc", isMilestone: true, photos: ["/milestone/m08-1.webp", "/milestone/m08-2.webp", "/milestone/m08-3.webp"], sourceUrl: "https://t.me/mlc_uz/737" },
  { id: "e21", year: 2026, dateLabel: "Янв 2026", titleKey: "t_e21_title", descKey: "t_e21_desc", isMilestone: false },
  { id: "e22", year: 2026, dateLabel: "Фев-Апр 2026", titleKey: "t_e22_title", descKey: "t_e22_desc", isMilestone: false },
  { id: "e23", year: 2026, dateLabel: "9 май 2026", titleKey: "t_e23_title", descKey: "t_e23_desc", isMilestone: true, photos: ["/milestone/m09-1.webp", "/milestone/m09-2.webp", "/milestone/m09-3.webp", "/milestone/m09-4.webp"], sourceUrl: "https://t.me/mlc_uz/843" },
];

export const TIMELINE_YEARS = [...new Set(TIMELINE_EVENTS.map((e) => e.year))].sort();
