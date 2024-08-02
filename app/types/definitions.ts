export type Service = {
  slug: string
  name: string
  shortName: string
  description: string
  shortFeatures: string[]
  features: string[]
  price: string
  purchaseLink: string
}

export type ServicePageProps = {
  service: Service
}
