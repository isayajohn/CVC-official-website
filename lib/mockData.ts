export interface Song {
  id: string;
  title: string;
  album: string;
  duration: string;
  released: string;
  coverImage: string;
  audioPreview: string;
  price: string;
}

export interface Album {
  id: string;
  title: string;
  coverImage: string;
  released: string;
  tracks: number;
  price: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  price: string;
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Mungu ni Mwema',
    album: 'Tunamshukuru',
    duration: '4:32',
    released: '2024',
    coverImage: '/images/pexels/music-1.jpg',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    price: 'TZS 3,000',
  },
  {
    id: '2',
    title: 'Bwana Yesu',
    album: 'Tunamshukuru',
    duration: '5:15',
    released: '2024',
    coverImage: '/images/pexels/music-4.jpg',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    price: 'TZS 3,000',
  },
  {
    id: '3',
    title: 'Hallelujah',
    album: 'Victoire',
    duration: '3:58',
    released: '2023',
    coverImage: '/images/pexels/about.jpg',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    price: 'TZS 3,000',
  },
  {
    id: '4',
    title: 'Tunamshukuru',
    album: 'Tunamshukuru',
    duration: '4:45',
    released: '2024',
    coverImage: '/images/pexels/music-2.jpg',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    price: 'TZS 3,000',
  },
  {
    id: '5',
    title: 'Nimekuamini',
    album: 'Victoire',
    duration: '5:22',
    released: '2023',
    coverImage: '/images/pexels/music-3.jpg',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    price: 'TZS 3,000',
  },
  {
    id: '6',
    title: 'Asante Baba',
    album: 'Praise & Worship',
    duration: '4:18',
    released: '2022',
    coverImage: '/images/pexels/music-4.jpg',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    price: 'TZS 3,000',
  },
];

export const albums: Album[] = [
  {
    id: '1',
    title: 'Tunamshukuru',
    coverImage: '/images/pexels/music-1.jpg',
    released: '2024',
    tracks: 12,
    price: 'TZS 30,000',
  },
  {
    id: '2',
    title: 'Victoire',
    coverImage: '/images/pexels/about.jpg',
    released: '2023',
    tracks: 10,
    price: 'TZS 30,000',
  },
  {
    id: '3',
    title: 'Praise & Worship',
    coverImage: '/images/pexels/hero.jpg',
    released: '2022',
    tracks: 8,
    price: 'TZS 25,000',
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Worship Night 2024',
    description: 'Join us for a powerful night of worship and praise as we celebrate God\'s goodness.',
    date: '2024-03-15',
    time: '18:00',
    venue: 'Mlimani City Hall, Dar es Salaam',
    image: '/images/pexels/event-1.jpg',
    price: 'TZS 10,000',
  },
  {
    id: '2',
    title: 'Easter Celebration Concert',
    description: 'Celebrate the resurrection of Jesus Christ with uplifting gospel music and worship.',
    date: '2024-03-31',
    time: '15:00',
    venue: 'CCM Kirumba, Dar es Salaam',
    image: '/images/pexels/event-2.jpg',
    price: 'TZS 15,000',
  },
  {
    id: '3',
    title: 'Gospel Festival',
    description: 'A day-long festival featuring multiple gospel choirs and artists from across Tanzania.',
    date: '2024-04-20',
    time: '10:00',
    venue: 'National Stadium, Dar es Salaam',
    image: '/images/pexels/event-3.jpg',
    price: 'TZS 20,000',
  },
];
