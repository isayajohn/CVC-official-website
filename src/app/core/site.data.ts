import {
  Album,
  EventItem,
  Leader,
  ManagedContent,
  Milestone,
  Ministry,
  Product,
  Song,
  TicketEvent,
  YouTubeVideo,
} from "./types";

export const SITE_NAME = "AIC Chang'ombe Choir (CVC)";
export const SITE_SHORT_NAME = "AIC Chang'ombe Choir";
export const SITE_ABBREVIATION = "CVC";
export const CVC_YOUTUBE_URL = "https://www.youtube.com/@aictchangombechoir_";
export const CVC_INSTAGRAM_URL = "https://www.instagram.com/aicchangombechoir/";
export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "fMQJQXzUaU4",
    title: "MUNGU MTAWALA",
    published: "May 25, 2026",
  },
  {
    id: "K40RCxjOtXI",
    title: "Now playing on Youtube #cvc #gospelmusic #Mungumtawala",
    published: "May 20, 2026",
  },
  {
    id: "VGbNZLM_Lyc",
    title: "AIC Chang'ombe Choir (CVC) - Mungu Mtawala (Live Video)",
    published: "May 20, 2026",
  },
  {
    id: "RdT3DcZm2JE",
    title: "#Godalone#Vyenyeuhai#CVC",
    published: "May 6, 2026",
  },
  {
    id: "ONPgsp8om4M",
    title: "AIC Chang'ombe Choir (CVC) - God Alone (Live Video)",
    published: "May 6, 2026",
  },
  {
    id: "0lYrIt3Uvms",
    title: "AIC Chang`ombe Choir (CVC) - Vitasa Saba (Live Video)",
    published: "Apr 14, 2026",
  },
  {
    id: "PjEMia92d-s",
    title: "Now playing on Youtube #litatimia",
    published: "Mar 13, 2026",
  },
  {
    id: "DwNDTPgMZ5g",
    title: "AIC Chang`ombe Choir (CVC) - Litatimia (Live Video)",
    published: "Mar 13, 2026",
  },
  {
    id: "ipR1egP-MWU",
    title: "Kesho saa 7 kamili mchana tukutane Youtube #Litatimia#CVC",
    published: "Mar 12, 2026",
  },
  {
    id: "YQ9E9L_ozj8",
    title: "Wimbo wa baraka wakati wote#gusa #cvc",
    published: "Feb 26, 2026",
  },
  {
    id: "eQNy93D5RTI",
    title: "Wimbo huu sasa unapatikana kwenye mitandao yetu yote ya kijamii",
    published: "Feb 25, 2026",
  },
  {
    id: "FgOVtBb4u1Q",
    title: "AIC Chang`ombe Choir (CVC) - Gusa (Live Video)",
    published: "Feb 24, 2026",
  },
  {
    id: "X7tR1zQV3DQ",
    title: "NIKULIPE NINI",
    published: "Jan 23, 2026",
  },
  {
    id: "oboncJo9QgQ",
    title: "Toka mwanzo uko pamoja nasi, asante Elohim",
    published: "Jan 19, 2026",
  },
  {
    id: "s3sVAnfkfFQ",
    title: "Tunayaweza mambo yote katika yeye atutiaye nguvu",
    published: "Jan 18, 2026",
  },
];

export const SONGS: Song[] = [
  {
    id: "1",
    title: "Mungu ni Mwema",
    album: "Tunamshukuru",
    duration: "4:32",
    released: "2024",
    coverImage: "/images/pexels/music-1.jpg",
    audioPreview:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    price: "TZS 3,000",
  },
  {
    id: "2",
    title: "Bwana Yesu",
    album: "Tunamshukuru",
    duration: "5:15",
    released: "2024",
    coverImage: "/images/pexels/music-4.jpg",
    audioPreview:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    price: "TZS 3,000",
  },
  {
    id: "3",
    title: "Hallelujah",
    album: "Victoire",
    duration: "3:58",
    released: "2023",
    coverImage: "/images/pexels/about.jpg",
    audioPreview:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    price: "TZS 3,000",
  },
  {
    id: "4",
    title: "Tunamshukuru",
    album: "Tunamshukuru",
    duration: "4:45",
    released: "2024",
    coverImage: "/images/pexels/music-2.jpg",
    audioPreview:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    price: "TZS 3,000",
  },
];

