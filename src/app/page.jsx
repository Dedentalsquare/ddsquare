import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2, Shield, MessageSquareText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  const services = [
    { icon: "🦷", title: "Root Canal", desc: "Painless precision treatment to save your natural tooth from infection." },
    { icon: "⚗️", title: "Mouth Filling", desc: "Composite, aesthetic restorations that blend perfectly with your teeth." },
    { icon: "😁", title: "Smile Designing", desc: "Custom architectural planning for your perfect aesthetic smile." },
    { icon: "✨", title: "Whitening", desc: "Advanced scaling and laser whitening for a radiant clinical polish." },
    { icon: "🌟", title: "Smile Makeover", desc: "Comprehensive transformative procedures for a complete overhaul." },
    { icon: "🔩", title: "Implants", desc: "High-grade titanium implants for durable, natural-looking tooth replacement." },
    { icon: "😬", title: "Braces", desc: "Orthodontic solutions including modern invisible clear aligners." },
    { icon: "🌿", title: "Health Tips", desc: "Expert preventative guidance for lifelong oral hygiene and wellness." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Metrics Bar */}
      <section className="bg-primary-container text-primary-foreground relative pt-12 pb-12 z-20 font-sans">
        {/* Floating Camp Badge */}
        <div className="absolute top-0 left-4 lg:left-12 -translate-y-1/2 bg-[#00A859] text-white px-4 py-2 rounded-t-sm flex items-center gap-2 text-sm font-semibold tracking-wide shadow-md">
          <Shield className="w-4 h-4" />
          Book free health check camp
        </div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-primary-foreground/20 text-center">
            <div className="px-4">
              <h3 className="text-sm font-semibold tracking-wider text-primary-foreground/80 mb-1">15+</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-primary-foreground">YEARS EXPERIENCE</p>
            </div>
            <div className="px-4">
              <h3 className="text-sm font-semibold tracking-wider text-primary-foreground/80 mb-1">3,000+</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-primary-foreground">HAPPY PATIENTS</p>
            </div>
            <div className="px-4">
              <h3 className="text-sm font-semibold tracking-wider text-primary-foreground/80 mb-1">100%</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-primary-foreground">CLINICAL PRECISION</p>
            </div>
            <div className="px-4">
              <h3 className="text-sm font-semibold tracking-wider text-primary-foreground/80 mb-1">Gold</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-primary-foreground">MEDALIST DOCTOR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm text-primary mb-2 font-serif italic">Advanced Dental Treatments Tailored to Your Needs</h2>
              <p className="text-muted-foreground font-sans">
                We utilize the highest precision instruments and gentle techniques to ensure your comfort and long-term oral health.
              </p>
            </div>
            <Link href="/services" className="text-sm font-sans font-semibold text-primary border-b border-primary pb-1 hover:text-primary/70 inline-flex items-center">
              View all services <ArrowRight className="ml-1 w-3 h-3" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-card p-8 border border-border hover:border-primary/30 transition-colors shadow-sm group">
                <div className="text-2xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chief Periodontist */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-square max-w-[500px] mx-auto overflow-hidden shadow-lg border-8 border-white relative">
                 <Image src="/Meet The Doctor Page.png" alt="Dr. Neeraj Agrawal - Chief Periodontist" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 max-w-xl">
              <h4 className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase font-sans mb-3">
                CHIEF PERIODONTIST
              </h4>
              <h2 className="text-4xl font-serif text-primary mb-4">Dr. Neeraj Agrawal</h2>
              
              <div className="flex flex-wrap gap-2 mb-6 font-sans">
                <span className="px-3 py-1 bg-white border border-border text-xs font-medium text-primary">MDS (Gold Medalist)</span>
                <span className="px-3 py-1 bg-white border border-border text-xs font-medium text-primary">IMS BHU Alumnus</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-8 font-sans">
                With over 15 years of surgical experience, Dr. Agrawal brings an unparalleled level of precision to periodontal care. His academic excellence at IMS BHU and subsequent gold medal recognition have established him as a leading authority in dental science in Varanasi.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10 font-sans border-t border-border pt-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary/60 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-primary text-sm">Ravindrapuri Clinic</h5>
                    <p className="text-xs text-muted-foreground mt-1">B 30/2, Ravindrapuri, Varanasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-primary text-sm">Board Certified</h5>
                    <p className="text-xs text-muted-foreground mt-1">Specialized in Implants & Gums</p>
                  </div>
                </div>
              </div>
              
              <Link href="/meet-the-doctor">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-wider text-xs font-semibold h-12 px-8">
                  READ BIOGRAPHY
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
            Start Your Journey To A Perfect Smile Today
          </h2>
          <p className="text-primary-foreground/70 font-sans mb-10">
            Consult with Varanasi's most trusted dental team. We accept all major insurances and offer flexible payment plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center font-sans">
            <Button className="bg-white hover:bg-slate-100 text-primary rounded-none uppercase tracking-wider text-xs font-semibold h-12 px-10">
              BOOK ONLINE
            </Button>
            <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-white/10 rounded-none uppercase tracking-wider text-xs font-semibold h-12 px-10">
              CALL +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
