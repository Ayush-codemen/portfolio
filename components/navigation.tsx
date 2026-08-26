"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Music } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Internships", href: "#internships" },
    { name: "University", href: "#university" },
    { name: "Achievements", href: "#achievements" },
    { name: "YouTube", href: "#youtube" },
    { name: "Resume", href: "#resume" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">Ayush Kumar Singh</span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              <Music className="h-3 w-3 mr-1" />
              <span>Creator</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors
                          ${
                            activeSection === link.href.substring(1)
                              ? "text-emerald-700 bg-emerald-50"
                              : "text-sand-700 hover:text-emerald-700 hover:bg-sand-50"
                          }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-sand-700 hover:text-emerald-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                            ${
                              activeSection === link.href.substring(1)
                                ? "text-emerald-700 bg-emerald-50"
                                : "text-sand-700 hover:text-emerald-700 hover:bg-sand-50"
                            }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
