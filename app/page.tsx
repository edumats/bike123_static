import { OpeningTitle } from "@/components/opening-title";
import ServiceCards from "@/components/service-cards"
import { Featured } from "@/components/featured";
import { Features } from "@/components/features";
import { ReviewGoogleBusiness } from "@/components/review-google-business";

export const metadata = {
  title: 'Experts em manutenção de bicicletas | Bike123',
  description: "Realizamos montagens, revisões e reparos de bicicletas. Atendemos à domicílio em todo o Brasil.",
  openGraph: {
    title: 'Experts em manutenção de bicicletas | Bike123',
    description: "Montagens, revisões e reparos de bicicletas",
    url: 'https://bike123.com.br',
    images: 'https://bike123-static-assets.s3.amazonaws.com/BIKE123_MECANICOS_161223_011-1.webp'
  },
}

export default function Home() {
  return (
    <>
      <OpeningTitle />
      <Features />
      <ServiceCards />
      <ReviewGoogleBusiness />
      <Featured />
    </>
  )
}
