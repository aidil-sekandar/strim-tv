import { deserializeManifest } from "astro/app";
import { defineScriptVars } from "astro/compiler-runtime";

export const channelsList = [
  {
    name: "TV1",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/Tv1/index.m3u8",
    slug: "tv1",
    description:
      "RTM TV1 is a Malaysian free-to-air public television channel owned and operated by Radio Televisyen Malaysia, a broadcasting department of the Malaysian Government. Launched on 28 December 1963.",
  },
  {
    name: "TV2",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/Tv2/index.m3u8",
    slug: "tv2",
    description:
      "RTM TV2 is a Malaysian free-to-air public television channel owned and operated by the Radio Televisyen Malaysia, a broadcasting department of the Malaysian Government. Launched on 17 November 1969.",
  },
  {
    name: "TV3",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/Tv3/index.m3u8",
    slug: "tv3",
    description:
      "Sistem Televisyen Malaysia Berhad, operating as TV3, is a Malaysian free-to-air television channel owned by Malaysian media conglomerate, Media Prima. TV3 is the third oldest TV station in Malaysia. It was launched on 1 June 1984 as the country's first and oldest private television channel.",
  },
  {
    name: "TV9",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/Tv9/index.m3u8",
    slug: "tv9",
    description:
      "Ch-9 Media Sdn. Bhd., operating as TV9 is a Malaysian free-to-air television network owned and operated by Media Prima Berhad. It airs programming that tends mostly towards the Malay demographic.",
  },
  {
    name: "TVS",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/Tvs/index.m3u8",
    slug: "tvs",
    description:
      "TVS (an initialism of its former name, TV Sarawak) is a Malaysian linear digital television channel that provides news and programming from the region of Sarawak to the state itself plus other parts of Malaysia.",
  },
  {
    name: "TV6",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/Tv6/index.m3u8",
    slug: "tv6",
    description:
      "TV6 is a free terrestrial television channel in the sixth state government Radio Television Malaysia.[1] TV6 back-up featuring dramas, entertainment, Malay music, movies and documentaries previously published by the archive Radio Television Malaysia in the 1960s, 1970s, 1980s, 1990s, 2000s and 2010s.",
  },
  {
    name: "8TV",
    source:
      "https://live-streams-ssai-01.tonton.com.my/live/a884c33b-6b11-4433-8bf9-a8899939e224/cmaf.isml/.m3u8",
    slug: "8tv",
    description:
      "Metropolitan TV Sdn. Bhd., operating as 8TV, is a Malaysian Chinese-language free-to-air television network focused on the Chinese community of Malaysia, owned and operated by Media Prima. The channel formerly existed as MetroVision from 1 July 1995 until 1 November 1999 and relaunched as 8TV on 8 January 2004.",
  },

  {
    name: "Astro Awani",
    source: "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/AstroAwani/index.m3u8",
    slug: "astro-awani",
    description:
      "Astro Awani is a Malaysian news channel, founded by and currently broadcast through streaming service and pay TV provider Astro. It broadcasts an array of programmes including bulletins, business & current affairs shows, special interviews, investigative reports, variety programmes, as well as selected magazine shows.",
  },
  {
    name: "DidikTV",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/DidikTvKPM/index.m3u8",
    slug: "didiktv",
    description:
      "On 12 February 2021, as the Ministry of Education will have a one-year term with Media Prima, it was announced that NTV7 will be rebranded through a takeover as a fully educational TV channel known as DidikTV KPM starting 17 February; the new channel will focus on educational content based on SPM curriculum and co-curriculum. It would also provide news focused on education, edutainment programs, and content produced by the students.",
  },
  {
    name: "Berita RTM",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/BeritaRTM/index.m3u8",
    slug: "berita-rtm",
    description:
      "Berita RTM, also known as Saluran Berita RTM, or BES is a free-to-air Malaysian television news channel owned and operated by Radio Televisyen Malaysia.",
  },
  {
    name: "Sukan RTM",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/SukanRTM/index.m3u8",
    slug: "sukan-rtm",
    description:
      "Sukan RTM is a Malaysian sports channel owned and operated by Radio Televisyen Malaysia which airs local and international sports programming, with some of its programs produced and licensed by its sports division.",
  },
  {
    name: "TV Ikim",
    source:
      "https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/channels/TvIkim/index.m3u8",
    slug: "tvikim",
  },
  {
    name: "Cartoon Network (SEA)",
    source: "https://cdn1.skygo.mn/live/disk1/Cartoon_Network/HLS-FTA/Cartoon_Network.m3u8",
    slug: "cartoon-network-sea",
    description:
      "Cartoon Network, often abbreviated as CN, is an American cable television channel owned by Warner Bros. Discovery. It is a part of The Cartoon Network, Inc., a division that also has the broadcasting and production activities of Boomerang, Cartoonito, Discovery Family, Adult Swim, and Toonami under its purview. The channel is headquartered at 1050 Techwood Drive NW in Atlanta, Georgia.",
  },
  {
    name: "CNN (USA)",
    source:
      "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
    slug: "cnn-usa",
    description:
      "Cable News Network (CNN) is a multinational news channel and website headquartered in Atlanta, Georgia, U.S. Founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable news channel, and presently owned by the Manhattan-based media conglomerate Warner Bros. Discovery (WBD).",
  },
  {
    name: "BBC (NA)",
    source: "https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8",
    slug: "bbc-na",
    description:
      "The British Broadcasting Corporation (BBC) is a British public service broadcaster headquartered at Broadcasting House in London, England. Originally established in 1922 as the British Broadcasting Company, it evolved into its current state with its current name on New Year's Day 1927.",
  },
  {
    name: "Al Jazeera (ENG)",
    source:
      "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8",
    slug: "aljazeera",
    description:
      "Al Jazeera Media Network is a private-media conglomerate headquartered at Wadi Al Sail, Doha, funded in part by the government of Qatar.",
  },
  {
    name: "KBS World (ENG Sub)",
    source: "https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8",
    slug: "kbs-world",
    description:
      "KBS World is a South Korean pay television channel operated by the Korean Broadcasting System aimed at international audiences outside South Korea. It was launched on 1 July 2003 and mainly broadcast in Korean, but subtitles in English, Chinese and Malay are also provided.",
  },
  {
    name: "Rakuten TV (Family)",
    source: "https://rakuten-family-1-eu.rakuten.wurl.tv/3000.m3u8",
    slug: "rakuten-tv-family",
    description:
      "Rakuten TV is a video-on-demand (VOD) and free ad-supported streaming television (FAST) platform, providing movies and TV series for subscription, rental, and purchase as well as FAST channels with a mix of local and global content.",
  },
  {
    name: "Vevo Pop",
    source:
      "https://d28edobz3hqdpi.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-shs19slqofvwj-ssai-prd/a6d87d2d-4daf-46e7-a900-9112363d4d97/3.m3u8",
    slug: "vevo-pop",
    description:
      "Vevo is the world's leading music video network, connecting an ever-growing global audience to high quality music video content for more than a decade.",
  },
];
