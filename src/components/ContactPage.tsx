import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Envelope, MapPin, Clock, CalendarCheck } from "@phosphor-icons/react"

export function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:5551234567"
    },
    {
      icon: Envelope,
      title: "Email",
      content: "hello@preciousangels.com",
      link: "mailto:hello@preciousangels.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Rainbow Lane, Sunshine City, ST 12345",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Friday, 7:00 AM - 6:00 PM",
      link: null
    }
  ]

  const highlightPoints = [
    "Real-time availability updates",
    "Personalized walkthrough of our classrooms",
    "Enrollment and waitlist guidance",
    "Answers to tuition and schedule questions"
  ]

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Reach out to schedule a tour or learn more about enrollment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 md:p-8 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="uppercase tracking-wide text-xs text-muted-foreground">Tours & Inquiries</p>
                  <h2 className="text-3xl font-bold text-primary">Call to Schedule</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Speak directly with our director to arrange a visit, ask enrollment questions, and learn how we
                support each child’s unique journey.
              </p>
              <ul className="space-y-3 mb-8">
                {highlightPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 inline-block size-2 rounded-full bg-primary" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call (555) 123-4567
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Prefer email? Reach us at <a href="mailto:hello@preciousangels.com" className="text-primary underline-offset-2 hover:underline">hello@preciousangels.com</a>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" weight="duotone" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-xl font-bold mb-3">Plan Your Visit</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tours are available Monday through Friday. Call ahead so we can prepare a personalized welcome kit for your family.
              </p>
              <div className="rounded-md border border-dashed border-primary/40 bg-background/60 p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-1">What to bring:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Photo ID for guardians</li>
                  <li>Questions about schedules or tuition</li>
                  <li>Your child’s favorite comfort item (optional)</li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
