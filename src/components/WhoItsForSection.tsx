import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Sparkles, Zap, Heart, XCircle } from "lucide-react";

const idealCandidates = [
  {
    emoji: "💼",
    title: "Career Switchers",
    description: "Keep your job while learning",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  {
    emoji: "⏰",
    title: "Part-Time Learners",
    description: "Just 6-10 hours per week",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  },
  {
    emoji: "🎯",
    title: "Action Takers",
    description: "Real projects over theory",
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  }
];

export default function WhoItsForSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Is This <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">You?</span>
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-lg text-muted-foreground">You're perfect if you're...</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {idealCandidates.map((candidate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`
                relative p-6 rounded-2xl border-2 backdrop-blur-sm
                bg-gradient-to-br ${candidate.gradient}
                ${candidate.border}
                transition-all duration-300
                ${hoveredIndex === index ? candidate.glow : "shadow-lg"}
                hover:scale-105 hover:-translate-y-2
                cursor-pointer
              `}
            >
              <motion.div
                animate={{ 
                  scale: hoveredIndex === index ? 1.2 : 1,
                  rotate: hoveredIndex === index ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4 inline-block"
              >
                {candidate.emoji}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{candidate.title}</h3>
              <p className="text-muted-foreground">{candidate.description}</p>
              
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2"
                >
                  <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Not For Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative p-6 rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                ❌ Not Right For You If...
              </h4>
              <p className="text-sm text-muted-foreground">
                You're unemployed, a full-time student, or can't commit 6-10 hours weekly. This program requires consistency and active participation! 🚫
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
