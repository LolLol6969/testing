// Caricamento dinamico di header e footer
document.addEventListener("DOMContentLoaded", () => {
  // Carica header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data
      setActiveNavLink()
    })
    .catch((error) => console.error("Errore nel caricamento header:", error))

  // Carica footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data
    })
    .catch((error) => console.error("Errore nel caricamento footer:", error))

  // Inizializza animazioni
  initScrollAnimations()

  // Inizializza form contatti se presente
  if (document.getElementById("contactForm")) {
    initContactForm()
  }
})

// Imposta il link attivo nella navigazione
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    }
  })
}

// Animazioni scroll con Intersection Observer
function initScrollAnimations() {
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

  // Osserva tutti gli elementi che devono essere animati
  const animatedElements = document.querySelectorAll(
    ".hero-content, .welcome-content, .suite-card, .experience-section, .contact-form, .info-panel, .map-panel",
  )

  animatedElements.forEach((element, index) => {
    // Ritardo progressivo per gli elementi multipli
    setTimeout(() => {
      observer.observe(element)
    }, index * 100)
  })
}

// Gestione form contatti
function initContactForm() {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Raccolta dati form
    const formData = new FormData(form)
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      messaggio: formData.get("messaggio"),
    }

    // Simulazione invio (in un'app reale, qui faresti una chiamata API)
    console.log("Dati form inviati:", data)

    // Feedback utente
    alert("Messaggio inviato con successo! Ti contatteremo presto.")

    // Reset form
    form.reset()
  })
}

// Smooth scroll per i link interni
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const targetId = e.target.getAttribute("href").substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
})

// Gestione responsive menu (se necessario in futuro)
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  navMenu.classList.toggle("mobile-active")
}

// Effetto parallax leggero per il background (opzionale)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".beach-background")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Preloader semplice (opzionale)
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
