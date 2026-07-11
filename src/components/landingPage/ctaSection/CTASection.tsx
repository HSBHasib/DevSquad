import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-18">
      {/* Main CTA Card */}
      <div className="relative overflow-hidden rounded-[32px] bg-linear-to-br from-[#5352ED]/80 via-[#4834DF]/90 to-[#30336B] px-8 py-18  text-center shadow-2xl">
        {/* 📝 Text container */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to Build Something <br className="hidden sm:inline" />{" "}
            Awesome?
          </h2>

          {/* Sub-title */}
          <p className="text-white/80 text-sm sm:text-base font-normal max-w-xl leading-relaxed mb-8 md:mb-10">
            Join the thousands of developers already shipping successful
            projects through DevSquad. Your team is waiting.
          </p>

          {/* (CTA Buttons) */}
          <div className="flex items-center justify-center gap-4 w-full sm:w-auto max-[400px]:flex-col">
            {/* Get Started button */}
            <Link
              href="/auth/register"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#4834DF] font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg active:scale-98 text-center"
            >
              Get Started
            </Link>

            {/* Learn More button */}
            <Link
              href="/about"
              className="w-full sm:w-auto bg-black/15 hover:bg-black/25 text-white border border-white/10 text-sm font-medium px-7 py-3.5 rounded-xl transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
