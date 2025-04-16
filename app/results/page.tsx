"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAnswers } from "@/components/providers"

export default function Results() {
  const { calculateFootprint } = useAnswers()
  const [result, setResult] = useState({ earthsRequired: 0 })

  useEffect(() => {
    const footprint = calculateFootprint()
    setResult(footprint)
  }, [calculateFootprint])

  return (
    <main className="min-h-screen eco-gradient flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-4xl w-full text-center space-y-12">
        <h1 className="text-4xl font-bold">RESULTS</h1>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg space-y-8">
          {/* <div>
            <h2 className="text-2xl">Your personal Earth Overshoot Day is:</h2>
            <div className="flex items-center justify-center">
              <p className="text-7xl font-bold my-4">{result.overshootDay}</p>
              <span className="ml-4 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
                i
              </span>
            </div>
          </div> */}

          <div>
            <h2 className="text-2xl">If everyone lived like you, we would need</h2>
            <div className="flex items-center justify-center">
              <p className="text-7xl font-bold my-4">{result.earthsRequired.toFixed(1)} Earths</p>
              {/* <span className="ml-4 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
                i
              </span> */}
            </div>
          </div>

          {/* <div>
            <h2 className="text-2xl flex items-center justify-center">
              Why can't I get my Footprint score within the means of one planet?
              <span className="ml-4 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
                i
              </span>
            </h2>
          </div> */}
        </div>

        <Link href="/details" className="inline-block mt-8 footprint-button">
          See Details
        </Link>
      </div>
    </main>
  )
}
