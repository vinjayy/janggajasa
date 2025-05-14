import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AboutUs } from "@/components/about-us"
import { PhotoGallery } from "@/components/photo-gallery"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <PhotoGallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
