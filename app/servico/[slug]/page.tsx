import ServiceForm from "@/components/service-details-form"
import { ServiceDetails } from "@/components/service-details"
import { Service } from "@/app/types/definitions"
import { NotFound } from "@/components/not-found"
import bike123Services from "@/data/service-details.json"
import { title } from "process"

export async function generateMetadata({ params }: { params: { slug: string }}) {
    const { slug } = params
    const service = bike123Services.find((service: Service) => service.slug === slug)

    if (!service) {
      return {}
    }

    return {
      title: service.name,
      description: service.description,
      openGraph: {
        title: service.name,
        description: service.description,
        url: `https://bike123.com.br/servico/${slug}`,
        images: service.image
      }
    }
  }

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
