"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Smartphone,
  Monitor,
  Palette,
  Zap,
  Shield,
  Rocket,
  Code,
  Globe,
  Lightbulb,
  Target,
  Heart,
  Star,
} from "lucide-react"

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: "移动优先",
      desc: "完美适配手机、平板等移动设备，提供流畅的用户体验",
      color: "text-reverse-primary",
    },
    {
      icon: Monitor,
      title: "桌面兼容",
      desc: "在各种桌面浏览器中完美显示，保持一致的视觉效果",
      color: "text-reverse-coral",
    },
    {
      icon: Palette,
      title: "视觉设计",
      desc: "现代化的UI设计，天蓝渐变背景配合暖色文字系统",
      color: "text-reverse-accent",
    },
    {
      icon: Zap,
      title: "性能优化",
      desc: "快速加载，流畅动画，为用户提供极致的浏览体验",
      color: "text-reverse-warm",
    },
    {
      icon: Shield,
      title: "安全可靠",
      desc: "采用最新的安全标准，保护用户数据和隐私安全",
      color: "text-reverse-gold",
    },
    {
      icon: Rocket,
      title: "快速部署",
      desc: "一键部署到各大云平台，快速上线您的项目",
      color: "text-reverse-primary",
    },
    {
      icon: Code,
      title: "代码优雅",
      desc: "TypeScript + React，模块化设计，易于维护和扩展",
      color: "text-reverse-coral",
    },
    {
      icon: Globe,
      title: "国际标准",
      desc: "遵循Web标准，支持多语言，面向全球用户",
      color: "text-reverse-accent",
    },
    {
      icon: Lightbulb,
      title: "创新理念",
      desc: "融合最新设计趋势，打造独特的用户体验",
      color: "text-reverse-warm",
    },
    {
      icon: Target,
      title: "精准定位",
      desc: "针对目标用户群体，提供个性化的解决方案",
      color: "text-reverse-gold",
    },
    {
      icon: Heart,
      title: "用户至上",
      desc: "以用户体验为核心，持续优化产品功能",
      color: "text-reverse-primary",
    },
    {
      icon: Star,
      title: "品质保证",
      desc: "严格的质量控制，确保每个细节都精益求精",
      color: "text-reverse-coral",
    },
  ]

  return (
    <section id="features" className="section-unified bg-sky-gradient-reverse">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <motion.h2
            className="section-title text-reverse-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            功能特性
          </motion.h2>
          <motion.p
            className="section-subtitle text-white/95 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            全面的功能特性，为您的项目提供强大的技术支持和优质的用户体验
          </motion.p>
        </div>

        <div className="grid-unified-4 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="card-unified text-center hover-lift"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon-container mx-auto">
                  <IconComponent size={32} className={feature.color} />
                </div>
                <h3 className={`${feature.color} font-bold text-lg mb-3`}>{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#services"
            className="btn-unified btn-accent-violet text-lg"
            whileHover={{ translateY: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解服务
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
