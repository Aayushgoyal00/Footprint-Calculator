"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface SliderProps {
  min: number
  max: number
  step: number
  value: number
  onChange: (value: number) => void
  leftLabel: string
  rightLabel: string
  centerLabel?: string
  centerDescription?: string
  showMarkers?: boolean
}

export default function Slider({
  min,
  max,
  step,
  value,
  onChange,
  leftLabel,
  rightLabel,
  centerLabel,
  centerDescription,
  showMarkers = true,
}: SliderProps) {
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseFloat(e.target.value)
    setCurrentValue(newValue)
    onChange(newValue)
  }

  const percentage = ((currentValue - min) / (max - min)) * 100

  // Generate markers for the slider
  const renderMarkers = () => {
    if (!showMarkers) return null

    const markers = []
    const totalSteps = (max - min) / step

    for (let i = 0; i <= totalSteps; i++) {
      const position = (i / totalSteps) * 100
      markers.push(
        <div
          key={i}
          className="absolute w-1 h-3 bg-gray-400 -translate-x-1/2"
          style={{ left: `${position}%`, top: "-8px" }}
        ></div>,
      )
    }

    return markers
  }

  return (
    <div className="w-full">
      <div className="relative h-8 mb-8">
        <div className="slider-track w-full absolute top-1/2 -translate-y-1/2">
          <div className="slider-track-active left-0" style={{ width: `${percentage}%` }}></div>
          {renderMarkers()}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
          <div className="slider-thumb" style={{ left: `${percentage}%` }}></div>
        </div>
      </div>

      <div className="flex justify-between text-sm font-medium">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>

      {centerLabel && (
        <div className="text-center mt-4">
          <p className="font-semibold text-lg">{centerLabel}</p>
          {centerDescription && <p className="text-sm text-gray-600">{centerDescription}</p>}
        </div>
      )}
    </div>
  )
}
