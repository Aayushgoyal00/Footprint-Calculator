import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen eco-gradient flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-xl uppercase tracking-wider">What is your</h2>
          <h1 className="text-6xl font-bold">Ecological Footprint?</h1>
          <p className="text-xl mt-4">How many planets do we need if everybody lives like you?</p>
          <p className="text-xl">When is your personal Overshoot Day?</p>
        </div>

        <div className="mt-16">
          <Link href="/questions/diet" className="footprint-button text-lg px-8 py-4">
            Take the first step
          </Link>
        </div>
      </div>
    </main>
  )
}
