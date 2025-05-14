import {
  Video,
  Home,
  Grid,
  Fence,
  Bug,
  Truck,
  Layers,
  Printer,
  Languages,
  Music,
  FlaskRoundIcon as Flask,
  Sparkles,
  Bed,
  Wind,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  id: string
  name: string
  description: string
  icon: LucideIcon
  category: "home" | "education" | "cleaning" | "media" | "other"
}

export const services: Service[] = [
  {
    id: "pengeditan-video",
    name: "Pengeditan Video",
    description: "Layanan profesional untuk mengedit video dengan kualitas tinggi sesuai kebutuhan Anda.",
    icon: Video,
    category: "media",
  },
  {
    id: "perbaikan-atap",
    name: "Perbaikan Atap",
    description: "Perbaikan dan pemasangan atap rumah dengan material berkualitas dan tahan lama.",
    icon: Home,
    category: "home",
  },
  {
    id: "perbaikan-lantai",
    name: "Perbaikan Lantai",
    description: "Layanan perbaikan dan pemasangan lantai untuk berbagai jenis material.",
    icon: Grid,
    category: "home",
  },
  {
    id: "perbaikan-pagar",
    name: "Perbaikan Pagar",
    description: "Perbaikan dan instalasi pagar dengan berbagai pilihan material dan desain.",
    icon: Fence,
    category: "home",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    description: "Pengendalian hama dan serangga untuk rumah dan bisnis Anda.",
    icon: Bug,
    category: "home",
  },
  {
    id: "pindahan",
    name: "Pindahan",
    description: "Layanan pindahan rumah dan kantor dengan penanganan barang yang aman.",
    icon: Truck,
    category: "other",
  },
  {
    id: "plafon",
    name: "Plafon",
    description: "Pemasangan dan perbaikan plafon dengan berbagai pilihan material.",
    icon: Layers,
    category: "home",
  },
  {
    id: "printing-digital",
    name: "Printing Digital",
    description: "Layanan cetak digital berkualitas tinggi untuk berbagai kebutuhan.",
    icon: Printer,
    category: "media",
  },
  {
    id: "les-bahasa-inggris",
    name: "Les Bahasa Inggris",
    description: "Kursus bahasa Inggris dengan pengajar berpengalaman untuk semua tingkatan.",
    icon: Languages,
    category: "education",
  },
  {
    id: "les-bahasa-jepang",
    name: "Les Bahasa Jepang",
    description: "Kursus bahasa Jepang dengan metode pembelajaran efektif dan menyenangkan.",
    icon: Languages,
    category: "education",
  },
  {
    id: "les-bahasa-jerman",
    name: "Les Bahasa Jerman",
    description: "Kursus bahasa Jerman untuk pemula hingga tingkat lanjut.",
    icon: Languages,
    category: "education",
  },
  {
    id: "les-bahasa-mandarin",
    name: "Les Bahasa Mandarin",
    description: "Kursus bahasa Mandarin dengan fokus pada percakapan dan penulisan.",
    icon: Languages,
    category: "education",
  },
  {
    id: "les-gitar",
    name: "Les Gitar",
    description: "Kursus gitar untuk berbagai genre musik dan tingkat kemampuan.",
    icon: Music,
    category: "education",
  },
  {
    id: "les-kimia",
    name: "Les Kimia",
    description: "Bimbingan belajar kimia untuk siswa sekolah dan mahasiswa.",
    icon: Flask,
    category: "education",
  },
  {
    id: "cleaning-service",
    name: "Cleaning Service",
    description: "Layanan pembersihan rumah dan kantor dengan standar kebersihan tinggi.",
    icon: Sparkles,
    category: "cleaning",
  },
  {
    id: "cuci-karpet",
    name: "Cuci Karpet",
    description: "Layanan cuci karpet profesional dengan hasil bersih dan higienis.",
    icon: Sparkles,
    category: "cleaning",
  },
  {
    id: "cuci-kasur",
    name: "Cuci Kasur",
    description: "Layanan cuci kasur untuk menghilangkan debu, tungau, dan bakteri.",
    icon: Bed,
    category: "cleaning",
  },
  {
    id: "service-ac",
    name: "Service AC",
    description: "Layanan perawatan dan perbaikan AC untuk kinerja optimal dan hemat energi.",
    icon: Wind,
    category: "home",
  },
]

export const categories = [
  { id: "all", name: "Semua Layanan" },
  { id: "home", name: "Rumah & Properti" },
  { id: "education", name: "Pendidikan" },
  { id: "cleaning", name: "Pembersihan" },
  { id: "media", name: "Media & Digital" },
  { id: "other", name: "Lainnya" },
]
