import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Internships from "@/components/internships"
import Achievements from "@/components/achievements"
import YouTube from "@/components/youtube"
import University from "@/components/university"
import Resume from "@/components/resume"
import { Suspense } from "react"
import ErrorBoundary from "@/components/error-boundary"

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Internships />
      <ErrorBoundary fallback={<div className="py-20 text-center">Could not load University section</div>}>
        <Suspense fallback={<div className="py-20 text-center">Loading University section...</div>}>
          <University />
        </Suspense>
      </ErrorBoundary>
      <Achievements />
      <ErrorBoundary fallback={<div className="py-20 text-center">Could not load YouTube section</div>}>
        <Suspense fallback={<div className="py-20 text-center">Loading YouTube section...</div>}>
          <YouTube />
        </Suspense>
      </ErrorBoundary>
      <Resume />
    </>
  )
}
