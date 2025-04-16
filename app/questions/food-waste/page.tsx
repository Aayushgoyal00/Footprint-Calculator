"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function FoodWasteQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(1)

  const options = [
    { value: "1.0", label: "None (0%)", description: "" },
    { value: "1.053", label: "0%-5%", description: "" },
    { value: "1.11", label: "5%-10%", description: "" },
    { value: "1.18", label: "10%-20%", description: "" },
    { value: "1.25", label: "20%-30%", description: "" },
    { value: "1.667", label: "More than 30%", description: "" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.foodWaste)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.foodWaste])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("foodWaste", options[value].value)
  }

  const centerLabel = options[sliderValue].label

  return (
    <QuestionLayout
      category="FOOD"
      question="Of the food you buy, how much is wasted and thrown away?"
      currentStep={3}
      totalSteps={9}
    >
      <div className="mt-12">
        <Slider
          min={0}
          max={options.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          leftLabel="NONE"
          rightLabel="A LOT"
          centerLabel={centerLabel}
        />

        <NavigationButtons prevPage="/questions/eating-out" nextPage="/questions/local-food" />
      </div>
    </QuestionLayout>
  )
}
