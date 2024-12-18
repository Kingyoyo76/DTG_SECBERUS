// app/components/how-it-works-section.tsx

'use client'

import { Button } from "@/components/ui/button"
import { PenTool, Zap, FileCheck } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function HowItWorksSection() {
  const { openForm } = useCTAForm()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          How It Works—Simple, Flexible, Powerful
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <PenTool className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Write Custom Policies</h3>
            <p className="text-gray-600">Easily create or import baselines tailored to your needs.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automate Verification</h3>
            <p className="text-gray-600">Run checks to identify and fix gaps—no manual work required.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileCheck className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stay Audit-Ready</h3>
            <p className="text-gray-600">Generate reports, verify findings, and present compliance evidence seamlessly.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
            onClick={openForm}
          >
            See How It Works—Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}