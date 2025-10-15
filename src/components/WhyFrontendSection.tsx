import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, TrendingUp, Globe, Brain, Clock, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    emoji: "🌎",
    title: "Work From Anywhere",
    stat: "85%",
    statLabel: "Remote Roles",
    description: "Beach, home, or coffee shop",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: TrendingUp,
    emoji: "💰",
    title: "High Income",
    stat: "$80K-$120K",
    statLabel: "Starting",
    description: "Then $150K+ in a few years",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Brain,
    emoji: "🎓",
    title: "No Degree Needed",
    stat: "0",
    statLabel: "Requirements",
    description: "Skills matter, not credentials",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Clock,
    emoji: "⚡",
    title: "Quick to Learn",
    stat: "12",
    statLabel: "Weeks",
    description: "Portfolio ready & job hunting",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: Sparkles,
    emoji: "🚀",
    title: "Future-Proof",
    stat: "∞",
    statLabel: "Growth",
    description: "Always evolving tech",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10"
  },
  {
    icon: Rocket,
    emoji: "🎯",
    title: "High Demand",
    stat: "1M+",
    statLabel: "Jobs",
    description: "Companies desperate for talent",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10"
  }
];

export default function WhyFrontendSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Why <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frontend Development
            </span> Wins 🏆
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            The smartest path to freedom & money 💸
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className="relative group"
              >
                <div
                  className={`
                    relative p-6 rounded-2xl border-2 backdrop-blur-sm
                    bg-gradient-to-br ${benefit.bgGradient}
                    transition-all duration-300
                    ${isActive ? "border-transparent scale-105 -translate-y-2" : "border-border"}
                    hover:shadow-2xl cursor-pointer
                    overflow-hidden
                  `}
                  style={{
                    boxShadow: isActive ? `0 20px 60px -15px ${benefit.gradient.includes("blue") ? "rgba(59,130,246,0.5)" : benefit.gradient.includes("green") ? "rgba(34,197,94,0.5)" : benefit.gradient.includes("purple") ? "rgba(168,85,247,0.5)" : benefit.gradient.includes("orange") ? "rgba(249,115,22,0.5)" : benefit.gradient.includes("indigo") ? "rgba(99,102,241,0.5)" : "rgba(236,72,153,0.5)"}` : undefined
                  }}
                >
                  {/* Animated background gradient */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-10`}
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon & Emoji */}
                  <div className="relative mb-4 flex items-center gap-3">
                    <motion.div
                      animate={{ 
                        rotate: isActive ? 360 : 0,
                        scale: isActive ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl"
                    >
                      {benefit.emoji}
                    </motion.div>
                    <motion.div
                      animate={{ scale: isActive ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-6 h-6 bg-gradient-to-br ${benefit.gradient} bg-clip-text text-transparent`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg mb-2 relative z-10">
                    {benefit.title}
                  </h3>
                  
                  {/* Stat */}
                  <div className="mb-3 relative z-10">
                    <motion.div
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}
                    >
                      {benefit.stat}
                    </motion.div>
                    <div className="text-xs text-muted-foreground font-semibold">
                      {benefit.statLabel}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground relative z-10">
                    {benefit.description}
                  </p>

                  {/* Hover sparkle effect */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        className="absolute top-2 right-2"
                      >
                        <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
