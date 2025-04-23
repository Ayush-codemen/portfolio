import Image from "next/image"
import Link from "next/link"
//import { Button } from "@/components/hero"
import { Mail, Phone, Linkedin, Github, Music, Download, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-sand-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl
                          transition-transform duration-500 hover:scale-105 group"
            >
              <Image
                src="ashu.png"
                alt="Ayush Kumar Singh"
                width={320}
                height={320}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
              <Music className="h-4 w-4 mr-1" />
              <span>Spotify Popular Creator</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 gradient-text">Ayush Kumar Singh</h1>

            <h2 className="text-xl md:text-2xl text-emerald-700 font-medium mb-6">
              Cloud Solution Architect | DevOps | Ai | Creator
            </h2>

            <p className="text-sand-600 mb-8 max-w-2xl">
              I am Ayush Kumar Singh, currently pursuing my B.Tech in Computer Engineering at Lovely Professional
              University. With expertise in Cloud Computing, Web Development, and Ai, I build scalable applications and innovative
              solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Link
                href="mailto:contact@ayushkumarsingh.com"
                className="flex items-center gap-2 text-sand-700 hover:text-emerald-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </Link>
              <Link
                href="tel:+919334739797"
                className="flex items-center gap-2 text-sand-700 hover:text-emerald-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Phone</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ayush-kr-singh1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand-700 hover:text-emerald-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Ayush-codemen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand-700 hover:text-emerald-700 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-emerald-700 hover:bg-emerald-800 transition-colors group">
                <a href="cv.jpg" download>
                  <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-sand-300 hover:border-emerald-300 hover:bg-emerald-50 transition-all group"
                onClick={() => window.location.href = "mailto:contact@ayushkumarsingh.com"}
              >
                Let's Connect
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
