// 字体配置文件
// 当需要使用Web字体时，可以在这里配置

export const fontConfig = {
  // 系统字体栈 - 当前使用
  system: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(", "),

  // 备用字体配置
  fallback: {
    sans: "ui-sans-serif, system-ui, sans-serif",
    serif: "ui-serif, Georgia, serif",
    mono: "ui-monospace, SFMono-Regular, monospace",
  },
}

// CSS变量形式的字体配置
export const fontVariables = {
  "--font-sans": fontConfig.system,
  "--font-fallback": fontConfig.fallback.sans,
}
