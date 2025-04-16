"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

export default function LocalFoodQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(1)

  const options = [
    { value: "0.8", label: "Almost all locally sourced", description: "(0.8x)" },
    { value: "0.9", label: "Mostly locally sourced", description: "(0.9x)" },
    { value: "0.95", label: "More local than imported", description: "(0.95x)" },
    { value: "1.0", label: "Some local, some imported", description: "(1.0x)" },
    { value: "1.05", label: "More imported than local", description: "(1.05x)" },
    { value: "1.1", label: "Don't consider food origin", description: "(1.1x)" },
  ]

  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.localFood)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.localFood])

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("localFood", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="How often do you buy locally produced food that is not imported to India?"
      currentStep={4}
      totalSteps={9}
    >
      <div className="mt-12">
        <Slider
          min={0}
          max={options.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          leftLabel="ALWAYS LOCAL"
          rightLabel="MOSTLY IMPORTED"
          centerLabel={centerLabel}
          centerDescription={centerDescription}
        />

        <NavigationButtons prevPage="/questions/food-waste" nextPage="/questions/processed-food" />
      </div>
    </QuestionLayout>
  )
}
