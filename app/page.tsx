"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const welcomeRef = useRef<HTMLElement>(null)

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

    if (heroRef.current) observer.observe(heroRef.current)
    if (welcomeRef.current) observer.observe(welcomeRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen beach-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance glass-panel p-6 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
            Dove il Lusso Incontra l'Orizzonte
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light text-pretty drop-shadow-lg">
            Vivi un'esperienza senza tempo nel cuore di Lido degli Estensi
          </p>
          <Link
            href="/suite"
            className="inline-block bg-elysian-primary text-elysian-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Scopri le nostre Suite
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={welcomeRef} className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-panel p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold elysian-primary mb-6">Benvenuti al Paradiso</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Elysian Sands Resort rappresenta l'epitome dell'eleganza e del comfort. Situato nella suggestiva
                  cornice di Lido degli Estensi, il nostro resort offre un'esperienza unica dove ogni dettaglio è
                  pensato per il vostro benessere.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dalla nostra filosofia di ospitalità autentica alle suite di lusso con vista mare, ogni momento
                  trascorso con noi diventa un ricordo indimenticabile.
                </p>
              </div>
              <div className="relative">
                <img
                  src="public/images/hero.png"
                  alt="Lobby elegante dell'hotel"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
