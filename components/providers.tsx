"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

type Answer = {
  diet: string
  eatingOut: string
  foodWaste: string
  localFood: string
  processedFood: string
  dairy: string
  streetFood: string
  fastingHabits: string
  stapleFood: string
}

type AnswerContextType = {
  answers: Answer
  setAnswer: (key: keyof Answer, value: string) => void
  calculateFootprint: () => { earthsRequired: number }
}

const defaultAnswers: Answer = {
  diet: "1.0",
  eatingOut: "37.44",
  foodWaste: "1.053",
  localFood: "1.0",
  processedFood: "1.0",
  dairy: "1.0",
  streetFood: "1.0",
  fastingHabits: "1.0",
  stapleFood: "1.0",
}

const AnswerContext = createContext<AnswerContextType | undefined>(undefined)

export function Providers({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Answer>(defaultAnswers)

  const setAnswer = (key: keyof Answer, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const calculateFootprint = () => {
    // Conversion map for eatingOut values to multipliers (normalized around 37.44 -> 1.0)
    const eatingOutMap: { [key: string]: number } = {
      "7.5": 0.2,
      "22.5": 0.6,
      "37.44": 1.0,
      "56.16": 1.5,
      "74.88": 2.0,
      "112.32": 3.0,
    }

    // Food Factors (Treating all as multipliers relative to global average)
    const diet = Number.parseFloat(answers.diet)
    // Use the map to get the multiplier, default to 1.0 if value not found
    const eatingOutMultiplier = eatingOutMap[answers.eatingOut] ?? 1.0
    const foodWaste = Number.parseFloat(answers.foodWaste)
    const localFood = Number.parseFloat(answers.localFood)
    const processedFood = Number.parseFloat(answers.processedFood)
    const dairy = Number.parseFloat(answers.dairy)
    const streetFood = Number.parseFloat(answers.streetFood)
    const fastingHabits = Number.parseFloat(answers.fastingHabits)
    const stapleFood = Number.parseFloat(answers.stapleFood)

    // Average global food footprint (kg CO2/year per person)
    const globalAvg = 1500

    // Calculate user's estimated food footprint (kg CO2/year)
    const foodTotal =
      globalAvg *
      diet *
      eatingOutMultiplier *
      foodWaste *
      localFood *
      processedFood *
      dairy *
      streetFood *
      fastingHabits *
      stapleFood

    // Calculate Earths Required
    const earthsRequired = foodTotal / globalAvg

    return {
      earthsRequired,
    }
  }

  return <AnswerContext.Provider value={{ answers, setAnswer, calculateFootprint }}>{children}</AnswerContext.Provider>
}

export function useAnswers() {
  const context = useContext(AnswerContext)
  if (context === undefined) {
    throw new Error("useAnswers must be used within a Providers")
  }
  return context
}
