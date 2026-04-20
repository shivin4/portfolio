import type { Project } from "./types";

export const abilify: Project = {
  id: "abilify",
  codename: "ABILIFY",
  title: "Abilify",
  subtitle: "Therapy support that grows with your child",
  tagline: "Connecting families to verified therapy support",
  status: "BETA",
  classification: "Mobile · HealthTech · Social impact",
  timeline: "2025 – Present",
  context: "Seed grant (late 2025) → ViniBrawns SDE Internship",
  description:
    "All-in-one caregiving platform for families of children with intellectual disabilities—verified therapists, peer community, and teletherapy in one accessible mobile experience.",
  longDescription:
    "Born from an academic UX case study and scaled through a seed grant and ViniBrawns internship, Abilify addresses emotional stress, isolation, and fragmented resources that caregivers face in India. The product connects parents and professionals, surfaces trusted local services, and ships core teletherapy flows in Flutter.",
  problemStatement: {
    background:
      "An academic UX case study evolved into a real product vision: an all-in-one platform for caregivers of individuals with intellectual disabilities—a safe, accessible space for emotional support, information sharing, and community connection.",
    statement:
      "Caregivers of children with intellectual disabilities face significant emotional stress, social isolation, and limited access to reliable local resources. Despite growing need, India lacks a dedicated platform that connects caregivers, fosters peer support, and offers a verified directory of trusted services in one place.",
    goals: [
      "Connect caregivers and professionals through safe, empathetic communication and community support",
      "Provide a verified directory of trusted therapists, schools, and local support services",
      "Encourage engagement through polls, discussions, online workshops, and events",
      "Promote emotional well-being with an inclusive, calming, and easy-to-use interface",
    ],
  },
  highlights: [
    "Phone OTP auth with role-based routing (parent / therapist / pending)",
    "Firestore-backed profiles, bookings, chat, and community feed",
    "Agora RTC video with Express token server—certs never in client",
    "Seed grant recipient (late 2025); now led at ViniBrawns Healthcare",
    "Documented two-device demo: parent books → therapist starts → both join",
  ],
  tech: [
    "Flutter",
    "Firebase",
    "Firestore",
    "Agora",
    "Riverpod",
    "GoRouter",
    "Node.js",
  ],
  metrics: { platform: "Android", roles: "2", phase: "Beta" },
  accent: "from-violet-500/20 to-purple-500/10",
  featured: false,
  priority: 5,
  links: [
    {
      label: "GitHub",
      href: "https://github.com/shivin4/Abilifyapp",
      primary: true,
    },
    {
      label: "README / Setup",
      href: "https://github.com/shivin4/Abilifyapp#readme",
    },
    {
      label: "Firebase Console",
      href: "https://console.firebase.google.com/project/abilifyapp",
    },
  ],
  architecture:
    "Flutter app → Firestore + Firebase Auth (phone OTP) → Token API :3000 → Agora RTC",
  journey: [
    {
      title: "Why Abilify exists",
      body: "Rooted in UX research on caregiver stress and isolation in India—the gap was never just video calls, but trust, community, and verified local resources in one calm interface.",
    },
    {
      title: "Two user journeys",
      body: "Parents: discover → book → join video → community. Therapists: onboard → listing → bookings → sessions → notes.",
    },
    {
      title: "Stack choices",
      body: "Flutter for speed, Firebase for auth/data early on, Agora for video, Node token API so credentials stay server-side.",
      link: {
        label: "Repo",
        href: "https://github.com/shivin4/Abilifyapp",
      },
    },
    {
      title: "Seed grant → internship",
      body: "Secured seed funding end of 2025 after SIH momentum; continued development as SDE Intern & Project Lead at ViniBrawns.",
    },
    {
      title: "Live video on real devices",
      body: "Token endpoint, emulator vs LAN IP config, two-phone demo without manual channel paste.",
      link: {
        label: "Video demo docs",
        href: "https://github.com/shivin4/Abilifyapp#two-phone-video-call-demo",
      },
    },
    {
      title: "Beta you can show",
      body: "Firestore listings, shared theme, animated splash, README with env setup and submission checklist.",
    },
  ],
};
