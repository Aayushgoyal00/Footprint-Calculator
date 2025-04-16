"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function StreetFoodQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(1)

  const options = [
    { value: "0.9", label: "Never", description: "(0.9x)" },
    { value: "0.95", label: "Rarely", description: "(0.95x)" },
    { value: "1.0", label: "Once or twice a week", description: "(1.0x)" },
    { value: "1.15", label: "3-4 times a week", description: "(1.15x)" },
    { value: "1.3", label: "5-6 times a week", description: "(1.3x)" },
    { value: "1.6", label: "Daily", description: "(1.6x)" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.streetFood)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.streetFood])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("streetFood", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="How often do you eat street food or takeout?"
      currentStep={7}
      totalSteps={9}
    >
      <div className="mt-12">
        <Slider
          min={0}
          max={options.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          leftLabel="NEVER"
          rightLabel="DAILY"
          centerLabel={centerLabel}
          centerDescription={centerDescription}
        />

        <NavigationButtons prevPage="/questions/dairy" nextPage="/questions/fasting-habits" />
      </div>
    </QuestionLayout>
  )
}
