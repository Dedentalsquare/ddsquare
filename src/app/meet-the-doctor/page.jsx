import Image from "next/image";
import { GraduationCap, BriefcaseMedical, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Meet the Doctor | De Dental Square",
  description: "Learn more about Dr. Neeraj Agrawal, Chief Periodontist at De Dental Square.",
};

export default function MeetTheDoctor() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            {/* Doctor Image */}
            <div className="w-full lg:w-[45%]">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto shadow-2xl rounded-xl overflow-hidden bg-white/50">
                <Image 
                  src="/Photo from Dr. Neeraj Agrawal.jpg" 
                  alt="Dr. Neeraj Agrawal" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            
            {/* Doctor Info */}
            <div className="w-full lg:w-[55%]">
              <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-serif text-foreground mb-3">
                Meet Varanasi's Leading Dental Expert
              </h1>
              <h2 className="text-lg md:text-xl font-serif text-[#b6945a] italic mb-8">
                Dr. Neeraj Agrawal (MDS) - Gold Medalist Periodontist and Oral Implantologist
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-[1.8] font-sans text-[15px] max-w-2xl">
                <p>
                  With over 15 years of clinical excellence and a legacy of transforming more than 3,000
                  smiles, Dr. Neeraj Agrawal stands as a beacon of precision dentistry in Varanasi. His
                  practice is built on the pillars of advanced surgical expertise and a compassionate,
                  patient-first approach.
                </p>

                <p>
                  Located in the heart of Ravindrapuri, Dr. Agrawal specializes in complex periodontology
                  and oral implantology, bringing international standards of clinical prestige to the holy
                  city. Every treatment plan is a bespoke journey toward optimal oral health, delivered with
                  quiet assurance and surgical mastery.
                </p>
              </div>
              
              <div className="flex items-center gap-8 lg:gap-12 mt-12 pt-8">
                <div>
                  <div className="text-2xl font-serif text-foreground mb-1">15+</div>
                  <div className="text-[10px] font-sans font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Years Experience
                  </div>
                </div>
                <div className="w-px h-12 bg-border/80"></div>
                <div>
                  <div className="text-2xl font-serif text-foreground mb-1">3000+</div>
                  <div className="text-[10px] font-sans font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Happy Patients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-xs font-sans font-bold tracking-[0.25em] text-muted-foreground uppercase mb-4">
            Academic Excellence
          </h3>
          <h2 className="text-2xl lg:text-3xl font-serif text-foreground mb-16">
            Credentials & Professional Affiliations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 border border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-5 text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-[10px] font-sans font-bold tracking-widest uppercase mb-2 text-foreground leading-relaxed">
                MDS Degree &<br/>Gold Medalist
              </h4>
              <p className="text-xs font-serif italic text-muted-foreground leading-relaxed">
                Top of his class in specialized<br/>periodontics
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 border border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-5 text-primary">
                <BriefcaseMedical className="w-5 h-5" />
              </div>
              <h4 className="text-[10px] font-sans font-bold tracking-widest uppercase mb-2 text-foreground leading-relaxed">
                15+ Years<br/>Clinical Experience
              </h4>
              <p className="text-xs font-serif italic text-muted-foreground leading-relaxed">
                Dedicated practice in<br/>advanced dental surgery
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 border border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-5 text-primary">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-[10px] font-sans font-bold tracking-widest uppercase mb-2 text-foreground leading-relaxed">
                World Dental<br/>Council
              </h4>
              <p className="text-xs font-serif italic text-muted-foreground leading-relaxed">
                International Associate<br/>member since 2012
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 border border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-5 text-primary">
                <div className="font-bold text-lg">+</div>
              </div>
              <h4 className="text-[10px] font-sans font-bold tracking-widest uppercase mb-2 text-foreground leading-relaxed">
                Former IMS BHU<br/>Faculty
              </h4>
              <p className="text-xs font-serif italic text-muted-foreground leading-relaxed">
                Shaping future specialists at a<br/>premier institute.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 border border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-5 text-primary">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-[10px] font-sans font-bold tracking-widest uppercase mb-2 text-foreground leading-relaxed">
                MISOI, IAWDC,<br/>FAGE
              </h4>
              <p className="text-xs font-serif italic text-muted-foreground leading-relaxed">
                Recognized fellow across<br/>prestigious boards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container text-white py-24 mx-4 mb-4 lg:mx-8 lg:mb-8 rounded-2xl overflow-hidden relative">
        {/* Subtle dot pattern or texture could go here if needed */}
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Experience World-Class Care in Safe Hands
          </h2>
          
          <Link href="/contact" className="mb-8">
            <Button className="bg-white hover:bg-white/90 text-primary-container rounded-sm uppercase tracking-widest text-[11px] font-bold h-14 px-10 transition-all shadow-lg hover:shadow-xl">
              Schedule A Consultation
            </Button>
          </Link>
          
          <p className="text-[10px] font-sans font-medium tracking-[0.2em] text-white/60 uppercase">
            Available Mon - Sat | Ravindrapuri, Varanasi
          </p>
        </div>
      </section>
    </div>
  );
}
