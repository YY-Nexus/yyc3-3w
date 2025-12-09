import Head from "next/head"
import { siteConfig } from "@/lib/config"

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
  keywords?: string[]
}

export function SEOHead({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = "website",
  keywords = ["3D网站", "响应式设计", "现代模板", "React", "Next.js"],
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const fullUrl = url.startsWith("http") ? url : `${siteConfig.url}${url}`
  const fullImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`

  return (
    <Head>
      {/* 基础 Meta 标签 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={siteConfig.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph 标签 */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="zh_CN" />

      {/* Twitter Card 标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@3dtemplate" />

      {/* 图标 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.png`,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: siteConfig.contact.phone,
              contactType: "customer service",
              email: siteConfig.contact.email,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.contact.address,
            },
            sameAs: [
              siteConfig.links.facebook,
              siteConfig.links.twitter,
              siteConfig.links.instagram,
              siteConfig.links.linkedin,
            ],
          }),
        }}
      />
    </Head>
  )
}
