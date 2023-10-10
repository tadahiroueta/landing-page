import { LinkIcon } from "@heroicons/react/24/outline"

function Box({ children }) {
  return (
    <div key={ children } className="py-0.5 px-2 text-sm border border-gray-700 rounded-full ml-4">
      { children }
    </div>
  )
}

function Link({ to, className, children, topics }) {
  return (
    <div key={ to } className="space-y-2">
      <a href={ to } className="flex items-center space-x-3">
        <div>{ children }</div>
        <LinkIcon className="h-4"/>
      </a>
      <div className="flex space-x-3">
        { topics && topics.map(topic => (
          <Box>{ topic }</Box>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex justify-center">
      <div className="my-12 mx-6 flex flex-col space-y-8 md:my-24 md:w-[42rem] 
        md:space-y-3">
        {/* header */}
        <div className="space-y-3 font-semibold md:flex md:justify-between md:space-y-0">
          <div className="text-2xl md:text-3xl">Programming Portfolio</div>
          <div className="text-lg text-right md:text-3xl">Dec 2021 - Present</div>
        </div>
        {/* content */}
        <div className="space-y-8 text-gray-600 md:space-y-12">
          <a href="https://tadahiroueta.com/" className="text-xl">tadahiroueta.com</a>
          <div className="ml-5 space-y-4 text-base list-disc md:ml-12 md:text-xl">
            <Link to="https://pheromones.tadahiroueta.com" topics={ ["Nature-Inspired", "Real Time", "React JS", "SASS"] }>
              Ant Colony Heuristic - Salesperson Problem
            </Link>
            <Link to="https://bridgeamerica.org/" topics={ ["MongoDB", "CrowdSourced", "React JS", "Tailwind CSS"] }>
              High School Guide for Foreign Students <span className="text-red-400"> (under development*)</span>
            </Link>
            <Link to="https://digit.tadahiroueta.com" topics={ ["Nature-Inspired", "AI", "Calculus", "Real Time", "Freehand Input", "React JS"] }>
              Digit-Recognition Neural Network
            </Link>
            <Link to="https://spotifier.tadahiroueta.com" topics={ ["React JS", "Spotify API", "Tailwind CSS"] }>
              Spotify Client Search Algorithm
            </Link>
            <Link to="https://mmvacuo.tadahiroueta.com" topics={ ["React JS", "Commercial", "Portuguese"] }>
              Commercial Website for scientific equipment supplier
            </Link>
          </div>
        </div>
      </div>
    </div>
  )}