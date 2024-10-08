/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/67ZUrXiwdCG
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card } from "@/components/ui/card"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col gap-4 p-6">
            <div className="rounded-md p-3 flex items-center justify-center">
              <WrenchIcon className="w-8 h-8 text-muted-foreground " />
            </div>
            <h3 className="text-xl font-semibold">Prático</h3>
            <p className="text-muted-foreground">
            Atendemos à domicílio, com horário agendado, muito mais prático e fácil!
            </p>
          </Card>
          <Card className="flex flex-col gap-4 p-6">
            <div className="rounded-md p-3 flex items-center justify-center">
              <BriefcaseIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Profissional</h3>
            <p className="text-muted-foreground">
            Trabalhamos com os melhores técnicos, todos com ampla experiência e ferramentas profissionais
            </p>
          </Card>
          <Card className="flex flex-col gap-4 p-6">
            <div className="rounded-md p-3 flex items-center justify-center">
              <CreditCardIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Pagamento</h3>
            <p className="text-muted-foreground">
            Todos os pagamentos são feitos através do sistema PagSeguro e contam com proteção ao comprador. Mais segurança para você.
            </p>
          </Card>
          <Card className="flex flex-col gap-4 p-6">
            <div className="rounded-md p-3 flex items-center justify-center">
              <MapPinIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Atendemos todo o Brasil</h3>
            <p className="text-muted-foreground">
            Atendemos todas as capitais e grandes cidades do Brasil, graças à nossa rede de técnicos profissionais
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#33c9eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#33c9eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#33c9eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#33c9eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
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
