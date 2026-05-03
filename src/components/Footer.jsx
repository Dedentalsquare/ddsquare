import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-8 font-sans border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-semibold text-sm tracking-[0.2em] text-primary uppercase">
                DE DENTAL SQUARE
              </span>
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
                  Lane No 14, Main Road, Ravindrapuri Rd,<br />
                  Opp. Bank of India ATM, Varanasi.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>089481 25950</span>
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
