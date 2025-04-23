import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Artist Ho - Artist Collaboration Platform",
      image: "Artistho.png", // Update with your actual image path
      description:
        "A Node.js powered platform enabling artists to connect, collaborate, and showcase their talents through multimedia content.",
      technologies: ["Node.js", "Express", "MongoDB", "AWS"],
      github: "https://github.com/Ayush-codemen/Artist-ho---Artist-collaboration-website",
      live: "https://artistlie.vercel.app/",
    },
    {
      title: "Cloud Library System",
      image: "pro1.jpg", // Update with your actual image path
      description:
        "Node.js backend for a digital cloud-based library system managing e-books and multimedia resources with serverless architecture.",
      technologies: ["Node.js", "AWS Lambda", "DynamoDB", "S3"],
      github: "https://github.com/Ayush-codemen/Cloud-library-management-system",
      live: "https://v0-custom-e-book-library-frl82y.vercel.app/",
    },
    {
      title: "Spotify Analytics Dashboard",
      image: "Spotify.PNG", // Update with your actual image path
      description:
        "Real-time analytics dashboard for Spotify creators using Node.js and the Spotify API to visualize listener engagement.",
      technologies: ["Node.js", "Express", "Chart.js", "Spotify API"],
      github: "https://github.com/ayushkumarsingh/spotify-analytics",
      live: "https://spotify-analytics-demo.vercel.app",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects Portfolio</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Showcasing my expertise in Node.js development through real-world applications and solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 
                       transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-800/80 text-white text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-700 hover:text-emerald-700 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-700 hover:text-emerald-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
