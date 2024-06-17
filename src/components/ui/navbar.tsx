"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full px-20 py-7  transition-all duration-300 z-[999] ${
        scrolled ? "py-4" : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
    >
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold text-zinc-600">
          <span className="text-primary-foreground bg-primary p-2 rounded-lg uppercase">
            Ilman
          </span>{" "}
          Travel
        </h1>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="https://wa.me/6289630289268"
                target="_blank"
                className="font-semibold border border-primary transition-all duration-300 py-2 px-4 hover:bg-primary hover:text-primary-foreground rounded-full"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
