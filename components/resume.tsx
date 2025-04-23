import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Resume</h2>

        <div className="flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 w-full max-w-3xl mb-8">
            <div className="aspect-[8.5/11] w-full bg-slate-100 flex items-center justify-center rounded-md mb-6">
              <img
                src="/special.jpg"
                alt="Specialized Resume"
                className="max-w-full max-h-[600px] rounded-md object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <a href="/special.jpg" download>
                <button className="flex items-center gap-2 bg-purple-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Download Specialized CV</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
