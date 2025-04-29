// context/EstimateContext.tsx
'use client'

import { createContext, useContext, useState } from 'react'

type EstimateData = {
  bhk?: string
  location?: string
  carpet_area?: number
  preferences?: string[]
  floor_plan_url?: string | File
  additional_notes?: string
  full_name?: string
  email?: string
  phone_number?: string
}

type EstimateContextType = {
  formData: EstimateData
  updateEstimate: (stepData: Partial<EstimateData>) => void
  resetEstimate: () => void
}

const EstimateContext = createContext<EstimateContextType | undefined>(undefined)

export const EstimateProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<EstimateData>({})

  const updateEstimate = (stepData: Partial<EstimateData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }))
  }

  const resetEstimate = () => {
    setFormData({})
  }

  return (
    <EstimateContext.Provider value={{ formData, updateEstimate, resetEstimate }}>
      {children}
    </EstimateContext.Provider>
  )
}

export const useEstimate = () => {
  const context = useContext(EstimateContext)
  if (!context) {
    throw new Error('useEstimate must be used within EstimateProvider')
  }
  return context
}
