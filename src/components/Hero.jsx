"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      desktop: "/1. Desktop Website _Banner.png",
      mobile: "/1. Mobile Website Banner.png",
      alt: "Dental Clinic Banner 1",
    },
    {
      desktop: "/2. Desktop Website _Banner.png",
      mobile: "/2. Mobile Website Banner.png",
      alt: "Dental Clinic Banner 2",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden bg-secondary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Mobile Image */}
          <div className="block md:hidden w-full h-full relative">
            <Image
              src={slide.mobile}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority={index === 0}
            />
          </div>
          
          {/* Desktop Image */}
          <div className="hidden md:block w-full h-full relative">
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
