// 字体优化工具函数

export function getFontDisplayClass(element: "heading" | "body" | "caption" = "body"): string {
  const baseClasses = "font-sans antialiased"

  switch (element) {
    case "heading":
      return `${baseClasses} font-bold tracking-tight`
    case "caption":
      return `${baseClasses} text-sm tracking-wide`
    default:
      return `${baseClasses} font-normal`
  }
}

export function getResponsiveFontSize(
  size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl",
): string {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  }

  return sizes[size] || sizes.base
}

// 响应式字体大小映射
export const responsiveFontSizes = {
  "text-responsive-sm": "text-[clamp(0.875rem,2vw,1rem)]",
  "text-responsive": "text-[clamp(1rem,2.5vw,1.25rem)]",
  "text-responsive-lg": "text-[clamp(1.75rem,5vw,3rem)]",
  "text-responsive-xl": "text-[clamp(2.5rem,8vw,5rem)]",
}
