import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen, PaintBrush, MusicNotes, Users, Brain, Leaf } from "@phosphor-icons/react"

export function AboutPage() {
  const curriculumItems = [
    {
      icon: BookOpen,
      title: "Early Literacy",
      description: "Story time, letter recognition, and pre-reading skills through engaging books and activities"
    },
    {
      icon: Brain,
      title: "Cognitive Development",
      description: "Problem-solving, counting, shapes, colors, and critical thinking through play-based learning"
    },
    {
      icon: PaintBrush,
      title: "Creative Arts",
      description: "Drawing, painting, crafts, and creative expression to develop fine motor skills and imagination"
    },
    {
      icon: MusicNotes,
      title: "Music & Movement",
      description: "Songs, dancing, rhythm activities, and musical exploration for physical and auditory development"
    },
    {
      icon: Users,
      title: "Social Skills",
      description: "Sharing, cooperation, friendship building, and emotional intelligence in group settings"
    },
    {
      icon: Leaf,
      title: "Outdoor Play",
      description: "Physical activity, nature exploration, and gross motor development in our safe outdoor space"
    }
  ]

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
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">About Our Program</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Precious Angels, we believe in nurturing the whole child through a balanced approach to early childhood education. Our curriculum is designed to support each child's unique developmental journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {curriculumItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" weight="duotone" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Daily Schedule</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">7:00 - 9:00</span>
                <span>Arrival & Free Play</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">9:00 - 9:30</span>
                <span>Circle Time & Songs</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">9:30 - 10:30</span>
                <span>Learning Activities</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">10:30 - 11:00</span>
                <span>Snack Time</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">11:00 - 12:00</span>
                <span>Outdoor Play</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">12:00 - 1:00</span>
                <span>Lunch & Quiet Time</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">1:00 - 2:30</span>
                <span>Rest Time / Nap</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">2:30 - 3:00</span>
                <span>Afternoon Snack</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">3:00 - 5:00</span>
                <span>Creative Arts & Free Play</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold min-w-[100px]">5:00 - 6:00</span>
                <span>Departure</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Philosophy</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We believe that every child is unique and deserves a nurturing environment where they can thrive emotionally, socially, physically, and intellectually.
              </p>
              <p>
                Our play-based learning approach encourages children to explore, discover, and learn at their own pace while building confidence and independence.
              </p>
              <p>
                We partner with families to create a consistent, supportive experience that honors each child's individual needs and celebrates their achievements.
              </p>
              <p>
                Safety, respect, and kindness are at the heart of everything we do, creating a foundation for lifelong learning and positive relationships.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
