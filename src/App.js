export default function App() {
  return (
    <div className="flex justify-center">
      <div className="my-12 mx-6 flex flex-col space-y-8 md:my-24 md:w-[42rem] 
        md:space-y-3">
        
        <div className="space-y-3 font-semibold md:flex md:justify-between md:space-y-0">
          <div className="text-2xl md:text-3xl">Programming Portfolio</div>
          <div className="text-right text-lg md:text-3xl">Dec 2021 - Present</div>
        </div>
        
        <div className="text-gray-600 space-y-6 md:space-y-12">

          <a href="https://tadahiroueta.com/" className="text-xl">tadahiroueta.com</a>

          <ul className="list-disc ml-5 text-base space-y-4 md:ml-12 md:text-xl">
            <li>
              <a href="https://bridgeamerica.org/">High School Guide for Foreign 
                Students<span className="text-red-500 text-sm float-top"> (under 
                development)</span></a>
            </li>
            <li>
              <a href="https://digit.tadahiroueta.com">Digit-Recognition Neural Network</a>
            </li>
            <li>
              <a href="https://pheromones.tadahiroueta.com">Ant Colony Heuristic - 
                Salesperson Problem</a>
            </li>
            <li>
              <a href="https://playlist.tadahiroueta.com">Spotify Client Search Algorithm
                </a>
            </li>
            <li>
              <a href="https://mmvacuo.tadahiroueta.com">Commercial Website for scientific 
                equipment supplier</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )}