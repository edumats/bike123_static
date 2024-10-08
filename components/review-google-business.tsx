/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ya1AhiLGmxo
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function ReviewGoogleBusiness() {
  return (
    <section className="bg-[#33c9eb] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-md text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="text-4xl font-bold text-primary">4.9</div>
            <div className="flex items-center gap-1">
              <StarIcon className="h-6 w-6 fill-primary" />
              <StarIcon className="h-6 w-6 fill-primary" />
              <StarIcon className="h-6 w-6 fill-primary" />
              <StarIcon className="h-6 w-6 fill-primary" />
              <StarIcon className="h-6 w-6 fill-primary" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-medium">249+ Avaliações</p>
          <p className="mt-4 text-sm">
            Nossos clientes estão muito satisfeitos com os serviços que prestamos. Veja o que eles têm a dizer!
          </p>
          <div className="mt-6">
            <Link
              href="https://maps.app.goo.gl/D67ZUCZ5E5gwWPVA6"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-orange-400 hover:bg-orange-300 px-4 py-2 text-sm font-medium shadow transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Veja nossas avaliações no Google
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
