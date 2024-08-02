/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Q80WeY4X55a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import bike123Services from "@/data/service-details.json";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
        <span className="text-[rgba(51,201,235,1)] text-2xl">Bike123</span>
      </Link>
      <nav className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink href="/contato" className={navigationMenuTriggerStyle()}>Fale Conosco</NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4 p-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false} onClick={closeMenu}>
              <div className="w-6 h-6 bg-[rgba(51,201,235,1)]" />
              <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="40" font-family="Arial" font-size="40" fill="rgba(51,201,235,1)">Bike123</text>
              </svg>
            </Link>
            {bike123Services.map((service, index) => (
              <nav key={index} className="grid gap-2">
                <Link href={`/servico/${service.slug}`} className="flex items-center gap-2 hover:underline" prefetch={false} onClick={closeMenu}>
                  {service.shortName}
                </Link>
              </nav>
            ))}
            <nav className="grid gap-2">
              <Link href="/contato" className="flex items-center gap-2 hover:underline font-bold" prefetch={false} onClick={closeMenu}>
                Fale Conosco
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
