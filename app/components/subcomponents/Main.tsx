"use client";

import { forwardRef } from "react";

const MainSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="relative w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative z-10 flex items-center justify-center h-screen">
        <h1 className="text-white text-5xl font-bold text-center drop-shadow-lg">
          portfolio
        </h1>
      </div>
    </section>
  );
});
MainSection.displayName = "MainSection";

export default MainSection;
