import { OpeningTitle } from "@/components/opening-title";
import ServiceCards from "@/components/service-cards"
import { Featured } from "@/components/featured";
import { Features } from "@/components/features";
import { ReviewGoogleBusiness } from "@/components/review-google-business";

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
