"use client"

import Link from "next/link"
import { Mail, Linkedin, Github, Music, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-12 bg-gradient-to-b from-sand-50 to-sand-100 border-t border-sand-200">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-8">
          <button
            onClick={scrollToTop}
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 mb-6 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-emerald-700 group-hover:animate-bounce" />
          </button>

          <h2 className="text-2xl font-bold gradient-text mb-2">Ayush Kumar Singh</h2>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-sand-600">Cloud Solution Architect</span>
            <span className="w-1 h-1 rounded-full bg-sand-400"></span>
            <span className="text-sm text-sand-600">DevOps</span>
            <span className="w-1 h-1 rounded-full bg-sand-400"></span>
            <span className="inline-flex items-center text-sm text-emerald-700">
              <Music className="h-3 w-3 mr-1" />
              <span>Spotify Creator</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-sand-600">
              &copy; {new Date().getFullYear()} Ayush Kumar Singh. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="mailto:contact@ayushkumarsingh.com"
              className="text-sand-600 hover:text-emerald-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ayush-kr-singh1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-600 hover:text-emerald-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Ayush-codemen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-600 hover:text-emerald-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
