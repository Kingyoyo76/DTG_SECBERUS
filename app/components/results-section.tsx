// app/components/results-section.tsx

'use client'

import { Button } from "@/components/ui/button"
import { Clock, ShieldCheck, LineChart } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function ResultsSection() {
  const { openForm } = useCTAForm()

  return (
    <section className="py-16 bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Reduce Audit Risks. Gain Confidence. Save Time.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cut Audit Preparation Time</h3>
            <p className="text-purple-100">Cut audit preparation time by 50% with automated verification.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eliminate Costly Gaps</h3>
            <p className="text-purple-100">Eliminate costly compliance gaps caused by missed misconfigurations.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LineChart className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Insights</h3>
            <p className="text-purple-100">Know exactly where you stand with real-time compliance insights.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-white text-purple-700 hover:bg-gray-100 transition-colors duration-300"
            onClick={openForm}
          >
            See How You Can Save Time—Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}