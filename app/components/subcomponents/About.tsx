"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaDatabase, FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";

const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Intersection Observer 초기화
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // 화면에 보일 때 애니메이션 트리거
          } else {
            setInView(false); // 화면을 벗어나면 애니메이션 초기화
          }
        });
      },
      {
        threshold: 0.5, // 요소가 50% 이상 화면에 보일 때 트리거
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // 컴포넌트 마운트 시 애니메이션 초기화

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col items-center justify-center bg-black"
    >
      <div ref={sectionRef} className="flex flex-col gap-10">
        <div className="flex flex-col gap-3 py-10 border-t-1 border-b-1 border-white">
          <p className="text-white text-4xl leading-relaxed">
            안녕하세요. <br />웹 개발을 좋아하는 프론트엔드 개발자입니다.
          </p>
          <p className="text-white text-xl leading-relaxed">
            React, Next.js를 중심으로 UI를 만들고,
            <br />
            NestJS와 SQL을 사용해 간단한 서버도 구현할 수 있습니다.
            <br />
            작은 프로젝트부터 차근차근, 꾸준히 성장하는 개발자가 되고 싶습니다.
          </p>
        </div>

        <div className="text-white flex items-center gap-10">
          {[
            { icon: <FaHtml5 className="size-20" />, label: "HTML" },
            { icon: <FaCss3Alt className="size-20" />, label: "CSS" },
            {
              icon: <RiJavascriptFill className="size-20" />,
              label: "JavaScript",
            },
            {
              icon: <BiLogoTypescript className="size-20" />,
              label: "TypeScript",
            },
            { icon: <FaReact className="size-20" />, label: "React" },
            { icon: <RiNextjsFill className="size-20" />, label: "Next" },
            { icon: <SiNestjs className="size-20" />, label: "Nest" },
            { icon: <FaDatabase className="size-18" />, label: "SQL" },
          ].map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center opacity-0 ${
                inView ? "animate-fade-in" : ""
              }`}
              style={{
                animationDelay: `${index * 0.2}s`, // 0.2초씩 딜레이
              }}
            >
              {tech.icon}
              <span className="text-xl">{tech.label}</span>
            </div>
          ))}
          <div
            className={`flex flex-col items-center opacity-0 ${
              inView ? "animate-fade-in" : ""
            }`}
            style={{
              animationDelay: "1.6s", // 마지막 항목 0.2초 더 늦게
            }}
          >
            <span className="text-2xl italic tracking-[-0.075em]">Express</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.9); /* 크기를 약간 줄여서 시작 */
          }
          100% {
            opacity: 1;
            transform: scale(1); /* 원래 크기로 돌아옴 */
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards; /* 부드러운 'ease-in-out' 타이밍 함수 */
        }
      `}</style>
    </section>
  );
});

export default AboutSection;
