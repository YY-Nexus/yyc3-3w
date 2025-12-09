"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Palette, Search, BarChart, Shield, Headphones } from "lucide-react"

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "网站开发",
      desc: "专业的前端开发服务，使用最新技术栈打造现代化网站",
      features: ["React/Next.js", "TypeScript", "响应式设计", "性能优化"],
      color: "text-reverse-primary",
      price: "¥8,000起",
    },
    {
      icon: Smartphone,
      title: "移动应用",
      desc: "跨平台移动应用开发，为iOS和Android提供原生体验",
      features: ["React Native", "Flutter", "原生开发", "UI/UX设计"],
      color: "text-reverse-coral",
      price: "¥15,000起",
    },
    {
      icon: Globe,
      title: "电商平台",
      desc: "完整的电商解决方案，从设计到部署一站式服务",
      features: ["购物车系统", "支付集成", "库存管理", "数据分析"],
      color: "text-reverse-accent",
      price: "¥20,000起",
    },
    {
      icon: Palette,
      title: "品牌设计",
      desc: "专业的品牌视觉设计，打造独特的企业形象",
      features: ["Logo设计", "VI系统", "网页设计", "营销物料"],
      color: "text-reverse-warm",
      price: "¥5,000起",
    },
    {
      icon: Search,
      title: "搜索优化",
      desc: "SEO优化服务，提升网站在搜索引擎中的排名",
      features: ["关键词优化", "内容策略", "技术SEO", "数据分析"],
      color: "text-reverse-gold",
      price: "¥3,000起",
    },
    {
      icon: BarChart,
      title: "数据分析",
      desc: "专业的数据分析服务，为业务决策提供数据支持",
      features: ["用户行为分析", "转化率优化", "报表定制", "实时监控"],
      color: "text-reverse-primary",
      price: "¥6,000起",
    },
    {
      icon: Shield,
      title: "安全服务",
      desc: "全面的网络安全解决方案，保护您的数字资产",
      features: ["安全审计", "漏洞修复", "防护部署", "监控预警"],
      color: "text-reverse-coral",
      price: "¥10,000起",
    },
    {
      icon: Headphones,
      title: "技术支持",
      desc: "7×24小时技术支持服务，确保系统稳定运行",
      features: ["远程支持", "故障排除", "系统维护", "培训服务"],
      color: "text-reverse-accent",
      price: "¥2,000/月",
    },
  ]

  return (
    <section id="services" className="section-unified bg-sky-gradient">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <motion.h2
            className="section-title text-reverse-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            服务项目
          </motion.h2>
          <motion.p
            className="section-subtitle text-white/95 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            提供全方位的数字化解决方案，从设计到开发，从部署到维护，一站式服务
          </motion.p>
        </div>

        <div className="grid-unified max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="card-unified hover-lift"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="icon-container mb-4">
                  <IconComponent size={36} className={service.color} />
                </div>

                <h3 className={`${service.color} font-bold text-xl mb-3`}>{service.title}</h3>

                <p className="text-gray-700 leading-relaxed mb-4">{service.desc}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className={`${service.color} font-bold text-lg`}>{service.price}</span>
                  <motion.button
                    className="btn-unified btn-ghost-warm text-sm px-4 py-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    了解详情
                  </motion.button>
                </div>
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#portfolio"
              className="btn-unified btn-primary-warm text-lg"
              whileHover={{ translateY: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看案例
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-unified btn-secondary-coral text-lg"
              whileHover={{ translateY: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              获取报价
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
