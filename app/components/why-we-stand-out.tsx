// app/components/why-we-stand-out.tsx

'use client'

import { Button } from "@/components/ui/button"
import { FileText, BarChart2, Sliders } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function WhyWeStandOut() {
  const { openForm } = useCTAForm()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Why Our Solution Stands Out
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <FileText className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Policies, Not Templates</h3>
            <p className="text-gray-600">Write, adapt, and automate policies tailored to your organization's needs—no more generic, out-of-the-box templates.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BarChart2 className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Insights</h3>
            <p className="text-gray-600">Securely analyze, query, and verify configurations across your entire ecosystem.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Sliders className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Management</h3>
            <p className="text-gray-600">Designed for teams that need both simplicity and scalability to navigate highly regulated environments.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
            onClick={openForm}
          >
            Schedule a Demo Today
          </Button>
        </div>
      </div>
    </section>
  )
}