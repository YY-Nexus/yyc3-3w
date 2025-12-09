"use client"

import { useEffect } from "react"

interface FontLoaderProps {
  fonts?: Array<{
    family: string
    weights?: string[]
    display?: "auto" | "block" | "swap" | "fallback" | "optional"
  }>
}

export function FontLoader({ fonts = [] }: FontLoaderProps) {
  useEffect(() => {
    // 检查是否支持字体加载
    if (typeof window === "undefined" || !("fonts" in document)) {
      return
    }

    // 预加载系统字体（如果需要）
    const systemFonts = [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
    ]

    // 检查字体可用性
    systemFonts.forEach((font) => {
      if (document.fonts.check(`12px "${font}"`)) {
        console.log(`字体 ${font} 可用`)
      }
    })

    // 如果有自定义字体配置，可以在这里处理
    fonts.forEach((font) => {
      const weights = font.weights || ["400"]
      weights.forEach((weight) => {
        const fontFace = new FontFace(
          font.family,
          `url(/fonts/${font.family.toLowerCase().replace(/\s+/g, "-")}-${weight}.woff2)`,
          {
            weight,
            display: font.display || "swap",
          },
        )

        fontFace
          .load()
          .then((loadedFont) => {
            document.fonts.add(loadedFont)
            console.log(`字体 ${font.family} ${weight} 加载成功`)
          })
          .catch((error) => {
            console.warn(`字体 ${font.family} ${weight} 加载失败:`, error)
          })
      })
    })
  }, [fonts])

  return null
}
