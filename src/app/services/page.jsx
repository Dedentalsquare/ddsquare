import { Button } from "@/components/ui/button";
import { PlayCircle, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Services | De Dental Square",
  description: "Advanced Dental Treatments for a Healthy, Beautiful Smile.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "rct",
      title: "Root Canal (RCT)",
      image: "/service/Root%20Canal%20(RCT).png",
      description: "A modern, virtually painless procedure to save a severely damaged or infected tooth. Our clinical experts use microscopic technology to ensure precision and longevity.",
      procedure: [
        "Diagnosis & precise X-ray mapping.",
        "Painless cleaning of the root canal system.",
        "Filling & sealing to prevent infection.",
        "Core build-up & crown placement."
      ],
      benefits: [
        "Prevents tooth extraction",
        "Stops infection spread",
        "Restores full function"
      ]
    },
    {
      id: "mouth-filling",
      title: "Mouth Filling",
      image: "/service/Mouth%20Filling.png",
      description: "Restore your tooth's structural integrity with biocompatible composite materials that blend seamlessly with your natural enamel.",
      procedure: [
        "Decay removal & cleaning.",
        "Composite layering.",
        "UV Light curing & polishing."
      ],
      benefits: [
        "Natural appearance",
        "Mercury-free materials",
        "Immediate structural strength"
      ]
    },
    {
      id: "smile-designing",
      title: "Smile Designing",
      image: "/service/Smile%20Designing.png",
      description: "A customized cosmetic plan that uses Digital Smile Design (DSD) to create the perfect aesthetic harmony between your teeth, gums, and face.",
      procedure: [
        "3D Facial Scanning.",
        "Virtual Mock-up Design.",
        "Final Aesthetic Execution."
      ],
      benefits: [
        "Boosted self-confidence",
        "Precise facial symmetry",
        "Predictable outcomes"
      ]
    },
    {
      id: "teeth-whitening",
      title: "Tooth Cleaning & Whitening",
      image: "/service/Tooth%20Cleaning%20%26%20Whitening.png",
      description: "Remove stubborn stains and bacterial biofilm with our professional scaling and advanced laser whitening systems for a brighter, healthier smile.",
      procedure: [
        "Ultrasonic Scaling.",
        "Air polishing.",
        "Laser Brightening Treatment."
      ],
      benefits: [
        "Immediate aesthetic results",
        "Gum disease prevention",
        "Long-lasting freshness"
      ]
    },
    {
      id: "smile-makeover",
      title: "Smile Makeover",
      image: "/service/Smile%20Makeover.png",
      description: "A comprehensive transformation that may involve veneers, crowns, and contouring to address multiple dental concerns simultaneously.",
      procedure: [
        "Full mouth assessment.",
        "Thin shell placement (Veneers).",
        "Permanent restoration."
      ],
      benefits: [
        "Youthful appearance",
        "Functional improvement",
        "Stain-resistant teeth"
      ]
    },
    {
      id: "implants",
      title: "Dental Implants",
      image: "/service/Dental%20Implants.png",
      description: "The gold standard for tooth replacement. Our surgical specialists use titanium implants to provide a permanent, root-like foundation for missing teeth.",
      procedure: [
        "3D Surgical Planning.",
        "Implant Placement.",
        "Osseointegration & Crown."
      ],
      benefits: [
        "Lifelong tooth solution",
        "Prevents bone loss",
        "Natural chewing force"
      ]
    },
    {
      id: "braces",
      title: "Dental Braces",
      image: "/service/Dental%20Braces.png",
      description: "From traditional metallic braces to modern clear aligners, we offer orthodontic solutions that correct bite alignment and straighten your smile discreetly.",
      procedure: [
        "Orthodontic Evaluation.",
        "Braces/Aligner Fitting.",
        "Periodic Adjustments."
      ],
      benefits: [
        "Perfect teeth alignment",
        "Improved oral hygiene access",
        "Corrected jaw positioning"
      ]
    },
    {
      id: "preventive",
      title: "Dental Health Tips",
      image: "/service/Dental%20Health%20Tips.png",
      description: "Preventive care is the foundation of a healthy smile. Our experts guide you through daily habits and nutritional advice to maintain lifelong oral wellness.",
      procedure: [
        "Proper brushing techniques.",
        "Interdental cleaning habits.",
        "Dietary consultations."
      ],
      benefits: [
        "Reduces dental costs",
        "Healthy, natural teeth",
        "Prevents bad breath"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-container text-primary-foreground py-24 text-center px-4 font-sans relative overflow-hidden">
        <h1 className="text-4xl lg:text-5xl font-serif mb-4">Our Dental Services</h1>
        <p className="max-w-2xl mx-auto font-sans text-primary-foreground/80 leading-relaxed">
          Experience world-class clinical prestige. We combine advanced dental technology with a patient-first approach to ensure your comfort and care.
        </p>
      </section>

      {/* Services List - Alternating Grid */}
      <section className="flex flex-col font-sans">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.id} className={`py-20 lg:py-28 ${isEven ? 'bg-white' : 'bg-background'}`}>
              <div className="container mx-auto px-4 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-serif text-primary mb-4">{service.title}</h2>
                    <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Button variant="outline" className="rounded-none uppercase tracking-wider text-[11px] font-semibold h-10 px-6 mb-12 text-primary border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                      <PlayCircle className="w-4 h-4 mr-2" /> WATCH VIDEO OUTLINE
                    </Button>
                    
                    <div className="grid sm:grid-cols-2 gap-10">
                      {/* Procedure */}
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-[0.2em] text-primary/50 uppercase mb-4">PROCEDURE</h4>
                        <ul className="space-y-3">
                          {service.procedure.map((step, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="font-medium text-primary">0{idx + 1}.</span>
                              <span className="leading-snug">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Benefits */}
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-[0.2em] text-primary/50 uppercase mb-4">BENEFITS</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex gap-3 items-start text-sm text-muted-foreground">
                              <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="leading-snug">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-125 aspect-4/5 bg-slate-100 shadow-md flex items-center justify-center overflow-hidden border border-border relative">
                      {service.image && (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(min-width: 1024px) 500px, 100vw"
                          className="object-cover filter contrast-105"
                        />
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Footer Call to Action */}
      <section className="py-24 bg-background text-center px-4 border-t border-border font-sans">
        <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4">Painless Precision, Personalized Care.</h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-10 leading-relaxed">
          Ready to experience the next level of dental clinical prestige? Our team is dedicated to providing a comfortable, modern environment for all your dental needs.
        </p>
        <Link href="/#contact" passHref>
           <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-wider text-xs font-semibold h-12 px-8">
             BOOK AN APPOINTMENT TODAY
           </Button>
        </Link>
      </section>
    </div>
  );
}
