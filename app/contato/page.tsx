import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: 'Contato | Bike123',
  description: "Tem dúvidas ou precisa de um serviço especial? Fale com a gente!",
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