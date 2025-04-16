"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAnswers } from "@/components/providers"

export default function Details() {
  const { answers, calculateFootprint } = useAnswers()
  const [result, setResult] = useState({ earthsRequired: 0 })

  useEffect(() => {
    const footprint = calculateFootprint()
    setResult(footprint)
  }, [calculateFootprint])

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Your Food Footprint Details</h1>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p className="text-lg mb-2">
            Your food footprint requires <span className="font-bold">{result.earthsRequired.toFixed(2)} Earths</span> to
            sustain.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Answers</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Diet Type</h3>
                <p>
                  {answers.diet === "0.5"
                    ? "Vegan"
                    : answers.diet === "0.6"
                      ? "Mostly Vegan"
                      : answers.diet === "0.7"
                        ? "Vegetarian"
                        : answers.diet === "0.8"
                          ? "Meat very rarely"
                          : answers.diet === "0.9"
                            ? "No beef"
                            : answers.diet === "1.0"
                              ? "Meat in some meals"
                              : "Meat in every meal"}
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Restaurant Spending</h3>
                <p>
                  {answers.eatingOut === "7.5"
                    ? "Less than 100 INR/week"
                    : answers.eatingOut === "22.5"
                      ? "100-300 INR/week"
                      : answers.eatingOut === "37.44"
                        ? "300-500 INR/week"
                      : answers.eatingOut === "56.16"
                        ? "500-750 INR/week"
                      : answers.eatingOut === "74.88"
                        ? "750-1000 INR/week"
                      : "More than 1000 INR/week"}
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Food Waste</h3>
                <p>
                  {answers.foodWaste === "1.0"
                    ? "None (0%)"
                    : answers.foodWaste === "1.053"
                      ? "0%-5%"
                    : answers.foodWaste === "1.11"
                      ? "5%-10%"
                    : answers.foodWaste === "1.18"
                      ? "10%-20%"
                    : answers.foodWaste === "1.25"
                      ? "20%-30%"
                    : "More than 30%"}
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Local Food</h3>
                <p>
                  {answers.localFood === "0.8"
                    ? "Almost all locally sourced"
                    : answers.localFood === "0.9"
                      ? "Mostly locally sourced"
                    : answers.localFood === "0.95"
                      ? "More local than imported"
                    : answers.localFood === "1.0"
                      ? "Some local, some imported"
                    : answers.localFood === "1.05"
                      ? "More imported than local"
                    : "Don't consider food origin"}
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Processed Foods</h3>
                <p>
                  {answers.processedFood === "0.9"
                    ? "Almost never"
                    : answers.processedFood === "0.95"
                      ? "Rarely"
                    : answers.processedFood === "1.0"
                      ? "Sometimes"
                    : answers.processedFood === "1.1"
                      ? "Regularly"
                    : answers.processedFood === "1.2"
                      ? "Often"
                    : "Daily"}
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Dairy Consumption</h3>
                <p>
                  {answers.dairy === "0.7"
                    ? "None"
                    : answers.dairy === "0.8"
                      ? "Less than 250ml"
                    : answers.dairy === "0.9"
                      ? "250ml - 500ml"
                    : answers.dairy === "1.0"
                      ? "500ml - 1L"
                    : answers.dairy === "1.2"
                      ? "1L - 2L"
                    : "More than 2L"}
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Street Food/Takeout</h3>
                <p>
                  {answers.streetFood === "0.9"
                    ? "Never"
                    : answers.streetFood === "0.95"
                      ? "Rarely"
                    : answers.streetFood === "1.0"
                      ? "Once or twice a week"
                    : answers.streetFood === "1.15"
                      ? "3-4 times a week"
                    : answers.streetFood === "1.3"
                      ? "5-6 times a week"
                    : "Daily"}
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Fasting/Traditional Diet Practices</h3>
                <p>
                  {answers.fastingHabits === "1.0"
                    ? "Never"
                    : answers.fastingHabits === "0.98"
                      ? "Rarely (e.g., a few times a year)"
                    : answers.fastingHabits === "0.95"
                      ? "Occasionally (e.g., monthly)"
                    : answers.fastingHabits === "0.92"
                      ? "Regularly (e.g., weekly/bi-weekly during specific periods)"
                    : answers.fastingHabits === "0.90"
                      ? "Frequently (e.g., multiple times a week during specific periods)"
                    : "Unknown" // Fallback for unexpected values
                  }
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">Rice/Wheat Consumption</h3>
                <p>
                  {answers.stapleFood === "0.9"
                    ? "Rarely"
                    : answers.stapleFood === "0.95"
                      ? "Once a day"
                    : answers.stapleFood === "1.0"
                      ? "1-2 meals/day"
                    : answers.stapleFood === "1.05"
                      ? "2-3 meals/day"
                    : answers.stapleFood === "1.1"
                      ? "3-4 meals/day"
                    : "Every meal"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Tips to Reduce Your Footprint</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduce meat consumption, especially beef which has the highest carbon footprint</li>
            <li>Buy locally produced, seasonal foods to reduce transportation emissions</li>
            <li>Minimize food waste by planning meals and properly storing food</li>
            <li>Choose less processed and packaged foods</li>
            <li>Grow your own herbs and vegetables if possible</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Over
          </Link>
        </div>
      </div>
    </main>
  )
}
