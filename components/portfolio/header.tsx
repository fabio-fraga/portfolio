"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Experiências", href: "#experiencias" },
  { name: "Soft Skills", href: "#soft-skills" },
  { name: "Formação", href: "#formacao" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-primary font-bold text-xl hover:opacity-80 transition-opacity"
          >
            {"</>"}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <span className="text-primary font-mono mr-1">
                    0{index + 1}.
                  </span>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary border border-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors duration-300"
              >
                Currículo
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary p-2 z-50"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background backdrop-blur-md z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-foreground hover:text-primary transition-colors duration-300"
            >
              <p className="text-center">
                <span className="text-primary font-mono text-center text-sm mb-1 mr-2">
                  0{index + 1}.
                </span>
                {link.name}
              </p>
            </Link>
          ))}
          <Link
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border border-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-300 mt-4"
          >
            Currículo
          </Link>
        </nav>
      </div>
    </>
  );
}
