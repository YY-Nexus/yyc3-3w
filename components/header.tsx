"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [navBackground, setNavBackground] = useState("transparent")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("glass-effect")
      } else {
        setNavBackground("transparent")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileNav = () => {
    setIsNavOpen(false)
  }

  const navItems = [
    { href: "#home", label: "首页展示" },
    { href: "#features", label: "功能特性" },
    { href: "#services", label: "服务项目" },
    { href: "#portfolio", label: "作品展示" },
    { href: "#about", label: "关于我们" },
    { href: "#contact", label: "联系合作" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - 四字设计 */}
        <Link href="#home" className="text-2xl font-bold text-white flex items-center group">
          <motion.span
            className="mr-2 inline-block transform transition-transform duration-500 group-hover:rotate-y-180 text-reverse-gradient"
            whileHover={{ rotateY: 180 }}
          >
            三维
          </motion.span>
          <span className="text-white text-shadow">模板</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-reverse-primary transition-colors duration-300 font-medium text-shadow-white hover-lift px-3 py-2 rounded-lg"
            >
              {item.label}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05, translateY: -2 }} whileTap={{ scale: 0.95 }}>
            <Link href="#contact" className="btn-unified btn-primary-warm">
              开始合作
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-3 rounded-xl glass-effect hover-lift"
          onClick={() => setIsNavOpen(true)}
          aria-label="打开菜单"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <motion.div
        className="fixed inset-0 bg-sky-gradient z-50 md:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isNavOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-6 flex justify-between items-center glass-effect">
          <h1 className="text-2xl font-bold text-white text-shadow">
            <span className="text-reverse-gradient">三维</span>模板
          </h1>
          <button
            className="text-white p-3 rounded-xl glass-effect hover-lift"
            onClick={() => setIsNavOpen(false)}
            aria-label="关闭菜单"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center space-y-8 text-white px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl hover:text-reverse-primary transition-colors duration-300 text-shadow hover-lift text-center"
              onClick={closeMobileNav}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-unified btn-primary-warm mt-6" onClick={closeMobileNav}>
            开始合作
          </Link>
        </nav>
        <div className="p-6 flex justify-center space-x-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-14 h-14 glass-effect text-white rounded-xl flex items-center justify-center transition-colors hover-lift"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`访问我们的${social.label}`}
              >
                <IconComponent size={22} />
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </header>
  )
}

export default Header
