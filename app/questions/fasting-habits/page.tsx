"use client"

import { useEffect, useState } from "react"
import QuestionLayout from "@/components/question-layout"
import Slider from "@/components/slider"
import NavigationButtons from "@/components/navigation-buttons"
import { useAnswers } from "@/components/providers"

// Define the options for the fasting habits question
const options = [
  { value: "1.0", label: "Never", description: "(1.0x)" },
  { value: "0.98", label: "Rarely", description: "(a few times/year, 0.98x)" },
  { value: "0.95", label: "Occasionally", description: "(monthly, 0.95x)" },
  { value: "0.92", label: "Regularly", description: "(weekly/bi-weekly during periods, 0.92x)" },
  { value: "0.90", label: "Frequently", description: "(multiple times/week during periods, 0.90x)" },
]

export default function FastingHabitsQuestion() {
  const { answers, setAnswer } = useAnswers()
  const [sliderValue, setSliderValue] = useState(0) // Default to first option

  // Initialize slider based on existing answer
  useEffect(() => {
    const index = options.findIndex((option) => option.value === answers.fastingHabits)
    if (index !== -1) {
      setSliderValue(index)
    }
  }, [answers.fastingHabits])

  // Update answer when slider changes
  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setAnswer("fastingHabits", options[value].value)
  }

  const centerLabel = options[sliderValue].label
  const centerDescription = options[sliderValue].description

  return (
    <QuestionLayout
      category="FOOD"
      question="How often do you practice fasting or follow traditional dietary restrictions (e.g., during festivals like Navratri or Ekadashi) that reduce meat or processed food intake?"
      currentStep={8}
      totalSteps={9} // Assuming 9 total questions
    >
      <div className="mt-12">
        <Slider
          min={0}
          max={options.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          leftLabel="NEVER"
          rightLabel="FREQUENTLY"
          centerLabel={centerLabel}
          centerDescription={centerDescription}
        />

        <NavigationButtons
          prevPage="/questions/street-food"
          nextPage="/questions/staple-food"
        />
      </div>
    </QuestionLayout>
  )
} 