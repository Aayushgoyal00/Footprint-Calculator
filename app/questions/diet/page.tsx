"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function DietQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(3)

  const options = [
    { value: "0.5", label: "Vegan", description: "(0.5 kg CO₂/day)" },
    { value: "0.6", label: "Mostly Vegan", description: "(0.6 kg CO₂/day)" },
    { value: "0.7", label: "Vegetarian", description: "(0.7 kg CO₂/day)" },
    { value: "0.8", label: "Meat very rarely", description: "(0.8 kg CO₂/day)" },
    { value: "0.9", label: "No beef", description: "(0.9 kg CO₂/day)" },
    { value: "1.0", label: "Meat in some meals", description: "(1.0 kg CO₂/day)" },
    { value: "1.2", label: "Meat in every meal", description: "(1.2 kg CO₂/day)" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.diet)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.diet])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("diet", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="How would you best describe your diet?"
      description="(beef, pork, chicken, fish, eggs, dairy products)"
      currentStep={1}
      totalSteps={9}
    >
      <div className="mt-12">
        <Slider
          min={0}
          max={options.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          leftLabel="VEGAN"
          rightLabel="MEAT LOVER"
          centerLabel={centerLabel}
          centerDescription={centerDescription}
        />

        <NavigationButtons nextPage="/questions/eating-out" />
      </div>
    </QuestionLayout>
  )
}