export const ALBUMS: Album[] = [
  {
    id: "1",
    title: "Tunamshukuru",
    coverImage: "/images/pexels/music-1.jpg",
    released: "2024",
    tracks: 12,
    price: "TZS 30,000",
  },
  {
    id: "2",
    title: "Victoire",
    coverImage: "/images/pexels/about.jpg",
    released: "2023",
    tracks: 10,
    price: "TZS 30,000",
  },
  {
    id: "3",
    title: "Praise & Worship",
    coverImage: "/images/pexels/hero.jpg",
    released: "2022",
    tracks: 8,
    price: "TZS 25,000",
  },
];

export const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Worship Night 2026",
    description:
      "Join us for a powerful night of worship and praise as we celebrate God's goodness.",
    date: "2026-05-16",
    time: "18:00",
    venue: "Mlimani City Hall, Dar es Salaam",
    image: "/images/pexels/event-1.jpg",
    price: "TZS 10,000",
  },
  {
    id: "2",
    title: "Easter Celebration Concert",
    description:
      "Celebrate the resurrection of Jesus Christ with uplifting gospel music and worship.",
    date: "2026-06-02",
    time: "15:00",
    venue: "CCM Kirumba, Dar es Salaam",
    image: "/images/pexels/event-2.jpg",
    price: "TZS 15,000",
  },
  {
    id: "3",
    title: "Gospel Festival",
    description:
      "A day-long festival featuring multiple gospel choirs and artists from across Tanzania.",
    date: "2026-07-11",
    time: "10:00",
    venue: "National Stadium, Dar es Salaam",
    image: "/images/pexels/event-3.jpg",
    price: "TZS 20,000",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Worship Album Vol. 1",
    description: "Collection of inspiring worship songs",
    price: 15000,
    originalPrice: 20000,
    image:
      "https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg",
    category: "Albums",
    rating: 5,
    inStock: true,
  },
  {
    id: 2,
    name: "Tribute to Grace CD",
    description: "Classic gospel collection",
    price: 12000,
    image: "https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg",
    category: "Albums",
    rating: 4,
    inStock: true,
  },
  {
    id: 3,
    name: "CVC T-Shirt",
    description: "Official choir merchandise",
    price: 25000,
    image: "https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg",
    category: "Apparel",
    rating: 5,
    inStock: true,
  },
  {
    id: 4,
    name: "Worship Booklet",
    description: "Lyrics and chords guide",
    price: 5000,
    image: "https://images.pexels.com/photos/8815022/pexels-photo-8815022.jpeg",
    category: "Books",
    rating: 4,
    inStock: true,
  },
];

export const TICKET_EVENTS: TicketEvent[] = [
  {
    id: 1,
    name: "Worship Night 2026",
    description: "An evening of powerful worship and praise.",
    date: "2026-05-16",
    time: "18:00",
    venue: "Mlimani City Hall",
    image: "https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg",
    price: 25000,
    availableTickets: 150,
    category: "Concert",
  },
  {
    id: 2,
    name: "Easter Celebration",
    description: "Special Easter service with the choir.",
    date: "2026-06-02",
    time: "09:00",
    venue: "Central Church",
    image:
      "https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg",
    price: 0,
    availableTickets: 500,
    category: "Service",
  },
  {
    id: 3,
    name: "Gospel Music Festival",
    description: "Annual gospel music festival featuring multiple choirs.",
    date: "2026-07-11",
    time: "14:00",
    venue: "Kariakoo Grounds",
    image: "https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg",
    price: 35000,
    originalPrice: 45000,
    availableTickets: 200,
    category: "Festival",
  },
];

export const LEADERS: Leader[] = [
  {
    name: "John Mwakidudu",
    role: "Choir Director",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Founded the choir in 2010 with a vision to spread the gospel through music across Tanzania.",
  },
  {
    name: "Mary Anthony",
    role: "Lead Vocalist",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "A gifted vocalist with over 12 years of experience leading worship and recording albums.",
  },
  {
    name: "David Kimani",
    role: "Music Director",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Talented composer and arranger behind the choir’s signature sound.",
  },
  {
    name: "Grace Emmanuel",
    role: "Youth Coordinator",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Developing the next generation of worship leaders with compassion and discipline.",
  },
];

export const MINISTRIES: Ministry[] = [
  {
    icon: "music_note",
    title: "Worship Ministry",
    description:
      "Leading congregations in heartfelt worship through contemporary and traditional gospel music.",
  },
  {
    icon: "mic",
    title: "Music Production",
    description:
      "Creating original gospel music and supporting local artists with professional recording services.",
  },
  {
    icon: "groups",
    title: "Community Outreach",
    description:
      "Touching lives through charity programs and sharing the love of Christ.",
  },
  {
    icon: "church",
    title: "Discipleship",
    description:
      "Nurturing spiritual growth and developing the next generation of worship leaders.",
  },
];

