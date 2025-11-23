import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { HomePage } from "@/components/HomePage"
import { AboutPage } from "@/components/AboutPage"
import { ContactPage } from "@/components/ContactPage"
import { Toaster } from "@/components/ui/sonner"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-muted-foreground">
          <p className="mb-2">© 2024 Precious Angels Daycare. All rights reserved.</p>
          <p className="text-sm">Where Every Child is Treasured 👼</p>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}

export default App