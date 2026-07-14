import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// Footer link types
interface FooterLink {
  href: string;
  label: string;
}

interface LinkGroup {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  // Explore and legal links
  const linkGroups: LinkGroup[] = [
    {
      title: "Explore Links",
      links: [
        { href: "/", label: "Home" },
        { href: "/explore-squads", label: "Explore Squads" },
        { href: "/about", label: "About" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/contact", label: "Support Hub" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-gray-800 bg-[#0B0F19] text-gray-400 text-sm py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 📦 Top Div container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pb-12">
          {/* Left side logo & description */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DevSquad Logo"
                width={35}
                height={35}
                priority
                quality={100}
                className="object-contain image-render-pixelated"
                style={{ imageRendering: "pixelated" }}
              />
              <span className="font-bold text-white text-xl tracking-wide">
                DevSquad
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Precision engineering for elite teams. We match top-tier
              developers with high-impact squads across the globe.
            </p>
          </div>

          {/* Right Part  */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 md:justify-items-end">
            {/* Explore and Legal links */}
            {linkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4 min-w-35">
                <h3 className="font-semibold text-white tracking-wide text-base">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 min-w-45">
              <h3 className="font-semibold text-white tracking-wide text-base">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5">
                  <FiMail size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                  <a
                    href="mailto:hasibhsb19@gmail.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    hasibhsb19@gmail.com
                  </a>
                </li>

                {/* Portfolio  */}
                <li className="flex items-start gap-2.5">
                  <FiGlobe
                    size={16}
                    className="text-cyan-400 mt-0.5 shrink-0"
                  />
                  <Link
                    href="https://hasib-portfolio-silk.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 leading-snug hover:text-white transition duration-150"
                  >
                    Portfolio
                  </Link>
                </li>

                {/* LinkedIn Link */}
                <li className="flex items-start gap-2.5">
                  <FiLinkedin
                    size={16}
                    className="text-cyan-400 mt-0.5 shrink-0"
                  />
                  <Link
                    href="https://www.linkedin.com/in/hasibur-rahman19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 leading-snug hover:text-white transition duration-150"
                  >
                    Linkedin
                  </Link>
                </li>

                {/* Location */}
                <li className="flex items-start gap-2.5">
                  <FiMapPin
                    size={16}
                    className="text-cyan-400 mt-0.5 shrink-0"
                  />
                  <span className="text-gray-400 leading-snug">
                    Gazipur, Dhaka, Bangladesh
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright Text */}
        <div className="border-t border-gray-800/60 pt-6 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} DevSquad. Precision engineering for
            elite teams.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
