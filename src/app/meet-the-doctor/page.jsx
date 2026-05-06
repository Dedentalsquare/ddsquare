import Image from "next/image";
import { CheckCircle2, Award, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Meet the Doctor | De Dental Square",
  description: "Learn more about Dr. Neeraj Agrawal, Chief Periodontist at De Dental Square.",
};

export default function MeetTheDoctor() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Doctor Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] max-w-[500px] mx-auto overflow-hidden shadow-xl border-8 border-white relative">
                 <Image 
                   src="/Meet The Doctor Page.png" 
                   alt="Dr. Neeraj Agrawal" 
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover"
                   priority
                 />
              </div>
            </div>
            
            {/* Doctor Info */}
            <div className="w-full lg:w-1/2 max-w-xl">
              <h4 className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase font-sans mb-3">
                MEET THE DOCTOR
              </h4>
              <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Dr. Neeraj Agrawal</h1>
              
              <div className="flex flex-wrap gap-2 mb-6 font-sans">
                <span className="px-3 py-1 bg-white border border-border text-xs font-medium text-primary">Chief Periodontist</span>
                <span className="px-3 py-1 bg-white border border-border text-xs font-medium text-primary">MDS (Gold Medalist)</span>
                <span className="px-3 py-1 bg-white border border-border text-xs font-medium text-primary">IMS BHU Alumnus</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 font-sans">
                Dr. Neeraj Agrawal is the Chief Periodontist at De Dental Square, specializing in advanced gum care, dental implants, and full-mouth rehabilitation. With over 15 years of clinical and surgical experience, he brings an unparalleled level of precision and compassion to his patients.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8 font-sans">
                His academic excellence at IMS BHU and subsequent gold medal recognition have established him as a leading authority in dental science in Varanasi. Dr. Agrawal believes in a patient-first approach, ensuring that every treatment plan is tailored to the individual's unique needs, combining the latest technological advancements with gentle, empathetic care.
              </p>
              
              <div className="space-y-4 font-sans border-t border-border pt-8">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary/60 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-primary text-sm">Education</h5>
                    <p className="text-sm text-muted-foreground mt-1">MDS from Institute of Medical Sciences (IMS), Banaras Hindu University (BHU)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary/60 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-primary text-sm">Awards & Recognition</h5>
                    <p className="text-sm text-muted-foreground mt-1">Gold Medalist in Periodontology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary/60 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-primary text-sm">Primary Clinic</h5>
                    <p className="text-sm text-muted-foreground mt-1">Ravindrapuri Clinic, Varanasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready for a Consultation?
          </h2>
          <p className="text-primary-foreground/70 font-sans mb-8">
            Schedule an appointment with Dr. Agrawal and experience world-class clinical precision.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-slate-100 text-primary rounded-none uppercase tracking-wider text-xs font-semibold h-12 px-10">
              Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
