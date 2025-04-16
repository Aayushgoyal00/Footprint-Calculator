"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function StapleFoodQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(1)

  const options = [
    { value: "0.9", label: "Rarely", description: "(0.9x)" },
    { value: "0.95", label: "Once a day", description: "(0.95x)" },
    { value: "1.0", label: "1-2 meals/day", description: "(1.0x)" },
    { value: "1.05", label: "2-3 meals/day", description: "(1.05x)" },
    { value: "1.1", label: "3-4 meals/day", description: "(1.1x)" },
    { value: "1.2", label: "Every meal", description: "(1.2x)" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.stapleFood)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.stapleFood])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("stapleFood", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="How often do you consume rice or wheat-based dishes?"
      currentStep={9}
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
          rightLabel="EVERY MEAL"
          centerLabel={centerLabel}
          centerDescription={centerDescription}
        />

        <NavigationButtons prevPage="/questions/seasonal-veg" isLastQuestion={true} />
      </div>
    </QuestionLayout>
  )
}
