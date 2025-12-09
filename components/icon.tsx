"use client"

import type React from "react"
import { icons, type IconName, iconSizes, type IconSize } from "@/lib/icons"

interface IconProps {
  name: IconName
  size?: IconSize | number
  className?: string
  color?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = "md", className = "", color }) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`图标 "${name}" 不存在`)
    return null
  }

  const iconSize = typeof size === "number" ? size : iconSizes[size]

  return <IconComponent size={iconSize} className={className} color={color} />
}

// 预设样式的图标组件
export const IconButton: React.FC<
  IconProps & {
    onClick?: () => void
    disabled?: boolean
    variant?: "default" | "primary" | "secondary" | "ghost"
  }
> = ({ name, size = "md", className = "", variant = "default", onClick, disabled, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg transition-all duration-200"
  const variantClasses = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-700",
    primary: "bg-primary hover:bg-primary/90 text-white",
    secondary: "bg-secondary hover:bg-secondary/90 text-white",
    ghost: "hover:bg-gray-100 text-gray-700",
  }

  const sizeClasses = {
    xs: "p-1",
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3",
    xl: "p-4",
    "2xl": "p-6",
  }

  const buttonSize = typeof size === "number" ? "md" : size

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[buttonSize]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"
      }`}
      {...props}
    >
      <Icon name={name} size={size} />
    </button>
  )
}
