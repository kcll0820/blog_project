"use client";

import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-10">
        <a
          href="https://github.com/kcll0820"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-70 text-white" />
        </a>
        <h2 className="text-6xl font-bold text-white">Jeon Min Hee</h2>
        <span className="text-xl text-white mt-10">
          E-mail: kcll0820@naver.com
        </span>
      </div>
    </section>
  );
});

export default ContactSection;
