import Image from "next/image"
import { Calendar } from "lucide-react"

export default function Internships() {
  const internships = [
    {
      title: "Cloud Computing",
      organization: "GokBoru Pvt Ltd",
      duration: "May 2023 - August 2023",
      description:
        "Worked on cloud architecture design, implemented serverless applications, and gained hands-on experience with AWS services including Lambda, S3, and DynamoDB.",
      logo: "intern1.jpg",
    },
    {
      title: "Cloud Computing in Advanced",
      organization: "Cipher School",
      duration: "January 2023 - April 2023",
      description:
        "Completed a Cloud Computing course from Cipher School, gaining practical knowledge in deploying and managing cloud-based solutions.",
      logo: "intern2.PNG",
    },
    {
      title: "Web Development",
      organization: "ECC",
      duration: "August 2022",
      description:
        "Completed a comprehensive Development course from ECC, gaining hands-on experience in building digital business solutions.",
      logo: "intern3.PNG",
    },
  ]

  return (
    <section id="internships" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Internships & Training</h2>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border border-slate-200">
                    <Image
                      src={internship.logo || "/placeholder.svg"}
                      alt={internship.organization}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">{internship.title}</h3>
                  <p className="text-slate-700 font-medium mb-2">{internship.organization}</p>
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{internship.duration}</span>
                  </div>
                  <p className="text-slate-600">{internship.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
