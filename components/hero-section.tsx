"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ChevronDown, Sparkles, Zap, Palette } from "lucide-react"

const HeroSection: React.FC = () => {
  const floatingElements = [
    { size: "w-32 h-32", position: "top-1/4 left-1/4", color: "bg-white/10", delay: "0s" },
    { size: "w-40 h-40", position: "top-1/3 right-1/4", color: "bg-sky-300/20", delay: "2s" },
    { size: "w-24 h-24", position: "bottom-1/4 left-1/3", color: "bg-cyan-300/20", delay: "4s" },
    { size: "w-28 h-28", position: "top-2/3 right-1/3", color: "bg-white/15", delay: "3s" },
    { size: "w-36 h-36", position: "bottom-1/3 right-1/4", color: "bg-sky-200/15", delay: "1s" },
  ]

  const features = [
    {
      icon: Sparkles,
      title: "响应设计",
      desc: "完美适配所有设备尺寸",
      color: "text-reverse-primary",
    },
    {
      icon: Zap,
      title: "立体效果",
      desc: "令人惊叹的3D视觉体验",
      color: "text-reverse-coral",
    },
    {
      icon: Palette,
      title: "现代界面",
      desc: "简洁优雅的设计风格",
      color: "text-reverse-accent",
    },
  ]

  return (
    <section id="home" className="section-unified bg-sky-gradient min-h-screen flex items-center justify-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-sky-gradient-radial"></div>
      </div>

      {/* Floating 3D Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.position} ${element.color} rounded-full blur-xl glass-effect`}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + index,
            repeat: Number.POSITIVE_INFINITY,
            delay: Number.parseInt(element.delay),
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 perspective">
        <div className="max-w-6xl mx-auto text-center preserve-3d">
          {/* 四字主标题 */}
          <motion.h1
            className="title-four-chars text-reverse-gradient mb-8"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            三维设计
          </motion.h1>

          <motion.p
            className="text-responsive text-white/95 mb-12 max-w-4xl mx-auto text-shadow leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            现代响应式模板，具有令人惊叹的3D视觉效果和交互元素，让您的网站焕发生机。
            <br />
            天蓝色渐变背景与暖色文字设计，打造极致视觉体验。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#features"
              className="btn-unified btn-primary-warm text-lg"
              whileHover={{ translateY: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              探索功能
            </motion.a>
            <motion.a
              href="#portfolio"
              className="btn-unified btn-secondary-coral text-lg"
              whileHover={{ translateY: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              查看作品
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-unified btn-ghost-warm text-lg"
              whileHover={{ translateY: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              立即合作
            </motion.a>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="grid-unified-3 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  className="card-unified text-center hover-lift"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="icon-container mx-auto">
                    <IconComponent size={32} className={feature.color} />
                  </div>
                  <h3 className={`${feature.color} font-bold text-xl mb-3`}>{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white glass-effect p-4 rounded-full animate-pulse-warm"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}

export default HeroSection
