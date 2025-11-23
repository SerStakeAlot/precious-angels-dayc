import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Heart, Users, Sparkle } from "@phosphor-icons/react"
import { assetPath, cn } from "@/lib/utils"
export function HomePage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const daycarePhotos = useMemo(
    () => [
      {
        id: "book",
        src: assetPath("daycare/Book.jpg"),
        label: "Story Time Haven",
        helpText: "Check public/daycare/Book.jpg"
      },
      {
        id: "food",
        src: assetPath("daycare/food.jpg"),
        label: "Healthy Bites",
        helpText: "Check public/daycare/food.jpg"
      },
      {
        id: "outside",
        src: assetPath("daycare/outside.jpg"),
        label: "Sunshine Play Yard",
        helpText: "Check public/daycare/outside.jpg"
      },
      {
        id: "animals",
        src: assetPath("daycare/animals.jpg"),
        label: "Animal Friends Corner",
        helpText: "Check public/daycare/animals.jpg"
      },
      {
        id: "play-area",
        src: assetPath("daycare/play area.jpg"),
        label: "Imagination Station",
        helpText: "Check public/daycare/play area.jpg"
      }
    ],
    []
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
        >
          <div className="text-6xl mb-6">👼</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Precious Angels Daycare
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where Every Child is Treasured, Nurtured, and Inspired to Grow
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" weight="fill" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Loving Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every child receives individual attention in a warm, nurturing environment
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkle className="w-8 h-8 text-accent" weight="fill" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Age-appropriate curriculum designed to foster growth and development
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" weight="fill" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building lasting relationships with families through open communication
              </p>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Facility</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {daycarePhotos.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-secondary/40 via-accent/30 to-primary/30 shadow-sm">
                  <div className="relative h-full w-full">
                    <img
                      src={photo.src}
                      alt={photo.label}
                      loading="lazy"
                      onLoad={() =>
                        setLoadedImages((prev) => ({ ...prev, [photo.id]: true }))
                      }
                      onError={(event) => {
                        event.currentTarget.style.display = "none"
                        setLoadedImages((prev) => ({ ...prev, [photo.id]: false }))
                      }}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                        loadedImages[photo.id] ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {!loadedImages[photo.id] && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6 text-sm text-muted-foreground">
                        <div className="text-4xl">📁</div>
                        <p className="font-semibold">Drag & drop daycare photo</p>
                        <p className="text-xs leading-relaxed">
                          {photo.helpText}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-card/80 px-4 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
                    {photo.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
