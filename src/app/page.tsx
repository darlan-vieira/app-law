'use client'

import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SectionOne } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import { Section3 } from '@/components/Section3'

export default function Home() {
  return (
    <main className="flex flex-col items-center py-8 px-10">
      <Header />
      
      {/* hero */}
      <Hero />

      {/* section1 */}
      <SectionOne />

      {/* section2 */}
      <Section2 />

      {/* section3 */}
      <Section3 />

      {/* Rodapé */}
      <Footer />
      
    </main>   
  )
}
