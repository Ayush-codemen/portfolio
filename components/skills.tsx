import { Cloud, Code, Database, Server, GitBranch, Globe } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      title: "Node.js Development",
      icon: <Server className="h-10 w-10 text-emerald-600" />,
      description:
        "Expert in building scalable backend services and APIs using Node.js, Express, and modern JavaScript.",
    },
    {
      title: "AWS Cloud Services",
      icon: <Cloud className="h-10 w-10 text-sky-600" />,
      description: "Experience with EC2, S3, Lambda, and other AWS services for building scalable cloud solutions.",
    },
    {
      title: "Full-Stack JavaScript",
      icon: <Code className="h-10 w-10 text-amber-600" />,
      description: "Proficient in modern JavaScript frameworks including React, Next.js, and Node.js ecosystem.",
    },
    {
      title: "Docker & Kubernetes",
      icon: <Server className="h-10 w-10 text-blue-600" />,
      description: "Containerization and orchestration for deploying and managing microservices architecture.",
    },
    {
      title: "Database Management",
      icon: <Database className="h-10 w-10 text-purple-600" />,
      description: "Expertise in MongoDB, PostgreSQL, and Redis for efficient data storage and retrieval.",
    },
    {
      title: "CI/CD & DevOps",
      icon: <GitBranch className="h-10 w-10 text-rose-600" />,
      description:
        "Implementing continuous integration and deployment pipelines using GitHub Actions, Jenkins, and AWS tools.",
    },
    {
      title: "API Development",
      icon: <Globe className="h-10 w-10 text-teal-600" />,
      description:
        "Designing and building RESTful and GraphQL APIs with Node.js for seamless frontend-backend integration.",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Specialized in Node.js development with expertise across the full JavaScript ecosystem and cloud technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-slate-200 transition-all duration-300 
                       hover:shadow-xl hover:-translate-y-2 hover:border-transparent group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-slate-100 rounded-full group-hover:bg-slate-800 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-slate-800">{skill.title}</h3>
                <p className="text-slate-600 text-sm group-hover:text-slate-700">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
