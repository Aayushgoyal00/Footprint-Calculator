"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function DairyQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(1)

  const options = [
    { value: "0.7", label: "None", description: "(0.7x)" },
    { value: "0.8", label: "Less than 250ml", description: "(0.8x)" },
    { value: "0.9", label: "250ml - 500ml", description: "(0.9x)" },
    { value: "1.0", label: "500ml - 1L", description: "(1.0x)" },
    { value: "1.2", label: "1L - 2L", description: "(1.2x)" },
    { value: "1.5", label: "More than 2L", description: "(1.5x)" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.dairy)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.dairy])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("dairy", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="How much dairy (milk, cheese, butter) do you consume weekly?"
      currentStep={6}
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
          centerDescription={centerDescription}
        />

        <NavigationButtons prevPage="/questions/processed-food" nextPage="/questions/street-food" />
      </div>
    </QuestionLayout>
  )
}
