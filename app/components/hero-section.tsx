// app/components/hero-section.tsx

'use client'

import { Button } from "@/components/ui/button"
import { useCTAForm } from "@/contexts/cta-form-context"

export function HeroSection() {
  const { openForm } = useCTAForm()

  return (
    <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8">
          <span className="block mb-2">Eliminate Compliance Gaps.</span>
          <span className="block mb-2">Minimize Audit Risks.</span>
          <span className="block">Trust. But Verify!</span>
        </h1>
        <p className="mt-6 mb-12 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
          Automate compliance verification, write custom policies, and ensure every critical configuration meets your standards. Catch what security tools miss, close gaps, and walk into every audit with confidence.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-purple-700 hover:bg-purple-100 transition-all duration-300 text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl"
          onClick={openForm}
        >
          Start Your Free Trial—Simplify Compliance Today
        </Button>
      </div>
    </div>
  )
}