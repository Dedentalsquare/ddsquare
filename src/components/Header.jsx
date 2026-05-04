"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href) => {
    if (href.startsWith("#")) {
      return false;
    }
  
    if (href === "/") { 
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm font-sans">
      <div className="container mx-auto flex h-18 items-center justify-between px-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-semibold text-sm lg:text-base tracking-[0.2em] text-primary uppercase">
            DE DENTAL SQUARE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={`relative text-xs font-medium tracking-wider transition-colors after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:bg-primary after:transition-transform after:duration-200 ${
                isActiveLink(link.href)
                  ? "text-primary after:scale-x-100"
                  : "text-muted-foreground after:scale-x-0 hover:text-primary hover:after:scale-x-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons & Button */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex items-center space-x-3 text-muted-foreground border-r border-border pr-5">
            <Link href="#" className="hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
            </Link>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-wider text-[11px] font-semibold h-10 px-6">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center ml-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-slate-50 focus:outline-none">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white font-sans p-6 sm:p-8">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActiveLink(link.href) ? "page" : undefined}
                    className={`text-sm font-semibold tracking-wider uppercase border-b pb-2 transition-colors ${
                      isActiveLink(link.href)
                        ? "text-primary border-primary"
                        : "text-primary/65 border-border hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-primary">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">089481 25950</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">dedentalsquare@gmail.com</span>
                  </div>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground rounded-none uppercase tracking-wider text-xs font-semibold h-12">
                    Book Appointment
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
      </div>
    </header>
  );
}




