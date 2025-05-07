"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import { useRef } from "react";
import MainSection from "./subcomponents/Main";
import ProjectSection from "./subcomponents/Project";
import AboutSection from "./subcomponents/About";
import ContactSection from "./subcomponents/Contact";

export default function Home() {
  const sections = useRef<(HTMLDivElement | null)[]>([]);
  if (!sections) {
  }
  const scrollToSection = (index: number) => {
    sections.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel
        modules={[Mousewheel]}
        className="h-screen"
        style={{ height: "100dvh" }}
        speed={800}
        onSlideChange={(swiper) => {
          const section = document.querySelector(
            "#last-section"
          ) as HTMLElement;
          const text = section?.querySelector("p");
          const contact = section?.querySelector("#contact");

          if (swiper.activeIndex === 3) {
            const tl = gsap.timeline();

            tl.to(section, { backgroundColor: "#111", duration: 0.5 }, 0);
            tl.to(
              text,
              { color: "#fff", y: -50, duration: 1, ease: "power3.out" },
              0
            );
            tl.to(
              contact,
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
              "+=0.6"
            );
          } else {
            gsap.set(section, { backgroundColor: "#fff" });
            gsap.set(text, { color: "#000", y: 0 });
            gsap.set(contact, { opacity: 0, y: 30 });
          }
        }}
      >
        <SwiperSlide>
          <div className="h-screen overflow-auto">
            <MainSection
              ref={(el) => {
                sections.current[0] = el;
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-screen overflow-auto">
            <ProjectSection
              ref={(el) => {
                sections.current[1] = el;
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-screen overflow-auto">
            <AboutSection
              ref={(el) => {
                sections.current[2] = el;
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-screen overflow-auto">
            <ContactSection
              ref={(el) => {
                sections.current[3] = el;
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2">
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection(1)}
            className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Project
          </button>
          <button
            onClick={() => scrollToSection(2)}
            className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection(3)}
            className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection(0)}
            className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Top
          </button>
        </div>
      </nav>
    </div>
  );
}
