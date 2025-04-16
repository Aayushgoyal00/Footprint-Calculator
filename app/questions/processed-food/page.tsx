"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function ProcessedFoodQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(1)

  const options = [
    { value: "0.9", label: "Almost never", description: "(0.9x)" },
    { value: "0.95", label: "Rarely", description: "(0.95x)" },
    { value: "1.0", label: "Sometimes", description: "(1.0x)" },
    { value: "1.1", label: "Regularly", description: "(1.1x)" },
    { value: "1.2", label: "Often", description: "(1.2x)" },
    { value: "1.4", label: "Daily", description: "(1.4x)" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.processedFood)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.processedFood])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("processedFood", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="How often do you consume packaged or processed foods?"
      currentStep={5}
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
          rightLabel="DAILY"
          centerLabel={centerLabel}
          centerDescription={centerDescription}
        />

        <NavigationButtons prevPage="/questions/local-food" nextPage="/questions/dairy" />
      </div>
    </QuestionLayout>
  )
}
