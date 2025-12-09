import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { ErrorBoundary } from "@/components/error-boundary"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["3D网站", "响应式设计", "现代模板", "React", "Next.js", "天蓝色设计", "四字标题"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@3dtemplate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="antialiased overflow-x-hidden bg-sky-gradient min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </ErrorBoundary>
  )
}
