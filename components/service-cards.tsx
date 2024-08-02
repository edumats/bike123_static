/**
 * v0 by Vercel.
 * @see https://v0.dev/t/43mAZTVNHvL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import ServiceCard from "@/components/service-card"
import bike123Services from "@/data/service-details.json"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossos Serviços</h2>
          <p className="max-w-md text-muted-foreground md:text-lg">
            Mantenha a sua bike brilhando com os nossos serviços profissionais
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bike123Services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
