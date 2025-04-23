import Image from "next/image"
import { ExternalLink, Calendar } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      name: "Introduction to Generative",
      issuer: "Coursera",
      date: "June 2023",
      image: "course1.PNG",
      verificationLink: "https://coursera.org/share/4a17e09c08109871ce11be9043a8499b",
    },
    {
      name: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      date: "March 2023",
      image: "course2.PNG",
      verificationLink: "https://coursera.org/share/15b3640663baf8cdf34c2e4801724d14",
    },
    {
      name: "Internet of Things 4.o and Industrial of Things",
      issuer: "NPTEL",
      date: "April 2025",
      image: "course3.jpg",
      verificationLink: "https://www.coursera.org/verify/docker-kubernetes",
    },
    {
      name: "Cloud Computing",
      issuer: "Cipher School",
      date: "January 2025",
      image: "course5.PNG",
      verificationLink: "https://drive.google.com/file/d/1BE89Thv5CwfdojCF2RogP5Osb_aYEg_P/view?usp=drive_link",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications & Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200
                       transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 relative z-10">
                <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-slate-600 text-sm mb-2">{cert.issuer}</p>
                <div className="flex items-center text-slate-500 text-xs mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{cert.date}</span>
                </div>
                {cert.verificationLink && (
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-slate-700 hover:text-emerald-700 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    <span>Verify Certificate</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
