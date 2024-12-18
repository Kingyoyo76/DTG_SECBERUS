'use client'

import { CTAFormProvider } from "@/contexts/cta-form-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { WhatYouGetSection } from "@/components/what-you-get-section"
import { WhyWeStandOut } from "@/components/why-we-stand-out"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ResultsSection } from "@/components/results-section"
import { CTASection } from "@/components/cta-section"
import Image from 'next/image'

export default function LandingPage() {
  return (
    <CTAFormProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main>
          <HeroSection />
          <PainPointsSection />
          <section id="what-you-get">
            <WhatYouGetSection />
          </section>
          <WhyWeStandOut />
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
          <section id="results">
            <ResultsSection />
          </section>
          <section id="cta">
            <CTASection />
          </section>
          
          <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Eliminate Gaps. Minimize Risks. Verify with Confidence.</h3>
                <p className="text-gray-300 mb-8">Ready to transform your compliance process? Get in touch with our experts today.</p>
                <div className="flex justify-center items-center space-x-6 mt-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T2AxAuqMD795FMaChpXHt3YtSxni0Q.png"
                    alt="DTG Logo"
                    width={240}
                    height={80}
                    className="h-16 w-auto brightness-0 invert hover:brightness-100 transition-all"
                  />
                  <span className="text-purple-400 font-semibold text-3xl">+</span>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6BoIoBXPKihzjV1TG3JCCE1sI7BSh.png"
                    alt="Secberus Logo"
                    width={240}
                    height={80}
                    className="h-16 w-auto brightness-0 invert hover:brightness-100 transition-all"
                  />
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </CTAFormProvider>
  )
}