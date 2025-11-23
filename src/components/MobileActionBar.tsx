import { Button } from "@/components/ui/button"
import { Phone, CalendarCheck, MapPin } from "@phosphor-icons/react"

interface MobileActionBarProps {
  onNavigate: (page: string) => void
}

export function MobileActionBar({ onNavigate }: MobileActionBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3 text-sm">
        <Button asChild className="flex-1">
          <a href="tel:5551234567" className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </Button>
        <Button
          variant="secondary"
          className="flex-1"
          onClick={() => onNavigate("contact")}
        >
          <CalendarCheck className="h-4 w-4" />
          Book Tour
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onNavigate("about")}
        >
          <MapPin className="h-4 w-4" />
          Programs
        </Button>
      </div>
    </div>
  )
}
