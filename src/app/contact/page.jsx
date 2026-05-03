import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | De Dental Square",
  description: "Reach out to De Dental Square to book a consultation or request an appointment.",
};

function ContactRow({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-border/60 bg-white px-4 py-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e6f3f7] text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-primary-container text-primary-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-16 lg:py-20">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary-foreground/55">
            Clinical Prestige Contact
          </p>
          <h1 className="text-4xl leading-tight text-balance sm:text-5xl lg:text-[48px]">
            Ready to Transform Your Smile?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-primary-foreground/72 sm:text-base lg:text-lg">
            Reach out to book your consultation today.
          </p>
        </div>
      </section>

      <section className="bg-[#eaf8fb] px-4 py-10 sm:px-6 lg:px-16 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[14px] border border-border/60 bg-white p-5 shadow-[0_18px_38px_rgba(0,16,20,0.04)] sm:p-6">
              <h2 className="text-2xl leading-tight text-balance">Get in Touch</h2>
              <div className="mt-6 space-y-4">
                <ContactRow icon={MapPin} title="Clinic Address">
                  Lane No 14, Main Road, Ravindrapuri Rd, Opp. Bank of India ATM, Varanasi, UP - 221005.
                </ContactRow>
                <ContactRow icon={Phone} title="Phone Number">
                  089481 25950
                </ContactRow>
                <ContactRow icon={Mail} title="Email Address">
                  dedentalsquare@gmail.com
                </ContactRow>
              </div>
            </div>

            <div className="overflow-hidden rounded-[14px] border border-border/60 bg-[#cfe1e5] shadow-[0_18px_38px_rgba(0,16,20,0.04)]">
              <div className="flex min-h-[320px] flex-col items-center justify-center px-6 py-10 text-center text-primary/75 sm:min-h-[340px]">
                <MapPin className="h-8 w-8 text-primary/70" />
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-primary/75">
                  Varanasi, Ravindrapuri Map View
                </p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-primary/60">
                  Replace this panel with your embedded map or clinic location preview once the final asset is ready.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[14px] border border-border/60 bg-white p-5 shadow-[0_18px_38px_rgba(0,16,20,0.04)] sm:p-8 lg:p-10">
            <h2 className="text-2xl leading-tight text-balance">Request an Appointment</h2>

            <form className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="John Doe" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="example@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Subject / Service Needed</Label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    defaultValue="Consultation"
                    className="h-12 w-full appearance-none rounded-md border border-border/70 bg-white px-4 pr-10 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option>Consultation</option>
                    <option>Root Canal</option>
                    <option>Implants</option>
                    <option>Smile Makeover</option>
                    <option>Other</option>
                  </select>
                  <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your dental concerns..."
                  className="resize-none"
                />
              </div>

              <div className="pt-2">
                <Button className="h-12 w-full rounded-none bg-primary text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground hover:bg-primary/90">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#edfdfd] px-4 pb-16 sm:px-6 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-border/60 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(0,16,20,0.04)] sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">De Dental Square</p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                Specialized dental care providing clinical prestige in every detail. Experience the future of dentistry.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Patient Resources</h3>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <Link href="#" className="block transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="block transition-colors hover:text-primary">
                  Terms of Service
                </Link>
                <Link href="#" className="block transition-colors hover:text-primary">
                  Patient Rights
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Support</h3>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <Link href="#" className="block transition-colors hover:text-primary">
                  Emergency Contact
                </Link>
                <Link href="#" className="block transition-colors hover:text-primary">
                  FAQs
                </Link>
                <Link href="#" className="block transition-colors hover:text-primary">
                  Location
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Stay Connected</h3>
              <div className="mt-5 flex gap-3 text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-[#f8fbfc]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-[#f8fbfc]">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-[#f8fbfc]">
                  <Phone className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                © 2026 De Dental Square. Clinical Prestige in Every Detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}