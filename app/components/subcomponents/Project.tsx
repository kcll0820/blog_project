"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { defaultCards } from "@/data/ProjectData";

const ProjectSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-center bg-black"
    >
      <div ref={sectionRef} className="w-full max-w-6xl">
        <style>{`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        `}</style>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {defaultCards.map((card, index) => (
            <div
              key={index}
              className="border border-white p-5 rounded shadow-md hover:shadow-lg transition-shadow duration-300 max-w-xs w-full mx-auto"
            >
              <div className="w-full aspect-[5/2] relative rounded-md overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mt-8 text-white">
                {card.title}
              </h3>

              <div className="mt-5 text-sm space-x-4">
                {card.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-white/80 rounded-lg shadow-lg p-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectSection;
