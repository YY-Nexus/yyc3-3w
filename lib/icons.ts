import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
  Info,
  Loader2,
  Star,
  Heart,
  Eye,
  Download,
  Share,
  Search,
  Filter,
  Settings,
  User,
  Users,
  Home,
  Briefcase,
  Award,
  Target,
  Zap,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Globe,
  Shield,
  Rocket,
  Lightbulb,
  TrendingUp,
  BarChart,
  PieChart,
  Calendar,
  MessageCircle,
  Send,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Upload,
  ImageIcon,
  Video,
  Music,
  File,
  Folder,
  Link,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  HelpCircle,
  Maximize,
  Minimize,
  RefreshCw,
  Power,
} from "lucide-react"

// 图标映射对象，便于管理和使用
export const icons = {
  // 导航图标
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,

  // 联系信息图标
  location: MapPin,
  email: Mail,
  phone: Phone,
  clock: Clock,

  // 社交媒体图标
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,

  // 状态图标
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  loading: Loader2,
  warning: AlertTriangle,

  // 交互图标
  star: Star,
  heart: Heart,
  eye: Eye,
  download: Download,
  share: Share,
  search: Search,
  filter: Filter,
  settings: Settings,

  // 用户图标
  user: User,
  users: Users,

  // 页面图标
  home: Home,
  portfolio: Briefcase,
  award: Award,
  target: Target,

  // 特性图标
  zap: Zap,
  palette: Palette,
  code: Code,
  smartphone: Smartphone,
  monitor: Monitor,
  globe: Globe,
  shield: Shield,
  rocket: Rocket,
  lightbulb: Lightbulb,

  // 数据图标
  trendingUp: TrendingUp,
  barChart: BarChart,
  pieChart: PieChart,

  // 通信图标
  calendar: Calendar,
  message: MessageCircle,
  send: Send,

  // 方向图标
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,

  // 操作图标
  plus: Plus,
  minus: Minus,
  edit: Edit,
  delete: Trash2,
  save: Save,
  upload: Upload,

  // 媒体图标
  image: ImageIcon,
  video: Video,
  music: Music,
  file: File,
  folder: Folder,

  // 链接图标
  link: Link,
  externalLink: ExternalLink,
  copy: Copy,

  // 确认图标
  check: Check,
  help: HelpCircle,

  // 窗口控制图标
  maximize: Maximize,
  minimize: Minimize,
  refresh: RefreshCw,
  power: Power,
} as const

// 图标类型定义
export type IconName = keyof typeof icons

// 获取图标组件的辅助函数
export function getIcon(name: IconName) {
  return icons[name]
}

// 图标尺寸预设
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  "2xl": 48,
} as const

export type IconSize = keyof typeof iconSizes
