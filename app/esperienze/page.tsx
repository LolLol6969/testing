"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const experiences = [
  {
    title: "Ristorante Corallo",
    description:
      "Immergiti in un viaggio culinario unico nel nostro ristorante gourmet. Lo Chef stellato crea capolavori gastronomici utilizzando ingredienti freschi del territorio, combinando tradizione italiana e innovazione contemporanea. Ogni piatto racconta una storia di passione e maestria culinaria.",
    image: "public/elegant-gourmet-dish-in-luxury-restaurant-setting.png",
    reverse: false,
    pricing: "Menu degustazione da €85 | À la carte €45-120",
    details: "Aperto tutti i giorni 19:30-23:00 | Prenotazione obbligatoria",
  },
  {
    title: "Elysian Spa",
    description:
      "Rigenera corpo e mente nella nostra spa esclusiva. Trattamenti personalizzati con prodotti naturali di alta qualità, saune panoramiche e piscine termali. Il nostro team di esperti terapisti vi guiderà in un percorso di benessere totale, dove stress e tensioni si dissolvono in un'atmosfera di pura serenità.",
    image: "public/luxury-spa-treatment-room-with-relaxing-ambiance.png",
    reverse: true,
    pricing: "Trattamenti da €80 | Pacchetti benessere €150-350",
    details: "Aperto 9:00-20:00 | Accesso piscine termali incluso",
  },
  {
    title: "Infinity Pool & Spiaggia Privata",
    description:
      "Rilassati nella nostra piscina a sfioro con vista infinita sull'Adriatico. La spiaggia privata offre un'oasi di tranquillità con servizio personalizzato, lettini di lusso e cabanas esclusive. Goditi aperitivi al tramonto mentre le onde accarezzano dolcemente la riva dorata.",
    image: "public/infinity-pool-overlooking-ocean-with-luxury-beach-.png",
    reverse: false,
    pricing: "Accesso gratuito per ospiti | Cabana privata €50/giorno",
    details: "Piscina 7:00-22:00 | Beach service 8:00-19:00",
  },
]

export default function EsperienzePage() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

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
    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll(".experience-section")
      sections.forEach((section, index) => {
        setTimeout(() => {
          observer.observe(section)
        }, index * 200)
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
            className="text-4xl md:text-6xl font-bold text-center elysian-secondary mb-20 text-balance"
          >
            Esperienze Indimenticabili
          </h1>

          <div ref={sectionsRef} className="space-y-20">
            {experiences.map((experience, index) => (
              <div key={experience.title} className={`experience-section glass-panel p-8 md:p-12`}>
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${experience.reverse ? "md:grid-flow-col-dense" : ""}`}
                >
                  <div className={experience.reverse ? "md:col-start-2" : ""}>
                    <h2 className="text-3xl md:text-4xl font-bold elysian-primary mb-6">{experience.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-pretty mb-6">{experience.description}</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                      <p className="font-semibold text-elysian-primary mb-2">{experience.pricing}</p>
                      <p className="text-sm text-gray-600">{experience.details}</p>
                    </div>
                    <button className="bg-elysian-primary text-elysian-secondary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
                      Prenota Ora
                    </button>
                  </div>
                  <div className={experience.reverse ? "md:col-start-1" : ""}>
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
