import { ContactForm } from "@/components/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contato | Bike123',
  description: "Entre em contato conosco para dúvidas ou serviços customizados",
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: 'Contato | Bike123',
    description: "Tem dúvidas ou precisa de um serviço especial? Fale com a gente!",
    url: 'https://bike123.com.br/contato',
    images: 'https://bike123-static-assets.s3.amazonaws.com/BIKE123_MECANICOS_161223_011-1.webp'
  },
}

export default function ContactUs() {
  return (
    <ContactForm />
  )
}