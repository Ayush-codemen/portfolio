"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, MapPin, Calendar, Users, BookOpen, Award, ChevronRight, Play } from "lucide-react"

export default function University() {
  const [activeTab, setActiveTab] = useState("campus")

  const universityInfo = {
    name: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    program: "B.Tech in Computer Engineering",
    duration: "2023 - 2026",
    description:
      "My journey at Lovely Professional University has been transformative, providing me with both academic excellence and practical experience in computer engineering. The university's state-of-the-art facilities and industry connections have helped me develop a strong foundation in technology.",
  }

  const tabs = [
    { id: "campus", label: "Campus Life", icon: <MapPin className="h-4 w-4" /> },
    { id: "academics", label: "Academics", icon: <BookOpen className="h-4 w-4" /> },
    { id: "events", label: "Events", icon: <Calendar className="h-4 w-4" /> },
    { id: "achievements", label: "Achievements", icon: <Award className="h-4 w-4" /> },
  ]

  const tabContent = {
    campus: {
      title: "Campus Experience",
      description:
        "LPU's sprawling campus offers world-class facilities including modern labs, libraries, sports complexes, and recreational areas. The diverse student community creates a vibrant atmosphere for learning and growth.",
      images: [
        { src: "lpu1.jpg", alt: "LPU Campus Main Building" },
        { src: "lib.jpg", alt: "University Library" },
        { src: "research.jpg", alt: "Student Recreation Center" },
      ],
      video: {
        thumbnail: "view.png",
        title: "Campus Tour 2025",
        url: "https://youtu.be/U40sGneJwRQ",
      },
    },
    academics: {
      title: "Academic Excellence",
      description:
        "The computer engineering program at LPU offers a comprehensive curriculum covering programming, systems design, cloud computing, and more. The faculty includes industry experts who provide practical insights alongside theoretical knowledge.",
      images: [
        { src: "lab1.jpg", alt: "Computer Lab" },
        { src: "class1.png", alt: "Classroom Session" },
        { src: "present.jpg", alt: "Project Presentation" },
      ],
      video: {
        thumbnail: "computer.jpg",
        title: "Computer Engineering Program Overview",
        url: "https://youtube.com/watch?v=program-overview",
      },
    },
    events: {
      title: "Events & Activities",
      description:
        "LPU hosts numerous technical events, hackathons, cultural festivals, and workshops throughout the academic year. These events provide opportunities to showcase talents, network with industry professionals, and develop leadership skills.",
      images: [
        { src: "fest.jpg", alt: "Annual Tech Fest" },
        { src: "hackton.jpg", alt: "Hackathon Competition" },
        { src: "culture.jpg", alt: "Cultural Festival" },
      ],
      video: {
        thumbnail: "win.PNG",
        title: "LPU Tech Fest Highlights",
        url: "https://youtube.com/watch?v=tech-fest",
      },
    },
    achievements: {
      title: "University Achievements",
      description:
        "LPU has been recognized for its academic excellence, research contributions, and industry partnerships. The university has produced numerous successful alumni who are making significant contributions in various fields globally.",
      images: [
        { src: "award1.jpg", alt: "Award Ceremony" },
        { src: "award2.jpg", alt: "Research Exhibition" },
        { src: "event.jpg", alt: "Industry Partnership Event" },
      ],
      video: {
        thumbnail: "story.png",
        title: "LPU Success Stories",
        url: "https://youtube.com/watch?v=success-stories",
      },
    },
  }

  // Ensure we have a valid tab content with fallback
  const currentTabContent = tabContent[activeTab as keyof typeof tabContent] || tabContent.campus

  return (
    <section id="university" className="py-20 bg-gradient-to-b from-emerald-50/50 to-teal-50/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            <GraduationCap className="h-4 w-4 mr-1" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-navy-900">My University Experience</h2>
          <p className="text-center text-sand-600 max-w-2xl">
            Exploring my educational journey at Lovely Professional University, where I've grown both academically and
            personally.
          </p>
        </div>

        {/* University Overview Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all hover:shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src="college.jpeg"
                alt="Lovely Professional University"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center justify-center md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-6">
                  <GraduationCap className="h-12 w-12 mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Est. 2005</h3>
                  <p className="text-sm">One of India's largest universities</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-2/3 md:p-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">{universityInfo.name}</h3>
              <div className="flex flex-wrap gap-y-2 mb-4">
                <div className="w-full sm:w-1/2 flex items-center text-sand-600">
                  <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                  <span>{universityInfo.location}</span>
                </div>
                <div className="w-full sm:w-1/2 flex items-center text-sand-600">
                  <BookOpen className="h-4 w-4 mr-2 text-purple-600" />
                  <span>{universityInfo.program}</span>
                </div>
                <div className="w-full sm:w-1/2 flex items-center text-sand-600">
                  <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                  <span>{universityInfo.duration}</span>
                </div>
                <div className="w-full sm:w-1/2 flex items-center text-sand-600">
                  <Users className="h-4 w-4 mr-2 text-purple-600" />
                  <span>30,000+ Students</span>
                </div>
              </div>
              <p className="text-sand-600 mb-4">{universityInfo.description}</p>
              <Button
                className="bg-purple-700 hover:bg-purple-800 transition-colors group"
                onClick={() => window.open("https://www.lpu.in", "_blank")}
              >
                Visit University Website
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors
                            ${
                              activeTab === tab.id
                                ? "text-purple-700 border-b-2 border-purple-700"
                                : "text-sand-600 hover:text-purple-700 hover:bg-purple-50"
                            }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-purple-800 mb-2">{currentTabContent.title}</h3>
              <p className="text-sand-600">{currentTabContent.description}</p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {currentTabContent.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all hover:scale-105"
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm p-3">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Feature */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={currentTabContent.video.thumbnail || "/placeholder.svg"}
                alt={currentTabContent.video.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <div className="p-4 bg-white/90 rounded-full transform hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-purple-700 fill-purple-700" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">{currentTabContent.video.title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-purple-100">
            <div className="p-3 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Technical Knowledge</h3>
            <p className="text-sand-600">
              Gained comprehensive understanding of computer engineering principles, programming languages, and system
              design.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-purple-100">
            <div className="p-3 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Teamwork & Leadership</h3>
            <p className="text-sand-600">
              Developed strong collaboration skills through group projects, hackathons, and student organizations.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-purple-100">
            <div className="p-3 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Industry Readiness</h3>
            <p className="text-sand-600">
              Prepared for professional challenges through industry-focused curriculum, internships, and practical
              training.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
