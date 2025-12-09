"use client"

import React from "react"
import { motion } from "framer-motion"
import { useForm } from "@/hooks/use-form"
import type { ContactFormData } from "@/lib/types"
import { validateEmail } from "@/lib/utils"
import { siteConfig } from "@/lib/config"
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Loader2,
  Send,
} from "lucide-react"

const ContactSection: React.FC = () => {
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm<ContactFormData>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ContactFormData, string>> = {}

      if (!values.name.trim()) {
        errors.name = "请输入您的姓名"
      }

      if (!values.email.trim()) {
        errors.email = "请输入邮箱地址"
      } else if (!validateEmail(values.email)) {
        errors.email = "请输入有效的邮箱地址"
      }

      if (!values.subject.trim()) {
        errors.subject = "请输入主题"
      }

      if (!values.message.trim()) {
        errors.message = "请输入消息内容"
      } else if (values.message.length < 10) {
        errors.message = "消息内容至少需要10个字符"
      }

      return errors
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })

        const data = await response.json()

        if (data.success) {
          setSubmitStatus({
            type: "success",
            message: data.message,
          })
        } else {
          setSubmitStatus({
            type: "error",
            message: data.message || "发送失败，请重试",
          })
        }
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: "网络错误，请检查连接后重试",
        })
      }
    },
  })

  const contactInfo = [
    {
      icon: MapPin,
      title: "办公地址",
      content: siteConfig.contact.address,
      color: "text-reverse-primary",
    },
    {
      icon: Mail,
      title: "邮箱联系",
      content: siteConfig.contact.email,
      color: "text-reverse-coral",
    },
    {
      icon: Phone,
      title: "电话咨询",
      content: siteConfig.contact.phone,
      color: "text-reverse-accent",
    },
    {
      icon: Clock,
      title: "工作时间",
      content: "周一至周五: 9:00 AM - 6:00 PM",
      color: "text-reverse-warm",
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: siteConfig.links.facebook, label: "Facebook", color: "text-reverse-primary" },
    { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter", color: "text-reverse-coral" },
    { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram", color: "text-reverse-accent" },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn", color: "text-reverse-warm" },
  ]

  return (
    <section id="contact" className="section-unified bg-sky-gradient-reverse">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <motion.h2
            className="section-title text-reverse-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            联系合作
          </motion.h2>
          <motion.p
            className="section-subtitle text-white/95 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            有项目想法？让我们讨论如何一起创造令人惊叹的数字化解决方案
          </motion.p>
        </div>

        <div className="grid-unified-2 max-w-7xl mx-auto">
          {/* 联系信息 */}
          <div className="space-y-6">
            <motion.div
              className="card-unified"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-reverse-primary">联系信息</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="icon-container mr-4 flex-shrink-0">
                        <IconComponent size={24} className={info.color} />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 text-lg ${info.color}`}>{info.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{info.content}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              className="card-unified"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-reverse-coral">社交媒体</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all hover-lift group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`访问我们的${social.label}`}
                    >
                      <IconComponent size={24} className={`${social.color} mr-3`} />
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* 联系表单 */}
          <div className="perspective">
            <motion.div
              className="card-unified"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-reverse-accent">发送消息</h3>

              {submitStatus.type && (
                <motion.div
                  className={`mb-6 p-4 rounded-xl border-2 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-700 border-red-200"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    {submitStatus.type === "success" ? (
                      <CheckCircle size={20} className="mr-3" />
                    ) : (
                      <AlertCircle size={20} className="mr-3" />
                    )}
                    {submitStatus.message}
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      您的姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`input-unified ${errors.name ? "border-red-300 focus:border-red-400" : ""}`}
                      placeholder="请输入您的姓名"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      您的邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`input-unified ${errors.email ? "border-red-300 focus:border-red-400" : ""}`}
                      placeholder="请输入您的邮箱"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                    咨询主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className={`input-unified ${errors.subject ? "border-red-300 focus:border-red-400" : ""}`}
                    placeholder="请输入咨询主题"
                  />
                  {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    详细需求 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    className={`input-unified resize-none ${
                      errors.message ? "border-red-300 focus:border-red-400" : ""
                    }`}
                    placeholder="请详细描述您的项目需求..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-unified btn-primary-warm text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { translateY: -2, scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 size={20} className="mr-3 animate-spin" />
                      发送中...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={20} className="mr-3" />
                      发送消息
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
