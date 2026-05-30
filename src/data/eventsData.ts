export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  photo: string;
}

export interface EventEdition {
  year: number;
  dateLabel: string;
  location: string;
  participantCount: number;
  description: string;
  coverImage: string;
  photos: string[];
  speakers: Speaker[];
  highlights: string[];
}

export interface EventCategory {
  id: string;
  title: string;
  meta: string;
  color: string;
  coverImage: string;
  editions: EventEdition[];
}

const SPEAKER_STUB: Speaker = {
  id: 'stub',
  name: 'Имя Фамилия',
  title: 'Должность',
  company: 'Компания',
  photo: '/placeholders/speaker.jpg',
};

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'ai-rewind',
    title: 'AI Rewind',
    meta: 'Конференция и обзор AI-трендов',
    color: '#ff7ad9',
    coverImage: '/community-avif/Frame 1.avif',
    editions: [
      {
        year: 2023,
        dateLabel: '18 февраля 2023',
        location: 'Ташкент',
        participantCount: 300,
        description: 'AI Rewind 2022 — крупнейший AI-ивент Узбекистана. Более 10 спикеров из сфер Data Analytics, ML и бизнеса. Партнёры: Alif Tech, UzbekVoice, Billz.',
        coverImage: '/community-avif/Frame 1.avif',
        photos: [
          '/community-avif/Frame 1.avif',
          '/community-avif/Frame 2.avif',
          '/community-avif/Frame 2-1.avif',
        ],
        speakers: [
          { ...SPEAKER_STUB, id: 's1', company: 'Alif Tech' },
          { ...SPEAKER_STUB, id: 's2', company: 'UzbekVoice' },
          { ...SPEAKER_STUB, id: 's3', company: 'Billz' },
        ],
        highlights: ['300+ участников', '10+ спикеров', 'Alif Tech, UzbekVoice, Billz'],
      },
    ],
  },
  {
    id: 'ml-gap',
    title: 'ML Gap',
    meta: 'Лекции и разборы кейсов',
    color: '#43d8ff',
    coverImage: '/community-avif/Frame 10.avif',
    editions: [
      {
        year: 2022,
        dateLabel: 'Декабрь 2022',
        location: 'Ташкент',
        participantCount: 60,
        description: 'Первый ML Gap — формат глубоких разборов AI-кейсов с экспертами.',
        coverImage: '/community-avif/Frame 10.avif',
        photos: ['/community-avif/Frame 10.avif', '/community-avif/Frame 10-1.avif'],
        speakers: [{ ...SPEAKER_STUB, id: 's1' }],
        highlights: ['60+ участников', 'Разбор реальных кейсов'],
      },
    ],
  },
  {
    id: 'ml-party',
    title: 'ML Party',
    meta: 'Нетворкинг и вечер сообщества',
    color: '#a78bfa',
    coverImage: '/community-avif/Frame 11.avif',
    editions: [
      {
        year: 2022,
        dateLabel: '30 апреля 2022',
        location: 'Ташкент',
        participantCount: 100,
        description: 'Первый ML Party — неожиданно более 100 участников и 5 спикеров. Начало традиции.',
        coverImage: '/community-avif/Frame 11.avif',
        photos: ['/community-avif/Frame 11.avif', '/community-avif/Frame 11-1.avif'],
        speakers: [
          { ...SPEAKER_STUB, id: 's1' },
          { ...SPEAKER_STUB, id: 's2' },
        ],
        highlights: ['100+ участников', '5 спикеров', 'Первый публичный ивент MLC'],
      },
    ],
  },
  {
    id: 'guest-lectures',
    title: 'Guest Lectures',
    meta: 'Встречи с экспертами индустрии',
    color: '#34d399',
    coverImage: '/community-avif/Frame 13-1.avif',
    editions: [
      {
        year: 2023,
        dateLabel: '2023',
        location: 'Ташкент',
        participantCount: 80,
        description: 'Серия открытых лекций от приглашённых экспертов AI-индустрии.',
        coverImage: '/community-avif/Frame 13-1.avif',
        photos: ['/community-avif/Frame 13-1.avif', '/community-avif/Frame 13-2.avif'],
        speakers: [{ ...SPEAKER_STUB, id: 's1' }],
        highlights: ['80+ участников'],
      },
    ],
  },
  {
    id: 'partner-meetups',
    title: 'Partner Meetups',
    meta: 'События с компаниями и вузами',
    color: '#fbbf24',
    coverImage: '/community-avif/Frame 4.avif',
    editions: [
      {
        year: 2024,
        dateLabel: '2024',
        location: 'Ташкент',
        participantCount: 150,
        description: 'Серия встреч с компаниями-партнёрами: TBC Bank, IMAN, Alif, Click.',
        coverImage: '/community-avif/Frame 4.avif',
        photos: ['/community-avif/Frame 4.avif', '/community-avif/Frame 5a.avif'],
        speakers: [
          { ...SPEAKER_STUB, id: 's1', company: 'TBC Bank' },
          { ...SPEAKER_STUB, id: 's2', company: 'Alif' },
        ],
        highlights: ['TBC Bank', 'IMAN', 'Alif', 'Click'],
      },
    ],
  },
  {
    id: 'community-talks',
    title: 'Community Talks',
    meta: 'Открытые разговоры о рынке AI',
    color: '#f87171',
    coverImage: '/community-avif/photo-2026-04-23-11-17-54.avif',
    editions: [
      {
        year: 2025,
        dateLabel: '2025',
        location: 'Ташкент',
        participantCount: 120,
        description: 'Открытые дискуссии о рынке AI в Узбекистане и Центральной Азии.',
        coverImage: '/community-avif/photo-2026-04-23-11-17-54.avif',
        photos: ['/community-avif/photo-2026-04-23-11-17-54.avif'],
        speakers: [{ ...SPEAKER_STUB, id: 's1' }],
        highlights: ['120+ участников', 'Открытый формат'],
      },
    ],
  },
];

export function getCategoryById(id: string): EventCategory | undefined {
  return EVENT_CATEGORIES.find((c) => c.id === id);
}
