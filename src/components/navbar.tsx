"use client";
import SectionWrapper from "./lib/section-wrapper";
import Typography from "./lib/typography";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["i'm", "journey", "works", "certification"];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="border-b fixed w-full z-60 bg-white dark:bg-black">
      <SectionWrapper>
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Typography variant="sub1" mobileVariant="sub2" weight="bold">
            this.jovis;
          </Typography>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-3">
            {sections.map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                scroll={true}
                className={`px-3 py-1 transition ${
                  active === id
                    ? "font-semibold border-b-2"
                    : "border-b-2 border-transparent"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden flex flex-col space-y-2 pb-3"
            >
              {sections.map((id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  scroll={true}
                  className={`px-3 py-2 rounded transition ${
                    active === id
                      ? "font-semibold bg-gray-200 dark:bg-gray-800"
                      : "hover:bg-gray-100 dark:hover:bg-gray-900"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </SectionWrapper>
    </div>
  );
}
