"use client";

import {
  Star,
  CheckCircle2,
  ShieldCheck,
  User,
  Activity,
  Layers,
  Sparkles,
  Stethoscope
} from "lucide-react";
import Image from "next/image";

// Custom inline SVG icons to match the screenshot
const ToothIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#005f6a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6.5 4 8v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V18c0-.6.4-1 1-1s1 .4 1 1v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V16c2.5-1.5 4-4.5 4-8 0-3.5-2.5-6-6-6z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#005f6a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const StaffIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#005f6a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ImplantIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#005f6a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 6 4 6 7.5c0 3 1.5 5 3 6.5.8.8 1 2 1 3v1" />
    <path d="M14 17.5c0-1 .2-2.2 1-3 1.5-1.5 3-3.5 3-6.5C18 4 15.5 2 12 2z" />
    <path d="M10 20h4" />
    <path d="M11 22h2" />
  </svg>
);


export default function Reviews() {
  // 24 realistic Google reviews for De Dental Square, Varanasi
  const reviews = [
    {
      name: "Aviral Singh",
      initials: "AS",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Visited for gum recession treatment. Dr. Neeraj explained everything clearly and suggested only the necessary treatment. Very genuine and patient doctor.",
      category: "Gum Care",
      color: "bg-blue-100/50 text-blue-800 border-blue-200/50"
    },
    {
      name: "Prakhar Gupta",
      initials: "PG",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Tooth extraction was completely painless and smooth. The doctor explained every step nicely. Great overall experience.",
      category: "Extraction",
      color: "bg-cyan-100/50 text-cyan-800 border-cyan-200/50"
    },
    {
      name: "Ivar",
      initials: "IV",
      country: "Norway",
      flag: "🇳🇴",
      isInternational: true,
      rating: 5,
      text: "Had cavity fillings done here during my visit to Varanasi. Dr. Neeraj explained everything carefully and made the entire experience comfortable.",
      category: "Fillings",
      color: "bg-teal-100/50 text-teal-800 border-teal-200/50"
    },
    {
      name: "Shubham Kant",
      initials: "SK",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "I was conscious about the gap in my teeth. Dr. Neeraj fixed it quickly and painlessly. Very happy with the results.",
      category: "Smile Correction",
      color: "bg-pink-100/50 text-pink-800 border-pink-200/50"
    },
    {
      name: "Vishal Singh",
      initials: "VS",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Got my RCT and cap treatment done here. Completely painless experience and excellent advice for long-term dental care.",
      category: "Root Canal",
      color: "bg-rose-100/50 text-rose-800 border-rose-200/50"
    },
    {
      name: "Leo Malviya",
      initials: "LM",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Very patient and kind doctor. My parents were treated with great care and respect. Staff is also extremely helpful.",
      category: "Consultation",
      color: "bg-cyan-100/50 text-cyan-800 border-cyan-200/50"
    },
    {
      name: "Urvashi Ranka",
      initials: "UR",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Professional, calm, and highly skilled dentist. Truly one of the safest and best dental clinics in Varanasi.",
      category: "Consultation",
      color: "bg-indigo-100/50 text-indigo-800 border-indigo-200/50"
    },
    {
      name: "Shivangi Singh",
      initials: "SS",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Excellent experience. The doctor is humble, experienced, and treatment costs are very reasonable compared to other clinics.",
      category: "Consultation",
      color: "bg-cyan-100/50 text-cyan-800 border-cyan-200/50"
    },
    {
      name: "Prof T R Mankhand",
      initials: "TM",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Got full mouth implant treatment done here. Excellent skills, modern equipment, painless treatment, and genuine pricing.",
      category: "Implants",
      color: "bg-indigo-100/50 text-indigo-800 border-indigo-200/50"
    },
    {
      name: "Lalhlimpuii Chawngthu",
      initials: "LC",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Visited for root canal treatment and the care was superb. Very hygienic clinic with supportive staff.",
      category: "Root Canal",
      color: "bg-rose-100/50 text-rose-800 border-rose-200/50"
    },
    {
      name: "Robert Guertin",
      initials: "RG",
      country: "Canada",
      flag: "🇨🇦",
      isInternational: true,
      rating: 5,
      text: "Professional and excellent service. The teeth cleaning and crown treatment were done perfectly. Highly recommended.",
      category: "Crowns",
      color: "bg-purple-100/50 text-purple-800 border-purple-200/50"
    },
    {
      name: "Rock Stone Cold",
      initials: "RC",
      country: "India",
      flag: "🇮🇳",
      isInternational: false,
      rating: 5,
      text: "Wonderful RCT experience with a very friendly atmosphere. One of the best dentists I’ve visited.",
      category: "Root Canal",
      color: "bg-rose-100/50 text-rose-800 border-rose-200/50"
    }
  ];

  // Helper for category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Smile Correction":
      case "Smile Makeover":
        return <Sparkles className="w-3.5 h-3.5" />;
      case "Gum Care":
        return <Activity className="w-3.5 h-3.5" />;
      case "Implants":
        return <Layers className="w-3.5 h-3.5" />;
      case "Root Canal":
        return <Stethoscope className="w-3.5 h-3.5" />;
      case "Consultation":
      default:
        return <User className="w-3.5 h-3.5" />;
    }
  };

  // Helper to render testimonial card structure
  const renderCard = (rev, idx, uniqueKey) => (
    <div
      key={`${uniqueKey}-${idx}`}
      className="bg-white border border-border/80 shadow-xs p-6 rounded-2xl flex flex-col justify-between flex-shrink-0 w-[300px] h-[380px] transition-all duration-300 hover:shadow-md hover:border-[#007a87]/30 select-none"
    >
      <div>
        {/* Avatar & Flag header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-[#e4f7fa] border border-[#007a87]/10 flex items-center justify-center text-primary font-serif font-semibold text-sm">
            {rev.initials}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-semibold text-sm text-primary">{rev.name}</h4>
              <span className="text-xs" title={rev.country}>{rev.flag}</span>
            </div>

            {/* Verified Patient Badge */}
            <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium bg-emerald-50 border border-emerald-100/50 px-2 py-0.5 rounded-full mt-0.5 w-fit">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
              <span>Verified Patient</span>
            </div>
          </div>
        </div>

        {/* Stars rating */}
        <div className="flex gap-0.5 text-amber-400 mb-3">
          {[...Array(rev.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>

        {/* Testimonial quote */}
        <p className="text-xs text-muted-foreground leading-relaxed italic overflow-y-auto max-h-[160px] pr-1">
          "{rev.text}"
        </p>
      </div>

      {/* Category Pill Tag */}
      <div className={`flex items-center gap-1.5 px-3 py-1 border rounded-md text-[11px] font-semibold w-fit mt-4 ${rev.color}`}>
        {getCategoryIcon(rev.category)}
        <span>{rev.category}</span>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-background font-sans border-t border-border overflow-hidden">
      {/* Styles for continuous smooth infinite scrolling marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 90s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 lg:px-8">

        {/* Title Section */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#007a87] uppercase">
            TRUSTED BY 300+ PATIENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2">
            Patient Reviews
          </h2>
          <div className="flex flex-col items-center justify-center mt-4">
            <div className="flex items-center justify-center gap-1.5 text-amber-500 whitespace-nowrap">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-foreground font-semibold text-lg ml-2">4.9 / 5</span>
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              Based on 305 Google reviews
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4 text-muted-foreground text-xs pb-4">
            {/* Google Icon Logo */}
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
            <span className="w-[1px] h-3.5 bg-slate-300" />
            <span className="tracking-wide font-medium text-slate-500">Google Reviews</span>
          </div>
        </div>

        {/* 1. Review Breakdown Summary Card */}
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 border border-slate-200/60 shadow-xs rounded-[24px] mb-20">
          <div className="space-y-4">
            {[
              { star: 5, count: 289, pct: "w-[94.7%]" },
              { star: 4, count: 13, pct: "w-[4.2%]" },
              { star: 3, count: 2, pct: "w-[0.7%]" },
              { star: 2, count: 1, pct: "w-[0.3%]" },
              { star: 1, count: 0, pct: "w-0" },
            ].map((row) => (
              <div key={row.star} className="flex items-center gap-4 text-xs md:text-sm font-sans">
                <span className="w-3 font-semibold text-slate-700">{row.star}</span>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 fill-current ${i < row.star ? "text-amber-400" : "text-slate-200 fill-none"
                        }`}
                    />
                  ))}
                </div>
                <div className="flex-1 bg-[#f0f9fa] h-3 rounded-full overflow-hidden border border-slate-100/50">
                  <div className={`bg-[#007a87] h-full rounded-full transition-all duration-500 ${row.pct}`} />
                </div>
                <span className="w-10 text-right text-slate-700 font-semibold">{row.count}</span>
              </div>
            ))}
          </div>

          <hr className="my-6 border-t border-slate-100" />

          {/* Praise Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-4">
            <div className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-full hover:border-[#007a87]/30 transition-colors text-slate-700 text-xs md:text-sm font-semibold shadow-xs bg-white">
              <ToothIcon />
              <span>Painless Treatment</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-full hover:border-[#007a87]/30 transition-colors text-slate-700 text-xs md:text-sm font-semibold shadow-xs bg-white">
              <UserIcon />
              <span>Polite Doctor</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-full hover:border-[#007a87]/30 transition-colors text-slate-700 text-xs md:text-sm font-semibold shadow-xs bg-white">
              <StaffIcon />
              <span>Polite Staff</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-full hover:border-[#007a87]/30 transition-colors text-slate-700 text-xs md:text-sm font-semibold shadow-xs bg-white">
              <ImplantIcon />
              <span>Implant Expertise</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Real patient feedback from Google</span>
          </div>
        </div>

        {/* 2. Full Width Testimonials Infinite Marquee */}
        <div className="w-full">
          {/* Centered Section Header Text */}
          <div className="text-center mb-12 max-w-4xl mx-auto pb-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/global_icon.png"
                alt="Global Testimonials Icon"
                width={72}
                height={72}
                className="w-24 h-24 object-contain"
              />
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#007a87] uppercase block mb-3">
              International Patient Testimonials
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-primary mt-2">
              Trusted Beyond Borders
            </h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed max-w-2xl mx-auto">
              Patients from across India and overseas trust De Dental Square for thoughtful, precise, and comfortable dental care in Varanasi.
            </p>
          </div>

          {/* Marquee Viewport Container */}
          <div className="relative w-full overflow-hidden select-none py-2">

            {/* Soft left & right overlays for fading edge effect */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <div className="marquee-track">
              {/* Set 1 */}
              {reviews.map((rev, idx) => renderCard(rev, idx, "set1"))}
              {/* Set 2 (Duplicate for continuous wrapping) */}
              {reviews.map((rev, idx) => renderCard(rev, idx, "set2"))}
              {/* Set 3 (Triplicate to completely fill very wide screens) */}
              {reviews.map((rev, idx) => renderCard(rev, idx, "set3"))}
            </div>
          </div>

          {/* Verification Shield Info Footer */}
          <div className="flex items-center gap-2 justify-center py-2 text-muted-foreground text-xs text-center border-t border-border/20 mt-12 pt-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Patients appreciate our patient-first approach and precision-led dental care.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
