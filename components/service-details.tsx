/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/B3cMraomrAl
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Chivo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import { Service } from '@/app/types/definitions'

export function ServiceDetails({ service }: {service: Service}) {
  return (
    <div className="w-full max-w-[800px] mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="space-y-4 md:space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{service.name}</h1>
          <p className='font-bold text-xl'>R$ {service.price}</p>
          <p className="text-muted-foreground mt-6 md:text-xl">
            {service.description}
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">O que está incluso?</h2>
          <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
            {service.features.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
