export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NewsletterData {
  email: string
}

export interface PortfolioItem {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
  category?: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
  link?: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  bio?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    facebook: string
    instagram: string
    linkedin: string
  }
  contact: {
    email: string
    phone: string
    address: string
  }
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}
