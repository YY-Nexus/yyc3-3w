import type { SiteConfig } from "./types"

export const siteConfig: SiteConfig = {
  name: "3D Template",
  description: "现代响应式3D网站模板，具有令人惊叹的视觉效果和交互元素",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/3dtemplate",
    github: "https://github.com/3dtemplate",
    facebook: "https://facebook.com/3dtemplate",
    instagram: "https://instagram.com/3dtemplate",
    linkedin: "https://linkedin.com/company/3dtemplate",
  },
  contact: {
    email: "info@3dtemplate.com",
    phone: "+1 (555) 123-4567",
    address: "123 Design Street, Creative City, 10001, Country",
  },
}

export const portfolioItems = [
  {
    id: 1,
    image: "https://picsum.photos/800/600?random=1",
    title: "3D产品展示",
    description: "交互式3D产品可视化，具有流畅的动画效果",
    tags: ["3D设计", "网页开发"],
    category: "3d",
  },
  {
    id: 2,
    image: "https://picsum.photos/800/600?random=2",
    title: "健身追踪应用",
    description: "具有直观UI和实时数据跟踪的移动应用程序",
    tags: ["移动开发", "UI/UX"],
    category: "mobile",
  },
  {
    id: 3,
    image: "https://picsum.photos/800/600?random=3",
    title: "奢侈品商店",
    description: "具有先进3D产品视图的高端电商平台",
    tags: ["网页开发", "电商"],
    category: "web",
  },
  {
    id: 4,
    image: "https://picsum.photos/800/600?random=4",
    title: "数据分析仪表板",
    description: "具有交互式图表和报告的数据可视化仪表板",
    tags: ["UI/UX", "网页开发"],
    category: "web",
  },
  {
    id: 5,
    image: "https://picsum.photos/800/600?random=5",
    title: "角色动画",
    description: "用于游戏和交互媒体的3D角色设计和动画",
    tags: ["3D设计", "动画"],
    category: "3d",
  },
  {
    id: 6,
    image: "https://picsum.photos/800/600?random=6",
    title: "AR家具应用",
    description: "在您的空间中可视化家具的增强现实应用",
    tags: ["AR", "移动开发"],
    category: "mobile",
  },
]
