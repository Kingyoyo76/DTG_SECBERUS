// app/components/pain-points-section.tsx

'use client'

import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Clock } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function PainPointsSection() {
  const { openForm } = useCTAForm()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Don't Let Hidden Gaps Derail Your Compliance Efforts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Costly Misconfigurations</h3>
            <p className="text-gray-600">Basic misconfigurations can cost millions in penalties.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Overlooked Compliance Issues</h3>
            <p className="text-gray-600">Security tools check everything—but they miss what matters to compliance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Time-Consuming Manual Checks</h3>
            <p className="text-gray-600">Manual verification wastes time and creates gaps auditors will find.</p>
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