import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Janggajasa</h3>
            <p className="text-gray-300 mb-4">
              Solusi terbaik untuk berbagai kebutuhan jasa rumah tangga, pendidikan, dan bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-emerald-400">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-emerald-400">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-emerald-400">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Layanan Populer</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400">
                  Cleaning Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400">
                  Service AC
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400">
                  Les Bahasa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400">
                  Perbaikan Rumah
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400">
                  Pengeditan Video
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-emerald-400 mt-0.5" />
                <span>+62 814 1325 200</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-emerald-400 mt-0.5" />
                <span>info@janggajasa.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-emerald-400 mt-0.5" />
                <span>Jl. Contoh No. 123, Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Janggajasa. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
