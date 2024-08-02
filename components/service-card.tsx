import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Service } from "@/app/types/definitions"

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <div className="text-muted-foreground text-sm">R$ {service.price}</div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                    {service.shortFeatures.map((feature, index) => (
                        <li key={index}>
                            <CheckIcon className="mr-2 inline-block h-4 w-4 " />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full bg-orange-400 hover:bg-orange-300" asChild>
                    <Link href={`/servico/${service.slug}`}>Comprar Agora</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#33c9eb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
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