"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function EatingOutQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(1)

  const options = [
    { value: "7.5", label: "Less than 100 INR/week", description: "(7.5 kg/year)" },
    { value: "22.5", label: "100-300 INR/week", description: "(22.5 kg/year)" },
    { value: "37.44", label: "300-500 INR/week", description: "(37.44 kg/year)" },
    { value: "56.16", label: "500-750 INR/week", description: "(56.16 kg/year)" },
    { value: "74.88", label: "750-1000 INR/week", description: "(74.88 kg/year)" },
    { value: "112.32", label: "More than 1000 INR/week", description: "(112.32 kg/year)" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.eatingOut)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.eatingOut])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("eatingOut", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="In a week, how much do you spend on food from restaurants (INR)?"
      currentStep={2}
      totalSteps={9}
    >
      <div className="mt-12">
        <Slider
          min={0}
          max={options.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          leftLabel="RARELY"
          rightLabel="FREQUENTLY"
          centerLabel={centerLabel}
          centerDescription={centerDescription}
        />

        <NavigationButtons prevPage="/questions/diet" nextPage="/questions/food-waste" />
      </div>
    </QuestionLayout>
  )
}
