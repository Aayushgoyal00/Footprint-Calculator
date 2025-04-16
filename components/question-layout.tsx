import type { ReactNode } from "react"

interface QuestionLayoutProps {
  category: string
  question: string
  description?: string
  children: ReactNode
  currentStep: number
  totalSteps: number
}

export default function QuestionLayout({
  category,
  question,
  description,
  children,
  currentStep,
  totalSteps,
}: QuestionLayoutProps) {
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl w-full space-y-8">
        <div className="question-card">
          <div className="mb-6">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>
                Question {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-gray-600">{category}</p>
            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">{question}</h1>
            {description && <p className="mt-3 text-base text-gray-500">{description}</p>}
          </div>

          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
