"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const suites = [
  {
    name: "Ocean Dream",
    image: "public/luxury-ocean-view-suite-with-modern-design.png",
    guests: "2 Ospiti",
    size: "45 mq",
    feature: "Vista Mare Panoramica",
    price: "€280",
    period: "a notte",
    description:
      "Suite elegante con vista diretta sull'Adriatico, arredata con mobili di design e dotata di tutti i comfort moderni.",
  },
  {
    name: "Sky Loft",
    image: "public/luxury-penthouse-suite-with-sky-view.png",
    guests: "4 Ospiti",
    size: "65 mq",
    feature: "Terrazza Privata",
    price: "€420",
    period: "a notte",
    description:
      "Loft di lusso al piano superiore con terrazza panoramica privata e vista a 360° sul mare e sulla pineta.",
  },
  {
    name: "Garden Haven",
    image: "public/luxury-garden-suite-with-private-patio.png",
    guests: "3 Ospiti",
    size: "55 mq",
    feature: "Giardino Privato",
    price: "€350",
    period: "a notte",
    description:
      "Suite immersa nel verde con accesso diretto al giardino privato, perfetta per chi cerca tranquillità e privacy.",
  },
  {
    name: "Elysian Presidential",
    image: "public/luxury-presidential-suite-with-elegant-decor.png",
    guests: "6 Ospiti",
    size: "120 mq",
    feature: "Suite Presidenziale",
    price: "€750",
    period: "a notte",
    description:
      "La suite più esclusiva del resort con salone privato, camera matrimoniale, bagno di lusso e servizio maggiordomo dedicato.",
  },
]

export default function SuitePage() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up")
        }
      })
    }, observerOptions)

    if (titleRef.current) observer.observe(titleRef.current)
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".suite-card")
      cards.forEach((card, index) => {
        setTimeout(() => {
          observer.observe(card)
        }, index * 100)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen beach-background">
      <Header />

      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-center elysian-secondary mb-16 text-balance"
          >
            Il Tuo Rifugio Privato
          </h1>

          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {suites.map((suite, index) => (
              <div
                key={suite.name}
                className="suite-card glass-panel p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={suite.image || "/placeholder.svg"}
                  alt={suite.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold elysian-primary mb-4">{suite.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-right">
                    <span className="text-3xl font-bold elysian-primary">{suite.price}</span>
                    <span className="text-gray-600 ml-1">{suite.period}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Ospiti:</span> {suite.guests}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Metratura:</span> {suite.size}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Caratteristica:</span> {suite.feature}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{suite.description}</p>
                <button className="w-full bg-elysian-primary text-elysian-secondary py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
                  Verifica Disponibilità
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
