"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

interface NavigationButtonsProps {
  prevPage?: string
  nextPage?: string
  isLastQuestion?: boolean
}

export default function NavigationButtons({ prevPage, nextPage, isLastQuestion = false }: NavigationButtonsProps) {
  const router = useRouter()

  return (
    <div className="flex justify-between mt-12 w-full">
      {prevPage ? (
        <Link href={prevPage} className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
          Previous
        </Link>
      ) : (
        <div></div>
      )}

      {nextPage ? (
        <Link href={nextPage} className="footprint-button">
          Next
        </Link>
      ) : isLastQuestion ? (
        <Link href="/results" className="footprint-button">
          See Results
        </Link>
      ) : null}
    </div>
  )
}
