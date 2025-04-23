"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { YoutubeIcon, Play, Clock, Calendar, ThumbsUp, Eye } from "lucide-react"
import Link from "next/link"

export default function YouTube() {
  // Featured videos (larger display)
  const featuredVideos = [
    {
      title: "Karo Mujhe Feel",
      description: "This track is a romantic love song released in 2024 and is available on various music platforms, including Spotify and Amazon Music.",
      thumbnail: "feel.jpg",
      duration: "4:32",
      views: "4K",
      likes: "300",
      date: "Mar 15, 2023",
      url: "https://youtu.be/cu4rV0u7aOk?si=VE2ccYXGWnc-NhVK",
    },
    {
      title: "KAHANI",
      description:"Kahani which is the latest hip hop anthem by the electrifying duo Baabey and Naam Ashu, featuring the mesmerizing Anushka.",
      thumbnail: "kahani.jpg",
      duration: "2:49",
      views: "1.7k",
      likes: "970",
      date: "Jun 22, 2023",
      url: "https://youtu.be/SSyXLT-zPj8?si=pSAUrr8Fr9xPwc4g",
    },
  ]

  // Regular videos (grid display)
  const regularVideos = [
    {
      title: "Theke Pe",
      thumbnail: "thekepe.jpg",
      duration: "3:30",
      views: "2.9K",
      date: "Dec 19, 2024",
      url: "https://youtu.be/26sugmxRysY?si=nve8eIr7YXVxX3pY",
    },
    {
      title: "LEGACY",
      thumbnail: "legacy.jpg",
      duration: "2:50",
      views: "1K",
      date: "Feb 5, 2025",
      url: "https://youtu.be/LgeuxNmkGOc?si=h9RN8ujy9kTPFKfF",
    },
    {
      title: "Grow Up Buddy",
      thumbnail: "buddy.jpg",
      duration: "6:22",
      views: "1K",
      date: "Apr 18, 2023",
      url: "https://youtu.be/JAk7lOxNpu0?si=L949rM3VVe-FmFVJ",
    },
    {
      title: "Uska Seher Uski Gali",
      thumbnail: "uska.jpg",
      duration: "3:00",
      views: "11K",
      date: "May 30, 2023",
      url: "https://youtu.be/uIeElZD433Q?si=ROGbaQumJhnVRPMl",
    },
  ]

  return (
    <section id="youtube" className="py-20 bg-gradient-to-b from-white to-sand-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
            <YoutubeIcon className="h-4 w-4 mr-1" />
            <span>YouTube Creator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-navy-900">My Creative Work</h2>
          <p className="text-center text-sand-600 max-w-2xl">
            Outside tech, I express myself through music. Here's a collection of my performances, covers, and original
            compositions shared on YouTube.
          </p>
        </div>

        {/* Featured Videos Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 pl-1 border-l-4 border-red-500 pl-3">Featured Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredVideos.map((video, index) => (
              <Link
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-white/90 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Play className="h-8 w-8 text-red-600 fill-red-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">{video.title}</h4>
                  <p className="text-sand-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-sand-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {video.views} views
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {video.likes}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {video.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Regular Videos Grid */}
        <div>
          <h3 className="text-xl font-semibold mb-6 pl-1 border-l-4 border-red-500 pl-3">All Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {regularVideos.map((video, index) => (
              <Link
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-2 bg-white/90 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Play className="h-6 w-6 text-red-600 fill-red-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-sand-500">
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {video.views}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {video.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Channel Link */}
        <div className="flex justify-center">
          <Button className="bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-2 px-6" asChild>
            <a href="https://www.youtube.com/@NAAMASHU01" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon className="h-5 w-5" />
              <span>Subscribe to My Channel NAAM ASHU</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
