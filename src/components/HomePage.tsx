import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Heart, Users, Sparkle } from "@phosphor-icons/react"

export function HomePage() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-5xl mb-3">📸</div>
                      <p className="text-sm text-muted-foreground">Photo {i}</p>
                      <p className="text-xs text-muted-foreground mt-1">Upload your daycare photos</p>
                    </div>
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
