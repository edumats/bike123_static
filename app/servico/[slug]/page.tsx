import ServiceForm from "@/components/service-details-form"
import { ServiceDetails } from "@/components/service-details"
import { Service } from "@/app/types/definitions"
import { NotFound } from "@/components/not-found"
import bike123Services from "@/data/service-details.json"

export async function generateStaticParams() {
    return bike123Services.map((service: Service) => ({
      slug: service.slug
    }))
  }

export default function Services({ params }: { params: { slug: string }}) {
    const { slug } = params
    // Finds service with slug equal as slug on argument on JSON file
    const service = bike123Services.find((service: Service) => service.slug === slug)
    if (!service) {
      return (
        <NotFound />
      )
    }
    return (
        <>
          <ServiceDetails service={service} />
          <ServiceForm service={service}/>
        </>
      )
}
