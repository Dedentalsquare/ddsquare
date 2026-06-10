import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-8 font-sans border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/DeDentalSqaure_Logo_Green.png"
                alt="De Dental Square Logo"
                width={180}
                height={60}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Leading the way in modern clinical dentistry with precision, technology, and empathy.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-border text-primary hover:bg-white transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 flex items-center justify-center border border-border text-primary hover:bg-white transition-colors cursor-pointer">
                <span className="text-xs">fb</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xs tracking-wider text-primary uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Patient Portal</Link>
              </li>
              <li>
                <Link href="#doctors" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Doctors</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</Link>
              </li>
            </ul>
          </div>

          {/* Patient Care */}
          <div>
            <h3 className="font-semibold text-xs tracking-wider text-primary uppercase mb-6">Patient Care</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Emergency Care</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xs tracking-wider text-primary uppercase mb-6">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Lane No 14 (Main Road),Opposite Bank Of India<br />
                  ATM,Ravindrapuri Colony,Varansi-221005
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+918948125950">8948125950</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="h-4 w-4 shrink-0"
                  fill="currentColor"
                >
                  <path d="M16.01 3C8.83 3 3 8.74 3 15.82c0 2.5.73 4.92 2.1 7L3 29l6.38-2.05a13.1 13.1 0 0 0 6.63 1.79H16c7.18 0 13-5.74 13-12.82C29 8.74 23.18 3 16.01 3zm0 23.53a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.78 1.21 1.24-3.66-.26-.38a10.56 10.56 0 0 1-1.67-5.64c0-5.87 4.83-10.64 10.77-10.64 5.94 0 10.77 4.77 10.77 10.64 0 5.87-4.83 10.64-10.77 10.64zm5.91-7.97c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.36.24-.68.08-.32-.16-1.33-.49-2.53-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.32-.02-.49.14-.65.14-.14.32-.36.48-.53.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.63-.53-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.56 1.15 3.08 1.31 3.29.16.21 2.26 3.56 5.58 4.84.79.31 1.41.49 1.89.63.79.25 1.51.21 2.08.13.63-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37z" />
                </svg>
                <a
                  href="https://wa.me/919026923238"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9026923238
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>Mon - Sat: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} De Dental Square. Clinical Excellence & Prestige Care.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
