// app/components/what-you-get-section.tsx

'use client'

import { Button } from "@/components/ui/button"
import { Sliders, PenTool, Target, LayoutDashboard, FileCheck, GitBranch } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function WhatYouGetSection() {
  const { openForm } = useCTAForm()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What You Get with Our Solution
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Sliders className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Compliance Baselines</h3>
            <p className="text-gray-600">Define the policies that matter to yo