export const HISTORY_MILESTONES: Milestone[] = [
  {
    year: "2010",
    headline: "Where the calling began",
    intro:
      "A few committed voices started meeting in Dar es Salaam with one desire: to sing the gospel with honesty and excellence.",
    description:
      "Those early sessions shaped the choir’s sound, discipline, and ministry focus.",
    image: "/images/cvc/journey-2010.jpg",
  },
  {
    year: "2015",
    headline: "Worship found every road",
    intro:
      "Local ministry expanded into national tours and larger worship gatherings.",
    description:
      "The choir learned how to serve different churches, regions, and stories while staying rooted in the same gospel message.",
    image: "/images/cvc/journey-2015.jpg",
  },
  {
    year: "2024",
    headline: "The ministry crossed borders",
    intro: "New invitations across East Africa expanded the choir’s reach.",
    description:
      "A wider stage came with a clearer mission: worship deeply and serve people faithfully.",
    image: "/images/cvc/journey-2024.jpg",
  },
];

export const DEFAULT_MANAGED_CONTENT: ManagedContent = {
  site: {
    phone: "+255 XXX XXX XXX",
    email: "info@capitalvictoirechoir.com",
    address: "Dar es Salaam, Tanzania",
    socials: {
      facebook: "https://facebook.com",
      instagram: CVC_INSTAGRAM_URL,
      youtube: CVC_YOUTUBE_URL,
    },
  },
  customization: {
    brandName: SITE_NAME,
    shortName: SITE_SHORT_NAME,
    abbreviation: SITE_ABBREVIATION,
    logoUrl: "/logo-cvc.svg",
    primaryColor: "#6234d4",
    secondaryColor: "#c8870d",
    accentColor: "#2aa89f",
    heroImage: "/images/cvc/hero-worship.jpg",
    announcement: "New worship releases and events are updated every month.",
    footerTagline: "Lifting Voices in Worship",
  },
  contentPages: {
    en: [
      {
        id: "home",
        slug: "",
        status: "published",
        navLabel: "Home",
        title: "AIC Chang'ombe Choir",
        subtitle: "Lifting voices in worship across Tanzania and beyond.",
        heroImage: "/images/cvc/hero-worship.jpg",
        seoTitle: "AIC Chang'ombe Choir",
        seoDescription:
          "Music, ministry, events, services, and news from AIC Chang'ombe Choir.",
      },
      {
        id: "services",
        slug: "services",
        status: "published",
        navLabel: "Services",
        title: "Our Services",
        subtitle:
          "Recording, venues, event management, and ticketing for your ministry and community events.",
        heroImage: "/images/pexels/services-1.jpg",
        seoTitle: "Choir Services",
        seoDescription:
          "Book recording, event venue, event management, and ticketing services.",
      },
      {
        id: "news",
        slug: "news",
        status: "published",
        navLabel: "News",
        title: "News",
        subtitle:
          "Latest choir announcements, ministry updates, releases, and stories.",
        heroImage: "/images/cvc/about-hero-choir.jpg",
        seoTitle: "Choir News",
        seoDescription:
          "Read the latest announcements and stories from AIC Chang'ombe Choir.",
      },
      {
        id: "contact",
        slug: "contact",
        status: "published",
        navLabel: "Contact",
        title: "Let's connect",
        subtitle:
          "Reach the choir for bookings, ministry invitations, music questions, and partnership conversations.",
        heroImage: "/images/cvc/about-hero.jpg",
        seoTitle: "Contact AIC Chang'ombe Choir",
        seoDescription:
          "Contact AIC Chang'ombe Choir for bookings, inquiries, and partnerships.",
      },
    ],
    sw: [
      {
        id: "home",
        slug: "",
        status: "published",
        navLabel: "Nyumbani",
        title: "Kwaya ya AIC Chang'ombe",
        subtitle: "Kuinua sauti za ibada Tanzania na kwingineko.",
        heroImage: "/images/cvc/hero-worship.jpg",
        seoTitle: "Kwaya ya AIC Chang'ombe",
        seoDescription:
          "Muziki, huduma, matukio, huduma za kwaya, na habari kutoka Kwaya ya AIC Chang'ombe.",
      },
      {
        id: "services",
        slug: "services",
        status: "published",
        navLabel: "Huduma",
        title: "Huduma Zetu",
        subtitle:
          "Kurekodi, ukumbi, usimamizi wa matukio, na huduma za tiketi kwa jamii yako.",
        heroImage: "/images/pexels/services-1.jpg",
        seoTitle: "Huduma za Kwaya",
        seoDescription:
          "Hifadhi huduma za kurekodi, ukumbi, usimamizi wa matukio, na tiketi.",
      },
      {
        id: "news",
        slug: "news",
        status: "published",
        navLabel: "Habari",
        title: "Habari",
        subtitle:
          "Matangazo ya kwaya, taarifa za huduma, matoleo mapya, na simulizi.",
        heroImage: "/images/cvc/about-hero-choir.jpg",
        seoTitle: "Habari za Kwaya",
        seoDescription:
          "Soma matangazo na simulizi mpya kutoka Kwaya ya AIC Chang'ombe.",
      },
      {
        id: "contact",
        slug: "contact",
        status: "published",
        navLabel: "Mawasiliano",
        title: "Tuwasiliane",
        subtitle:
          "Wasiliana na kwaya kwa ajili ya huduma, mialiko, maswali ya muziki, na ushirikiano.",
        heroImage: "/images/cvc/about-hero.jpg",
        seoTitle: "Wasiliana na Kwaya ya AIC Chang'ombe",
        seoDescription:
          "Wasiliana na Kwaya ya AIC Chang'ombe kwa huduma, maswali, na ushirikiano.",
      },
    ],
  },
  news: {
    en: [
      {
        id: "news-2026-worship-season",
        slug: "new-worship-season",
        status: "published",
        featured: true,
        publishedAt: "2026-06-01",
        author: "CVC Team",
        category: "Ministry",
        image: "/images/cvc/hero-worship.jpg",
        title: "A New Worship Season Begins",
        excerpt:
          "Follow the choir as new music, ministry moments, and worship gatherings unfold this season.",
        body: "AIC Chang'ombe Choir is preparing new worship moments for the community, including live gatherings, music releases, and ministry updates. Stay connected through the website for announcements and behind-the-scenes stories.",
      },
    ],
    sw: [
      {
        id: "news-2026-worship-season",
        slug: "msimu-mpya-wa-ibada",
        status: "published",
        featured: true,
        publishedAt: "2026-06-01",
        author: "Timu ya CVC",
        category: "Huduma",
        image: "/images/cvc/hero-worship.jpg",
        title: "Msimu Mpya wa Ibada Waanza",
        excerpt:
          "Fuatilia kwaya kupitia muziki mpya, huduma, na mikusanyiko ya ibada msimu huu.",
        body: "Kwaya ya AIC Chang'ombe inaandaa nyakati mpya za ibada kwa jamii, ikiwemo mikusanyiko ya moja kwa moja, matoleo ya muziki, na taarifa za huduma. Endelea kufuatilia tovuti kwa matangazo na simulizi za nyuma ya pazia.",
      },
    ],
  },
  services: {
    en: {
      subtitle:
        "Recording, venues, event management, and ticketing for your ministry and community events",
      ctaTitle: "Ready to Book Our Services?",
      ctaDescription:
        "Contact us today to discuss your recording or event needs. Our team is ready to help you create something amazing.",
      items: [
        {
          id: "recording-studio",
          title: "Recording Studio",
          description:
            "Professional recording facilities with state-of-the-art equipment. Perfect for gospel artists, choirs, and worship leaders.",
          features: [
            "Professional mixing and mastering",
            "Experienced sound engineers",
            "Comfortable recording environment",
            "Affordable hourly rates",
          ],
          pricing: "Starting from TZS 50,000/hour",
          icon: "mic",
          image:
            "https://images.unsplash.com/photo-1764669930307-4ba89f8469af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8UHJvZmVzc2lvbmFsJTIwcmVjb3JkaW5nJTIwc3R1ZGlvJTIwd2l0aCUyMG1pY3JvcGhvbmUlMjBhbmQlMjBlcXVpcG1lbnQlMkMlMjBtdXNpYyUyMHByb2R1Y3Rpb24lMjBtb2Rlcm58ZW58MHwwfHx8MTc3MTE4NjI3N3ww&ixlib=rb-4.1.0&q=85",
          variant: "primary",
        },
        {
          id: "event-hall",
          title: "Event Hall",
          description:
            "Spacious event venue ideal for concerts, worship nights, and gospel events. Fully equipped with sound system and lighting.",
          features: [
            "Capacity: 500+ people",
            "Professional sound system",
            "Stage lighting and setup",
            "Parking available",
          ],
          pricing: "Starting from TZS 500,000/event",
          icon: "building2",
          image:
            "https://images.pexels.com/photos/5026349/pexels-photo-5026349.jpeg",
          variant: "secondary",
        },
        {
          id: "event-management",
          title: "Event Management",
          description:
            "End-to-end planning and coordination for gospel concerts, worship nights, conferences, and special church events.",
          features: [
            "Program planning and timeline management",
            "Vendor and logistics coordination",
            "Stage flow and on-site support",
            "Dedicated event coordinator",
          ],
          pricing: "Starting from TZS 300,000/event",
          icon: "calendarCheck",
          image: "/images/pexels/event-1.jpg",
          variant: "primary",
        },
        {
          id: "ticketing-services",
          title: "Ticketing Services",
          description:
            "Reliable ticket setup and sales support for your events, including online and physical distribution options.",
          features: [
            "Ticket setup and pricing strategy",
            "Online and physical ticket distribution",
            "Entry validation and guest support",
            "Sales tracking and attendance reporting",
          ],
          pricing: "Service fee starting from TZS 100,000/event",
          icon: "ticket",
          image: "/images/pexels/event-3.jpg",
          variant: "secondary",
        },
      ],
    },
    sw: {
      subtitle:
        "Kurekodi, ukumbi, usimamizi wa matukio, na huduma za tiketi kwa huduma na jamii yako",
      ctaTitle: "Uko Tayari Kuhifadhi Huduma Zetu?",
      ctaDescription:
        "Wasiliana nasi leo kujadili mahitaji yako ya kurekodi au tukio. Timu yetu iko tayari kukusaidia kuunda kitu cha kipekee.",
      items: [
        {
          id: "recording-studio",
          title: "Studio ya Kurekodi",
          description:
            "Vifaa vya kitaalamu vya kurekodi na vifaa vya kisasa. Inafaa kwa wasanii wa injili, kwaya, na viongozi wa ibada.",
          features: [
            "Kuchanganya na kuboresha kwa kitaalamu",
            "Wahandisi wa sauti wenye uzoefu",
            "Mazingira mazuri ya kurekodi",
            "Bei nafuu kwa saa",
          ],
          pricing: "Kuanzia TZS 50,000/saa",
          icon: "mic",
          image:
            "https://images.unsplash.com/photo-1764669930307-4ba89f8469af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8UHJvZmVzc2lvbmFsJTIwcmVjb3JkaW5nJTIwc3R1ZGlvJTIwd2l0aCUyMG1pY3JvcGhvbmUlMjBhbmQlMjBlcXVpcG1lbnQlMkMlMjBtdXNpYyUyMHByb2R1Y3Rpb24lMjBtb2Rlcm58ZW58MHwwfHx8MTc3MTE4NjI3N3ww&ixlib=rb-4.1.0&q=85",
          variant: "primary",
        },
        {
          id: "event-hall",
          title: "Ukumbi wa Matukio",
          description:
            "Ukumbi mkubwa wa matukio unaolingana na tamasha, usiku wa ibada, na matukio ya injili. Umejengwa kikamilifu na mfumo wa sauti na taa.",
          features: [
            "Uwezo: Watu 500+",
            "Mfumo wa sauti wa kitaalamu",
            "Taa za jukwaa na usanidi",
            "Mahali pa kuegesha magari",
          ],
          pricing: "Kuanzia TZS 500,000/tukio",
          icon: "building2",
          image:
            "https://images.pexels.com/photos/5026349/pexels-photo-5026349.jpeg",
          variant: "secondary",
        },
        {
          id: "event-management",
          title: "Usimamizi wa Matukio",
          description:
            "Mipango na uratibu wa mwisho hadi mwisho kwa tamasha za injili, usiku wa ibada, makongamano, na matukio maalum ya kanisa.",
          features: [
            "Upangaji wa programu na ratiba ya tukio",
            "Uratibu wa watoa huduma na usafirishaji",
            "Uendeshaji wa jukwaa na msaada wa siku ya tukio",
            "Mratibu maalum wa tukio",
          ],
          pricing: "Kuanzia TZS 300,000/tukio",
          icon: "calendarCheck",
          image: "/images/pexels/event-1.jpg",
          variant: "primary",
        },
        {
          id: "ticketing-services",
          title: "Huduma za Tiketi",
          description:
            "Usanidi wa tiketi na msaada wa mauzo kwa matukio yako, ikiwemo usambazaji wa mtandaoni na wa ana kwa ana.",
          features: [
            "Usanidi wa tiketi na mpangilio wa bei",
            "Usambazaji wa tiketi mtandaoni na wa ana kwa ana",
            "Uthibitishaji wa kuingia na msaada kwa wageni",
            "Ufuatiliaji wa mauzo na ripoti ya mahudhurio",
          ],
          pricing: "Ada ya huduma kuanzia TZS 100,000/tukio",
          icon: "ticket",
          image: "/images/pexels/event-3.jpg",
          variant: "secondary",
        },
      ],
    },
  },
};
