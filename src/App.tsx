import { useState } from "react"

// ─── Types ───────────────────────────────────────────────────────────────────

type Screen =
  | "main"
  | "agent-welcome"
  | "agent-home"
  | "ml-home"
  | "agents"
  | "agents-preview"
  | "agents-create"
  | "knowledge"
  | "llm"
  | "tools"
  | "observability"
  | "guardrails"
  | "finetuning"

// ─── Icons (inline SVG) ───────────────────────────────────────────────────────

const VodafoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#E60000" />
    <path
      d="M19.6 8.4C17.8 6.8 15.5 6 13 6.1c-4.8.3-8.6 4.4-8.3 9.2.3 4.8 4.4 8.6 9.2 8.3 2.5-.2 4.7-1.3 6.3-3.1L18 18.7c-1.1 1.3-2.8 2.1-4.6 2.2-3.6.2-6.7-2.6-6.9-6.2-.2-3.6 2.6-6.7 6.2-6.9 1.8-.1 3.5.5 4.7 1.7L19.6 8.4z"
      fill="white"
    />
  </svg>
)

const HomeIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const AgentsIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M6 20v-2a6 6 0 0112 0v2" />
  </svg>
)

const KnowledgeIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
)

const LLMIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)

const ToolsIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
)

const ObservabilityIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

const GuardrailsIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const FinetuningIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#E60000" : "#6B7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 20v-2M12 6V4" />
  </svg>
)

const BackIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const BellIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
  </svg>
)

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const SendIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const UploadIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#E60000"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
  </svg>
)

const DotsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
)

const CheckCircleIcon = ({ color = "#10B981" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill={color} opacity="0.15" />
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <polyline
      points="8 12 11 15 16 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const WarnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      fill="#F59E0B"
      opacity="0.15"
      stroke="#F59E0B"
      strokeWidth="2"
    />
    <line
      x1="12"
      y1="9"
      x2="12"
      y2="13"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12"
      y1="17"
      x2="12.01"
      y2="17"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const BlockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#EF4444"
      opacity="0.15"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <line
      x1="4.93"
      y1="4.93"
      x2="19.07"
      y2="19.07"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

// ─── Shared Components ────────────────────────────────────────────────────────

const Badge = ({
  children,
  variant = "green",
}: {
  children: React.ReactNode
  variant?: "green" | "red" | "orange" | "blue" | "gray"
}) => {
  const styles: Record<string, string> = {
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    red: "bg-red-50 text-red-600 border-red-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    gray: "bg-gray-100 text-gray-600 border-gray-200",
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

const StatusDot = ({
  color = "green",
}: {
  color?: "green" | "red" | "orange" | "gray"
}) => {
  const colors: Record<string, string> = {
    green: "bg-emerald-500",
    red: "bg-red-500",
    orange: "bg-orange-400",
    gray: "bg-gray-400",
  }
  return (
    <span className={`inline-block w-2 h-2 rounded-full ${colors[color]}`} />
  )
}

const Tab = ({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
      active
        ? "border-red-600 text-red-600"
        : "border-transparent text-gray-500 hover:text-gray-700"
    }`}
  >
    {label}
  </button>
)

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
  >
    {children}
  </div>
)

const StatCard = ({
  icon,
  label,
  value,
  sub,
  subColor = "text-emerald-600",
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub?: string
  subColor?: string
}) => (
  <Card className="p-5 flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {sub && <p className={`text-xs font-medium mt-0.5 ${subColor}`}>{sub}</p>}
    </div>
  </Card>
)

// ─── Layout shells ────────────────────────────────────────────────────────────

const TopBar = () => (
  <div className="flex items-center justify-end gap-3 px-6 py-3 border-b border-gray-100 bg-white">
    <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors relative">
      <BellIcon />
      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
    </button>
    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
      <span className="text-white text-xs font-bold">JD</span>
    </div>
  </div>
)

// Main welcome sidebar
const MainSidebar = ({
  current,
  onNavigate,
}: {
  current: Screen
  onNavigate: (s: Screen) => void
}) => (
  <div className="w-56 bg-white border-r border-gray-200 flex flex-col min-h-screen">
    <div className="px-4 py-5 border-b border-gray-100">
      <div className="flex items-center gap-2.5">
        <VodafoneIcon />
        <div>
          <p className="text-xs font-bold text-gray-900 leading-tight">
            Vodafone Egypt
          </p>
          <p className="text-xs text-gray-500 leading-tight">AI Frameworks</p>
        </div>
      </div>
    </div>
    <nav className="flex-1 px-3 py-4 space-y-1">
      <SidebarItem
        icon={
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={current === "main" ? "#E60000" : "#6B7280"}
            strokeWidth="2"
          >
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          </svg>
        }
        label="Agent Framework"
        active={current === "agent-welcome"}
        onClick={() => onNavigate("agent-welcome")}
      />
      <SidebarItem
        icon={
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={current === "ml-home" ? "#E60000" : "#6B7280"}
            strokeWidth="2"
          >
            <rect x="2" y="3" width="6" height="6" rx="1" />
            <rect x="9" y="3" width="6" height="6" rx="1" />
            <rect x="16" y="3" width="6" height="6" rx="1" />
            <rect x="2" y="12" width="6" height="6" rx="1" />
            <rect x="9" y="12" width="6" height="6" rx="1" />
            <rect x="16" y="12" width="6" height="6" rx="1" />
          </svg>
        }
        label="ML Frameworks"
        active={current === "ml-home"}
        onClick={() => onNavigate("ml-home")}
      />
    </nav>
    <div className="px-4 py-4 border-t border-gray-100">
      <p className="text-xs text-gray-400">v2.1.0 · Vodafone Egypt</p>
    </div>
  </div>
)

// Agent framework sidebar
const AgentSidebar = ({
  current,
  onNavigate,
}: {
  current: Screen
  onNavigate: (s: Screen) => void
}) => {
  // Map screens to their sidebar highlight target
  const activeSection = (): Screen | null => {
    if (current === "agent-home") return "agent-home"
    if (current === "agents" || current === "agents-preview" || current === "agents-create") return "agents"
    if (current === "knowledge") return "knowledge"
    if (current === "llm") return "llm"
    if (current === "tools") return "tools"
    if (current === "observability") return "observability"
    if (current === "guardrails") return "guardrails"
    if (current === "finetuning") return "finetuning"
    return null // agent-welcome: no highlight
  }
  const active = activeSection()

  const items: { id: Screen; label: string; icon: (a: boolean) => React.ReactNode }[] = [
    { id: "agent-home", label: "Home", icon: (a) => <HomeIcon active={a} /> },
    { id: "agents", label: "Agents", icon: (a) => <AgentsIcon active={a} /> },
    { id: "knowledge", label: "Knowledge", icon: (a) => <KnowledgeIcon active={a} /> },
    { id: "llm", label: "LLM", icon: (a) => <LLMIcon active={a} /> },
    { id: "tools", label: "Tools", icon: (a) => <ToolsIcon active={a} /> },
    { id: "observability", label: "Observability", icon: (a) => <ObservabilityIcon active={a} /> },
    { id: "guardrails", label: "Guardrails", icon: (a) => <GuardrailsIcon active={a} /> },
    { id: "finetuning", label: "Finetuning", icon: (a) => <FinetuningIcon active={a} /> },
  ]
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      <div className="px-4 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <VodafoneIcon />
          <div>
            <p className="text-xs font-bold text-gray-900 leading-tight">Vodafone AI</p>
            <p className="text-xs text-gray-500 leading-tight">Agent Platform</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <button
          onClick={() => onNavigate("main")}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors mb-2"
        >
          <BackIcon />
          <span>Frameworks</span>
        </button>
        {items.map(({ id, label, icon }) => {
          const isActive = active === id
          return (
            <SidebarItem
              key={id}
              icon={icon(isActive)}
              label={label}
              active={isActive}
              onClick={() => onNavigate(id)}
            />
          )
        })}
      </nav>
      <div className="px-4 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">v2.1.0 · Vodafone Egypt</p>
      </div>
    </div>
  )
}

// ML sidebar
const MLSidebar = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="w-56 bg-white border-r border-gray-200 flex flex-col min-h-screen">
    <div className="px-4 py-5 border-b border-gray-100">
      <div className="flex items-center gap-2.5">
        <VodafoneIcon />
        <div>
          <p className="text-xs font-bold text-gray-900 leading-tight">
            Vodafone AI
          </p>
          <p className="text-xs text-gray-500 leading-tight">ML Platform</p>
        </div>
      </div>
    </div>
    <nav className="flex-1 px-3 py-4 space-y-0.5">
      <button
        onClick={() => onNavigate("main")}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors mb-2"
      >
        <BackIcon />
        <span>Frameworks</span>
      </button>
      <SidebarItem
        icon={<HomeIcon active={true} />}
        label="Home"
        active={true}
        onClick={() => {}}
      />
    </nav>
    <div className="px-4 py-4 border-t border-gray-100">
      <p className="text-xs text-gray-400">v2.1.0 · Vodafone Egypt</p>
    </div>
  </div>
)

const SidebarItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      active
        ? "bg-red-50 text-red-600"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
)

// ─── Screen 1: Main Welcome ───────────────────────────────────────────────────

const MainWelcomeScreen = ({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void
}) => (
  <div className="flex-1 bg-gray-50 overflow-auto">
    <TopBar />
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-md">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Enterprise AI Platform
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Welcome to Vodafone Egypt AI Frameworks
        </h1>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          A centralized environment for building, managing, governing,
          monitoring, evaluating, and improving enterprise AI solutions across
          Vodafone Egypt&apos;s operations.
        </p>
      </div>

      {/* Platform stats */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {[
          { label: "Active Agents", value: "14", icon: "🤖" },
          { label: "Models Connected", value: "8", icon: "🧠" },
          { label: "Requests Today", value: "12.4K", icon: "⚡" },
          { label: "Success Rate", value: "98.6%", icon: "✅" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            <div className="text-2xl mb-2">{s.icon}</div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Framework cards */}
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Select a Framework
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-10">
        {/* Agent Framework */}
        <button
          onClick={() => onNavigate("agent-welcome")}
          className="bg-white rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:border-red-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              </svg>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
              Active
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Agent Framework
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Build, configure, manage, evaluate, and monitor enterprise AI agents
            with full observability and governance controls.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Agents",
              "Knowledge",
              "LLM",
              "Tools",
              "Observability",
              "Guardrails",
              "Finetuning",
            ].map((f) => (
              <span
                key={f}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </button>

        {/* ML Frameworks */}
        <button
          onClick={() => onNavigate("ml-home")}
          className="bg-white rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="6" height="6" rx="1" />
                <rect x="9" y="3" width="6" height="6" rx="1" />
                <rect x="16" y="3" width="6" height="6" rx="1" />
                <rect x="2" y="12" width="6" height="6" rx="1" />
                <rect x="9" y="12" width="6" height="6" rx="1" />
                <rect x="16" y="12" width="6" height="6" rx="1" />
              </svg>
            </div>
            <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full font-medium">
              Preview
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            ML Frameworks
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Build, manage, train, evaluate, and deploy enterprise machine
            learning solutions with integrated MLOps capabilities.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Training",
              "Evaluation",
              "Deployment",
              "Monitoring",
              "Pipelines",
            ].map((f) => (
              <span
                key={f}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </button>
      </div>

      {/* Capabilities overview */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-4">
          Platform Capabilities
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              icon: "🏗️",
              title: "Build",
              desc: "Design and configure AI agents and ML pipelines with no-code and low-code tooling.",
            },
            {
              icon: "🔍",
              title: "Monitor",
              desc: "Full observability across requests, traces, latency, token usage, and model performance.",
            },
            {
              icon: "🛡️",
              title: "Govern",
              desc: "Enforce policies, guardrails, and compliance controls across all AI deployments.",
            },
            {
              icon: "📊",
              title: "Evaluate",
              desc: "Run automated evaluations and A/B tests to validate and improve AI quality.",
            },
            {
              icon: "🚀",
              title: "Deploy",
              desc: "Publish agents and fine-tuned models into production with managed infrastructure.",
            },
            {
              icon: "🔗",
              title: "Integrate",
              desc: "Connect to enterprise tools, APIs, knowledge bases, and data sources seamlessly.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-xl">{c.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{c.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

// ─── Screen 2a: Agent Framework Welcome (entry, no sidebar highlight) ────────

const AgentWelcomeScreen = () => (
  <div className="flex-1 bg-gray-50 overflow-auto">
    <TopBar />
    <div className="max-w-3xl mx-auto px-8 py-16">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full">Agent Framework</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">
          Welcome to Agent Framework
        </h1>
        <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
          The Agent Framework provides a centralized environment for building, configuring, managing, evaluating, and monitoring enterprise AI agents. It brings together the capabilities required to create agents, connect them to enterprise knowledge, select and manage language models, provide tools and integrations, monitor their behavior and performance, apply safety guardrails, and improve models through finetuning.
        </p>
      </div>

      <div className="h-px bg-gray-200 my-8" />

      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: "🤖", label: "Agents", desc: "Create and configure enterprise AI agents." },
          { icon: "📚", label: "Knowledge", desc: "Manage knowledge bases, documents, and data sources." },
          { icon: "🧠", label: "LLM", desc: "Configure model providers and language models." },
          { icon: "🔧", label: "Tools", desc: "Manage tools and integrations for agents." },
          { icon: "📊", label: "Observability", desc: "Monitor requests, traces, metrics, and logs." },
          { icon: "🛡️", label: "Guardrails", desc: "Configure safety and compliance policies." },
          { icon: "🎛️", label: "Finetuning", desc: "Manage datasets, training jobs, and deployments." },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <span className="text-xl mt-0.5">{item.icon}</span>
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.label}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-8 text-center">
        Use the sidebar to navigate to any section of the Agent Framework.
      </p>
    </div>
  </div>
)

// ─── Screen 2b: Agent Framework Home (from screenshot) ───────────────────────

const AgentHomeScreen = () => (
  <div className="flex-1 bg-white overflow-auto">
    <TopBar />
    <div className="px-8 py-6 max-w-5xl mx-auto">
      {/* Components section */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Components</h2>
          <p className="text-sm text-gray-400 mt-0.5">Reusable building blocks for creating AI workflows.</p>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 w-52">
          <SearchIcon />
          <input className="text-sm text-gray-500 bg-transparent outline-none w-full placeholder-gray-400" placeholder="Search" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 mb-8">
        {[
          {
            color: "bg-red-100",
            iconColor: "#E60000",
            badge: "COMPONENT",
            name: "Chunker",
            desc: "Split documents into clean, meaningful chunks.",
            iconPath: <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />,
          },
          {
            color: "bg-red-100",
            iconColor: "#E60000",
            badge: "COMPONENT",
            name: "Retriever",
            desc: "Find relevant context from indexed knowledge.",
            iconPath: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
          },
          {
            color: "bg-red-100",
            iconColor: "#E60000",
            badge: "COMPONENT",
            name: "Prompt Template",
            desc: "Create reusable prompts for agents and workflows.",
            iconPath: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>,
          },
        ].map((c) => (
          <Card key={c.name} className="p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {c.iconPath}
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-400 font-medium">{c.badge}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
          </Card>
        ))}
      </div>

      {/* Templates section */}
      <div className="mb-1">
        <h2 className="text-lg font-bold text-gray-900">Templates</h2>
        <p className="text-sm text-gray-400 mt-0.5">Ready-to-use end-to-end AI solutions.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {[
          {
            color: "bg-red-100",
            iconColor: "#E60000",
            badge: "TEMPLATE",
            name: "RAG",
            desc: "Ingest data, retrieve context, and generate grounded responses.",
            iconPath: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
          },
          {
            color: "bg-red-100",
            iconColor: "#E60000",
            badge: "TEMPLATE",
            name: "Legal Preprocessing Pipeline",
            desc: "Clean, normalize, and structure legal documents for AI use.",
            iconPath: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>,
          },
        ].map((t) => (
          <Card key={t.name} className="p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center flex-shrink-0`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={t.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {t.iconPath}
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400 font-medium">{t.badge}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </div>
)

// ─── Screen 3: ML Frameworks Welcome ─────────────────────────────────────────

const MLHomeScreen = () => (
  <div className="flex-1 bg-gray-50 overflow-auto">
    <TopBar />
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-full font-medium">
            Coming Soon
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Welcome to ML Frameworks
        </h1>
        <p className="text-sm text-gray-600 max-w-xl leading-relaxed">
          This area will provide comprehensive capabilities for building,
          managing, training, evaluating, and deploying enterprise machine
          learning solutions across Vodafone Egypt.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
            >
              <rect x="2" y="3" width="6" height="6" rx="1" />
              <rect x="9" y="3" width="6" height="6" rx="1" />
              <rect x="16" y="3" width="6" height="6" rx="1" />
              <rect x="2" y="12" width="6" height="6" rx="1" />
              <rect x="9" y="12" width="6" height="6" rx="1" />
              <rect x="16" y="12" width="6" height="6" rx="1" />
            </svg>
          </div>
        </div>
        <h2 className="text-center text-lg font-bold text-gray-900 mb-2">
          ML Frameworks
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8 max-w-lg mx-auto">
          A fully integrated MLOps platform purpose-built for Vodafone
          Egypt&apos;s enterprise machine learning needs.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: "🗂️",
              title: "Dataset Management",
              desc: "Curate, version, and manage training datasets at enterprise scale.",
            },
            {
              icon: "🏋️",
              title: "Model Training",
              desc: "Distributed training with GPU orchestration and experiment tracking.",
            },
            {
              icon: "📈",
              title: "Model Evaluation",
              desc: "Automated benchmarking, fairness analysis, and performance comparison.",
            },
            {
              icon: "🚀",
              title: "Model Deployment",
              desc: "One-click deployment to production with A/B testing and rollbacks.",
            },
            {
              icon: "🔄",
              title: "ML Pipelines",
              desc: "Build and schedule end-to-end automated ML workflows.",
            },
            {
              icon: "📊",
              title: "MLOps Monitoring",
              desc: "Track data drift, model degradation, and production metrics.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <span className="text-xl">{c.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{c.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl border border-blue-200 p-5 flex items-start gap-4">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-blue-800">In Development</p>
          <p className="text-xs text-blue-600 mt-0.5">
            ML Frameworks is currently under active development and will be
            available in a future release. Contact your Vodafone Egypt AI team
            for the roadmap and preview access.
          </p>
        </div>
      </div>
    </div>
  </div>
)

// ─── Screen 4a: Agents List ───────────────────────────────────────────────────

const agentsList = [
  { name: "Legal Contract Reviewer", desc: "Review and analyze legal contracts and flag risks.", model: "gpt-4.1", status: "Published", updated: "2 hours ago" },
  { name: "Customer Support Agent", desc: "Handle customer inquiries and escalations.", model: "gpt-4o", status: "Published", updated: "1 day ago" },
  { name: "Network Assistant", desc: "Diagnose and troubleshoot network issues.", model: "claude-3-5-sonnet", status: "Draft", updated: "3 days ago" },
  { name: "Policy Q&A Agent", desc: "Answer HR policy and compliance questions.", model: "gpt-4o", status: "Published", updated: "5 days ago" },
]

const AgentsListScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="flex-1 bg-gray-50 overflow-auto">
    <TopBar />
    <div className="px-8 py-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-xl font-bold text-gray-900">Agents</h1>
        <button
          onClick={() => onNavigate("agents-create")}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <PlusIcon /> Create Agent
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-6">Manage your enterprise AI agents.</p>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white flex-1 max-w-sm">
          <SearchIcon />
          <input className="text-sm text-gray-600 bg-transparent outline-none w-full placeholder-gray-400" placeholder="Search agents..." />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {agentsList.map((agent) => (
          <button
            key={agent.name}
            onClick={() => onNavigate("agents-preview")}
            className="bg-white rounded-xl border border-gray-200 p-5 text-left shadow-sm hover:shadow-md hover:border-gray-300 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <AgentsIcon active />
              </div>
              <Badge variant={agent.status === "Published" ? "green" : "gray"}>
                {agent.status}
              </Badge>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">{agent.name}</h3>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">{agent.desc}</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <LLMIcon />
                {agent.model}
              </span>
              <span>Updated {agent.updated}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
)

// ─── Screen 4b: Agent Preview ─────────────────────────────────────────────────

const AgentPreviewScreen = ({ agentName, onNavigate }: { agentName: string; onNavigate: (s: Screen) => void }) => (
  <div className="flex-1 bg-gray-50 overflow-auto">
    <TopBar />
    <div className="flex h-[calc(100vh-49px)]">
      {/* Left: agent info */}
      <div className="flex-1 flex flex-col max-w-sm border-r border-gray-200 bg-white px-6 py-6">
        <button
          onClick={() => onNavigate("agents")}
          className="text-xs text-gray-400 hover:text-gray-600 mb-4 flex items-center gap-1 self-start"
        >
          <BackIcon /> Agents
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
            <AgentsIcon active />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900">{agentName}</h2>
            <Badge variant="green">Published</Badge>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-5 leading-relaxed">Review and analyze legal contracts, summarize key terms, and answer questions based on document content.</p>

        <div className="space-y-4 text-xs text-gray-600">
          <div>
            <p className="text-xs font-semibold text-gray-700 mb-1">Model</p>
            <p className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">gpt-4.1</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700 mb-1">Knowledge Sources</p>
            <p className="text-gray-400 italic">No knowledge sources</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700 mb-1">Tools</p>
            <div className="space-y-1.5">
              {["PDF Parser · Ready", "Qdrant Vector Database · Not authorized"].map((t) => (
                <div key={t} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100">
                  <StatusDot color={t.includes("Ready") ? "green" : "orange"} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: chat preview */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-800">Agent Preview</p>
            <p className="text-xs text-gray-400">Test your agent in a live environment</p>
          </div>
          <button className="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors">View API</button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E60000" strokeWidth="1.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <div>
            <p className="text-base font-bold text-gray-800 mb-1">Start a conversation</p>
            <p className="text-sm text-gray-400 max-w-xs">Describe what you want your agent to do and it will respond here.</p>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
            <input
              className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
              placeholder="Describe what your agent should do"
            />
            <button className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors">
              <SendIcon />
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">Agent runs in a secure Vodafone environment.</p>
        </div>
      </div>
    </div>
  </div>
)

// ─── Screen 4c: Agent Create / Configure ─────────────────────────────────────

const AgentCreateScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [activeTab, setActiveTab] = useState("Configure")
  const tabs = ["Configure", "Access Point", "Logs", "Monitoring"]

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <TopBar />
      <div className="flex h-[calc(100vh-49px)]">
        {/* Left: configure form */}
        <div className="flex-1 px-8 py-6 overflow-auto">
          <button
            onClick={() => onNavigate("agents")}
            className="text-xs text-gray-400 hover:text-gray-600 mb-4 flex items-center gap-1"
          >
            <BackIcon /> Agents
          </button>
          <h2 className="text-lg font-bold text-gray-900 mb-0.5">Create Agent</h2>
          <p className="text-xs text-gray-500 mb-5">Configure your new AI agent.</p>

          <div className="flex gap-5 border-b border-gray-200 mb-6">
            {tabs.map((t) => (
              <Tab key={t} label={t} active={activeTab === t} onClick={() => setActiveTab(t)} />
            ))}
          </div>

          {activeTab === "Configure" && (
            <div className="space-y-5 max-w-xl">
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Agent Name</label>
                <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-800 bg-white outline-none focus:border-red-400 focus:ring-1 focus:ring-red-100" placeholder="e.g. Legal Contract Reviewer" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Description</label>
                <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-800 bg-white outline-none focus:border-red-400 focus:ring-1 focus:ring-red-100" placeholder="Brief description of the agent's purpose" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Model</label>
                <div className="flex items-center gap-3">
                  <select className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-800 bg-white outline-none focus:border-red-400 focus:ring-1 focus:ring-red-100">
                    <option>gpt-4.1</option>
                    <option>gpt-4o</option>
                    <option>claude-3-5-sonnet</option>
                    <option>gemini-1.5-pro</option>
                  </select>
                  <span className="text-xs bg-orange-50 text-orange-600 border border-orange-200 px-2 py-1 rounded-lg font-medium whitespace-nowrap">⚡ Credits enhanced</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Select the model that powers your agent&apos;s reasoning and responses.</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1">
                  Instructions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
                  </svg>
                </label>
                <textarea
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 bg-white outline-none focus:border-red-400 focus:ring-1 focus:ring-red-100 resize-none"
                  rows={5}
                  placeholder="Define what your agent should do, how it should behave, and any constraints."
                />
                <p className="text-right text-xs text-gray-400 mt-0.5">0/4000</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                    Knowledge
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
                    </svg>
                  </label>
                  <button className="text-xs text-red-600 font-medium flex items-center gap-1 hover:underline"><PlusIcon /> Add</button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 text-center">
                  <p className="text-xs font-medium text-gray-600 mb-0.5">No knowledge sources yet</p>
                  <p className="text-xs text-gray-400">Add documents, URLs or data sources to give your agent context.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-gray-700">Tools</label>
                  <button className="text-xs text-red-600 font-medium flex items-center gap-1 hover:underline"><PlusIcon /> Add</button>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Qdrant Vector Database", status: "Not authorized", statusColor: "orange" as const },
                    { name: "PDF Parser", status: "Ready", statusColor: "green" as const },
                  ].map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg bg-white">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-red-100 flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E60000" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-800">{tool.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusDot color={tool.statusColor} />
                        <span className="text-xs text-gray-500">{tool.status}</span>
                        <button className="text-gray-400 hover:text-gray-600"><DotsIcon /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-400">Unpublished changes · Saved just now</p>
                <button
                  onClick={() => onNavigate("agents-preview")}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                  Publish Agent
                </button>
              </div>
            </div>
          )}

          {activeTab !== "Configure" && (
            <div className="flex items-center justify-center h-40 text-sm text-gray-400">
              {activeTab} view — select an option to explore
            </div>
          )}
        </div>

        {/* Right: preview panel */}
        <div className="w-72 border-l border-gray-200 bg-white flex flex-col">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-800">Agent Preview</p>
              <p className="text-xs text-gray-400">Test your agent in a live environment</p>
            </div>
            <button className="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors">View API</button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E60000" strokeWidth="1.8">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Start a conversation</p>
              <p className="text-xs text-gray-400 mt-1">Describe what you want your agent to do and it will respond here.</p>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-gray-100">
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50">
              <input className="flex-1 text-xs text-gray-700 bg-transparent outline-none placeholder-gray-400" placeholder="Describe what your agent should do" />
              <button className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors"><SendIcon /></button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">Agent runs in a secure Vodafone environment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen 5: Knowledge ──────────────────────────────────────────────────────

const KnowledgeScreen = () => {
  const [activeTab, setActiveTab] = useState("Knowledge Bases")
  const tabs = ["Knowledge Bases", "Documents", "Data Sources"]

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <TopBar />
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-900">Knowledge</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <PlusIcon /> Create Knowledge Base
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Manage knowledge bases, documents and data sources to ground your
          agents with the latest information.
        </p>

        <div className="flex gap-5 border-b border-gray-200 mb-6">
          {tabs.map((t) => (
            <Tab
              key={t}
              label={t}
              active={activeTab === t}
              onClick={() => setActiveTab(t)}
            />
          ))}
        </div>

        {activeTab === "Knowledge Bases" && (
          <>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white flex-1 max-w-xs">
                <SearchIcon />
                <input
                  className="text-sm text-gray-600 bg-transparent outline-none w-full placeholder-gray-400"
                  placeholder="Search knowledge bases..."
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "📄",
                  color: "bg-red-100",
                  name: "Legal Documents",
                  desc: "Contracts, legal frameworks and regulatory information.",
                  docs: 142,
                  updated: "2 days ago",
                },
                {
                  icon: "📘",
                  color: "bg-blue-100",
                  name: "Product Manuals",
                  desc: "Product guides, technical manuals and user documentation.",
                  docs: 89,
                  updated: "5 days ago",
                },
                {
                  icon: "🛡️",
                  color: "bg-emerald-100",
                  name: "Company Policies",
                  desc: "Internal policies, procedures and HR documentation.",
                  docs: 56,
                  updated: "1 day ago",
                },
              ].map((kb) => (
                <Card
                  key={kb.name}
                  className="p-5 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${kb.color} flex items-center justify-center text-xl`}
                    >
                      {kb.icon}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                      <DotsIcon />
                    </button>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {kb.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    {kb.desc}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      {kb.docs} documents
                    </span>
                    <span>Updated {kb.updated}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Upload area */}
            <Card className="p-10 text-center">
              <div className="flex justify-center mb-3">
                <UploadIcon />
              </div>
              <p className="text-base font-semibold text-gray-800 mb-1">
                Upload documents
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Drag and drop files here, or click to browse
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                Choose files
              </button>
              <p className="text-xs text-gray-400 mt-3">
                Supported formats: PDF, DOCX, TXT, MD, CSV, XLSX · Max file
                size: 100 MB
              </p>
            </Card>
          </>
        )}

        {activeTab !== "Knowledge Bases" && (
          <div className="flex items-center justify-center h-40 text-sm text-gray-400">
            {activeTab} — content will appear here
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Screen 6: LLM ───────────────────────────────────────────────────────────

const LLMScreen = () => {
  const [activeTab, setActiveTab] = useState("Model Providers")
  const tabs = ["Model Providers", "Models"]

  const providers = [
    {
      name: "OpenAI",
      logo: "🟢",
      desc: "Access GPT models including GPT-4 and GPT-5.",
      status: "Connected",
    },
    {
      name: "Azure OpenAI",
      logo: "🔵",
      desc: "Enterprise-grade OpenAI models on Microsoft Azure.",
      status: "Connected",
    },
    {
      name: "Anthropic",
      logo: "🟣",
      desc: "Claude models for safe and reliable AI systems.",
      status: "Configure",
    },
    {
      name: "Google Gemini",
      logo: "🔴",
      desc: "Gemini models from Google DeepMind.",
      status: "Connected",
    },
    {
      name: "Local Models",
      logo: "⚙️",
      desc: "Run open-source models in your own infrastructure.",
      status: "Configure",
    },
  ]

  const models = [
    {
      name: "GPT-4.1",
      provider: "OpenAI",
      type: "Text & Vision",
      context: "128K",
      status: "Available",
    },
    {
      name: "Claude",
      provider: "Anthropic",
      type: "Text & Vision",
      context: "200K",
      status: "Available",
    },
    {
      name: "Gemini",
      provider: "Google Gemini",
      type: "Multimodal",
      context: "1M",
      status: "Available",
    },
    {
      name: "Llama",
      provider: "Local Models",
      type: "Text",
      context: "128K",
      status: "Available",
    },
    {
      name: "GPT-4o",
      provider: "OpenAI",
      type: "Text & Vision",
      context: "128K",
      status: "Available",
    },
    {
      name: "Claude 3.5 Haiku",
      provider: "Anthropic",
      type: "Text",
      context: "200K",
      status: "Available",
    },
  ]

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <TopBar />
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-900">LLM</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <PlusIcon /> Add Provider
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Configure model providers and available language models for your
          agents.
        </p>

        <div className="flex gap-5 border-b border-gray-200 mb-6">
          {tabs.map((t) => (
            <Tab
              key={t}
              label={t}
              active={activeTab === t}
              onClick={() => setActiveTab(t)}
            />
          ))}
        </div>

        {activeTab === "Model Providers" && (
          <>
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Model Providers</h2>
            <div className="grid grid-cols-3 gap-4">
              {providers.map((p) => (
                <Card key={p.name} className="p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">{p.logo}</div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100"><DotsIcon /></button>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">{p.desc}</p>
                  {p.status === "Connected" ? (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                      <StatusDot color="green" />
                      Connected
                    </div>
                  ) : (
                    <button className="flex items-center gap-1.5 text-xs text-gray-600 border border-gray-200 rounded-md px-2.5 py-1.5 hover:bg-gray-50 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 20v-2M12 6V4" />
                      </svg>
                      Configure
                    </button>
                  )}
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === "Models" && (
          <>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Available Models</h2>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      {["Model", "Provider", "Type", "Context Window", "Status"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {models.map((m, i) => (
                      <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{m.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{m.provider}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{m.type}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{m.context}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                            <StatusDot color="green" />
                            {m.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Screen 7: Tools ──────────────────────────────────────────────────────────

const ToolsScreen = () => {
  const [activeTab, setActiveTab] = useState("Tools")
  const tabs = ["Tools", "MCP", "A2A"]

  const tools = [
    {
      icon: "🔍",
      name: "Web Search",
      category: "Data & Search",
      desc: "Search the web for up-to-date information from trusted sources.",
      status: "Connected",
    },
    {
      icon: "📄",
      name: "File Parser",
      category: "Document Processing",
      desc: "Extract and parse content from PDF, DOCX, TXT and other file formats.",
      status: "Connected",
    },
    {
      icon: "🗄️",
      name: "SQL Database",
      category: "Data & Storage",
      desc: "Connect to relational databases and execute natural language queries.",
      status: "Connected",
    },
    {
      icon: "🔗",
      name: "REST API",
      category: "Integrations",
      desc: "Call external REST APIs with authentication and parameter mapping.",
      status: "Connected",
    },
    {
      icon: "🐍",
      name: "Python Runner",
      category: "Execution",
      desc: "Execute custom Python code in a secure sandbox environment.",
      status: "Configure",
    },
    {
      icon: "🗃️",
      name: "Vector Database",
      category: "Data & Storage",
      desc: "Store and search vector embeddings for semantic retrieval.",
      status: "Connected",
    },
  ]

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <TopBar />
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-900">Tools</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <PlusIcon /> Add Tool
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Manage tools and integrations available to your agents.
        </p>

        <div className="flex gap-5 border-b border-gray-200 mb-5">
          {tabs.map((t) => (
            <Tab
              key={t}
              label={t}
              active={activeTab === t}
              onClick={() => setActiveTab(t)}
            />
          ))}
        </div>

        {activeTab === "Tools" && (
          <>
            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white flex-1 max-w-xs">
                <SearchIcon />
                <input
                  className="text-sm text-gray-600 bg-transparent outline-none w-full placeholder-gray-400"
                  placeholder="Search tools..."
                />
              </div>
              {/* Summary tiles */}
              <div className="flex gap-3 ml-auto">
                <div className="border border-gray-200 rounded-xl px-4 py-2 bg-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E60000"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="8" height="8" rx="1" />
                      <rect x="14" y="2" width="8" height="8" rx="1" />
                      <rect x="2" y="14" width="8" height="8" rx="1" />
                      <rect x="14" y="14" width="8" height="8" rx="1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">MCP Servers</p>
                    <p className="text-base font-bold text-gray-900">4</p>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="border border-gray-200 rounded-xl px-4 py-2 bg-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">A2A Agents</p>
                    <p className="text-base font-bold text-gray-900">6</p>
                  </div>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {tools.map((tool) => (
                <Card
                  key={tool.name}
                  className="p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-lg">
                        {tool.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {tool.name}
                        </p>
                        <p className="text-xs text-gray-400">{tool.category}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                      <DotsIcon />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    {tool.desc}
                  </p>
                  {tool.status === "Connected" ? (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                      <StatusDot color="green" />
                      Connected
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-orange-500">
                      <StatusDot color="orange" />
                      Configure
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab !== "Tools" && (
          <div className="flex items-center justify-center h-40 text-sm text-gray-400">
            {activeTab} — servers and agents will appear here
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Screen 8: Observability ──────────────────────────────────────────────────

// Simple line chart using SVG
const LatencyChart = () => {
  const data = [
    320, 450, 380, 520, 490, 610, 580, 420, 390, 470, 550, 500, 430, 480, 520,
    460, 580, 620, 540, 490, 430, 510, 470, 440,
  ]
  const volume = [
    180, 220, 195, 270, 250, 310, 295, 210, 195, 240, 280, 255, 215, 245, 265,
    235, 295, 315, 270, 250, 215, 260, 240, 220,
  ]
  const maxData = Math.max(...data)
  const maxVol = Math.max(...volume)
  const w = 600
  const h = 160
  const pts = (arr: number[], max: number) =>
    arr
      .map((v, i) => `${(i / (arr.length - 1)) * w},${h - (v / max) * h}`)
      .join(" ")

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-40"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E60000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E60000" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FECACA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FECACA" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Volume bars */}
      {volume.map((v, i) => {
        const bw = w / volume.length - 2
        const bh = (v / maxVol) * (h * 0.6)
        return (
          <rect
            key={i}
            x={(i / volume.length) * w + 1}
            y={h - bh}
            width={bw}
            height={bh}
            fill="#FECACA"
            opacity="0.5"
            rx="1"
          />
        )
      })}
      {/* Latency line area */}
      <polygon
        points={`0,${h} ${pts(data, maxData)} ${w},${h}`}
        fill="url(#lineGrad)"
      />
      <polyline
        points={pts(data, maxData)}
        fill="none"
        stroke="#E60000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ObservabilityScreen = () => {
  const [activeTab, setActiveTab] = useState("Overview")
  const tabs = ["Overview", "Traces", "Metrics", "Logs", "Evaluations"]

  const traces = [
    {
      time: "Mar 6, 2025 14:24:10",
      agent: "Contract Review Agent",
      model: "gpt-5",
      latency: "642 ms",
      tokens: 1284,
      status: "Success",
    },
    {
      time: "Mar 6, 2025 14:24:02",
      agent: "Customer Support Agent",
      model: "gpt-4o",
      latency: "1,203 ms",
      tokens: 2415,
      status: "Success",
    },
    {
      time: "Mar 6, 2025 14:23:47",
      agent: "Network Assistant",
      model: "gpt-4o",
      latency: "298 ms",
      tokens: 867,
      status: "Success",
    },
    {
      time: "Mar 6, 2025 14:23:31",
      agent: "Policy Q&A Agent",
      model: "claude-3-haiku",
      latency: "1,856 ms",
      tokens: 3182,
      status: "Error",
    },
    {
      time: "Mar 6, 2025 14:23:16",
      agent: "Contract Review Agent",
      model: "gpt-5",
      latency: "721 ms",
      tokens: 1189,
      status: "Success",
    },
  ]

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <TopBar />
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-900">Observability</h1>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white text-sm text-gray-600">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Last 24 hours
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Monitor requests, traces, metrics, logs, and evaluations across all
          agents.
        </p>

        <div className="flex gap-5 border-b border-gray-200 mb-6">
          {tabs.map((t) => (
            <Tab
              key={t}
              label={t}
              active={activeTab === t}
              onClick={() => setActiveTab(t)}
            />
          ))}
        </div>

        {activeTab === "Overview" && (
          <>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <StatCard
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E60000"
                    strokeWidth="2"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                }
                label="Total Requests"
                value="12,482"
                sub="↑ 12% vs previous day"
              />
              <StatCard
                icon={<CheckCircleIcon color="#10B981" />}
                label="Success Rate"
                value="98.6%"
                sub="↑ 0.8% vs previous day"
              />
              <StatCard
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E60000"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Average Latency"
                value="842 ms"
                sub="↓ 4.18% vs previous day"
                subColor="text-red-500"
              />
              <StatCard
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E60000"
                    strokeWidth="2"
                  >
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  </svg>
                }
                label="Token Usage"
                value="1.8M"
                sub="↑ 7% vs previous day"
              />
            </div>

            <Card className="p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-800">
                  Latency and Request Volume
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-red-600 inline-block rounded" />
                    Average Latency (ms)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-red-200 rounded-sm inline-block" />
                    Request Volume
                  </span>
                  <span className="border border-gray-200 rounded px-2 py-0.5 text-xs">
                    Last 24 hours
                  </span>
                </div>
              </div>
              <LatencyChart />
              <div className="flex justify-between mt-2 text-xs text-gray-400 px-1">
                {[
                  "00:00",
                  "02:00",
                  "04:00",
                  "06:00",
                  "08:00",
                  "10:00",
                  "12:00",
                  "14:00",
                  "16:00",
                  "18:00",
                  "20:00",
                  "22:00",
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                <h2 className="text-sm font-bold text-gray-800">
                  Recent Traces
                </h2>
                <button className="text-xs text-red-600 hover:underline font-medium">
                  View all →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-50 bg-gray-50">
                      {[
                        "Timestamp",
                        "Agent",
                        "Model",
                        "Latency",
                        "Tokens",
                        "Status",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left px-4 py-3 text-xs font-semibold text-gray-500"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {traces.map((t, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 text-xs text-gray-500 font-mono">
                          {t.time}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-800 font-medium">
                          {t.agent}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {t.model}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {t.latency}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {t.tokens.toLocaleString()}
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={t.status === "Success" ? "green" : "red"}
                          >
                            {t.status === "Success" ? (
                              <StatusDot color="green" />
                            ) : (
                              <StatusDot color="red" />
                            )}
                            {t.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {activeTab !== "Overview" && (
          <div className="flex items-center justify-center h-40 text-sm text-gray-400">
            {activeTab} — data will appear here
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Screen 9: Guardrails ─────────────────────────────────────────────────────

const GuardrailsScreen = () => {
  const [activeTab, setActiveTab] = useState("Policies")
  const tabs = ["Policies", "Rules", "Test Cases", "Violations"]

  const policies = [
    {
      icon: "🔒",
      name: "PII Protection",
      desc: "Detects and blocks personally identifiable information (PII).",
      enforcement: "Block",
      applied: "All Agents",
      status: "Active",
    },
    {
      icon: "⚠️",
      name: "Prompt Injection Detection",
      desc: "Detects and prevents prompt injection attempts.",
      enforcement: "Block",
      applied: "All Agents",
      status: "Active",
    },
    {
      icon: "🚫",
      name: "Content Safety",
      desc: "Filters harmful, abusive, or inappropriate content.",
      enforcement: "Block",
      applied: "All Agents",
      status: "Active",
    },
    {
      icon: "🛡️",
      name: "Data Leakage Prevention",
      desc: "Prevents sensitive internal data from being exposed.",
      enforcement: "Block",
      applied: "All Agents",
      status: "Active",
    },
  ]

  const violations = [
    {
      icon: <WarnIcon />,
      title: "PII detected in user prompt",
      detail: "Customer email address · 2 minutes ago",
      badge: "Warning",
    },
    {
      icon: <BlockIcon />,
      title: "Potential prompt injection",
      detail: "Jailbreak attempt, brute force · 14 minutes ago",
      badge: "Blocked",
    },
    {
      icon: <BlockIcon />,
      title: "Harmful content detected",
      detail: "Inappropriate language · 32 minutes ago",
      badge: "Blocked",
    },
    {
      icon: <WarnIcon />,
      title: "Sensitive data request",
      detail: "Internal document reference · 1 hour ago",
      badge: "Warning",
    },
    {
      icon: <BlockIcon />,
      title: "PII detected in file upload",
      detail: "Contains personal information · 2 hours ago",
      badge: "Blocked",
    },
  ]

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <TopBar />
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-900">Guardrails</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <PlusIcon /> Create Policy
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Define and enforce safety, security, and compliance policies for your
          AI agents.
        </p>

        <div className="flex gap-5 border-b border-gray-200 mb-6">
          {tabs.map((t) => (
            <Tab
              key={t}
              label={t}
              active={activeTab === t}
              onClick={() => setActiveTab(t)}
            />
          ))}
        </div>

        {activeTab === "Policies" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <StatCard
                icon={<GuardrailsIcon active />}
                label="Active Policies"
                value="4"
                sub="Enforcing guardrails across your agents"
                subColor="text-gray-500"
              />
              <StatCard
                icon={<BlockIcon />}
                label="Blocked Requests"
                value="127"
                sub="↓ 30% in the last 7 days"
                subColor="text-emerald-600"
              />
              <StatCard
                icon={<WarnIcon />}
                label="Warnings"
                value="43"
                sub="↑ 28% in the last 7 days"
                subColor="text-orange-500"
              />
            </div>

            <div className="flex gap-6">
              {/* Policies table */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-bold text-gray-800">Policies</h2>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 bg-white">
                    <SearchIcon />
                    <input
                      className="text-xs text-gray-600 bg-transparent outline-none placeholder-gray-400"
                      placeholder="Search policies..."
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Manage the policies that protect your AI agents.
                </p>
                <Card>
                  <div className="px-4 py-3 border-b border-gray-50 grid grid-cols-5 gap-2">
                    {["Policy", "Enforcement", "Applied To", "Status", ""].map(
                      (h) => (
                        <span
                          key={h}
                          className="text-xs font-semibold text-gray-500"
                        >
                          {h}
                        </span>
                      ),
                    )}
                  </div>
                  {policies.map((p, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 border-b border-gray-50 last:border-0 grid grid-cols-5 gap-2 items-center hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-sm">
                          {p.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">
                            {p.name}
                          </p>
                          <p className="text-xs text-gray-400 truncate max-w-[140px]">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                      <Badge variant="red">{p.enforcement}</Badge>
                      <span className="text-xs text-gray-600">{p.applied}</span>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                        <StatusDot color="green" />
                        {p.status}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 ml-auto">
                        <DotsIcon />
                      </button>
                    </div>
                  ))}
                </Card>
              </div>

              {/* Recent violations */}
              <div className="w-64">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-bold text-gray-800">
                    Recent Violations
                  </h2>
                  <button className="text-xs text-red-600 hover:underline">
                    View all →
                  </button>
                </div>
                <div className="space-y-2">
                  {violations.map((v, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-gray-200 p-3"
                    >
                      <div className="flex items-start gap-2">
                        {v.icon}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-800 leading-tight">
                            {v.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5 leading-tight">
                            {v.detail}
                          </p>
                          <Badge
                            variant={v.badge === "Blocked" ? "red" : "orange"}
                          >
                            {v.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab !== "Policies" && (
          <div className="flex items-center justify-center h-40 text-sm text-gray-400">
            {activeTab} — content will appear here
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Screen 10: Finetuning ────────────────────────────────────────────────────

const FinetuningScreen = () => {
  const [activeTab, setActiveTab] = useState("Jobs")
  const tabs = ["Datasets", "Jobs", "Checkpoints", "Deployments"]

  const jobs = [
    {
      name: "Legal Assistant v3",
      desc: "Enhanced legal reasoning for contracts",
      baseModel: "gpt-4o-mini",
      dataset: "legal_docs_v2",
      samples: "13,450",
      progress: 69,
      status: "Running",
      created: "Apr 24, 2025 10:22",
    },
    {
      name: "Support Agent v2",
      desc: "Improved customer support responses",
      baseModel: "gpt-3.5-turbo",
      dataset: "support_tickets",
      samples: "28,300",
      progress: 100,
      status: "Completed",
      created: "Apr 22, 2025 14:18",
    },
    {
      name: "Arabic QA Model",
      desc: "Domain-specific Arabic knowledge",
      baseModel: "llama-3-8b",
      dataset: "arabic_qa",
      samples: "13,230",
      progress: 42,
      status: "Running",
      created: "Apr 21, 2025 09:03",
    },
  ]

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <TopBar />
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-900">Finetuning</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <PlusIcon /> New Finetuning Job
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Improve your agents with domain-specific data using supervised
          fine-tuning.
        </p>

        <div className="flex gap-5 border-b border-gray-200 mb-6">
          {tabs.map((t) => (
            <Tab
              key={t}
              label={t}
              active={activeTab === t}
              onClick={() => setActiveTab(t)}
            />
          ))}
        </div>

        {activeTab === "Jobs" && (
          <>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <StatCard
                icon={<FinetuningIcon active />}
                label="Training Jobs"
                value="3"
                sub="Total finetuning jobs"
                subColor="text-gray-500"
              />
              <StatCard
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E60000"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                }
                label="Running"
                value="1"
                sub="Jobs in progress"
                subColor="text-gray-500"
              />
              <StatCard
                icon={<CheckCircleIcon color="#10B981" />}
                label="Completed"
                value="2"
                sub="Successfully finished"
              />
              <StatCard
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E60000"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="GPU Hours"
                value="48.7"
                sub="Total compute used"
                subColor="text-gray-500"
              />
            </div>

            <h2 className="text-sm font-bold text-gray-800 mb-3">
              Training Jobs
            </h2>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      {[
                        "Name",
                        "Base Model",
                        "Dataset",
                        "Progress",
                        "Status",
                        "Created",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left px-4 py-3 text-xs font-semibold text-gray-500"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((j, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3">
                          <p className="text-sm font-semibold text-gray-900">
                            {j.name}
                          </p>
                          <p className="text-xs text-gray-400">{j.desc}</p>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {j.baseModel}
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-700">{j.dataset}</p>
                          <p className="text-xs text-gray-400">
                            {j.samples} samples
                          </p>
                        </td>
                        <td className="px-4 py-3 w-32">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-red-600 rounded-full"
                                style={{ width: `${j.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 w-7 text-right">
                              {j.progress}%
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={
                              j.status === "Completed" ? "green" : "orange"
                            }
                          >
                            <StatusDot
                              color={
                                j.status === "Completed" ? "green" : "orange"
                              }
                            />
                            {j.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500">
                          {j.created}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {activeTab !== "Jobs" && (
          <div className="flex items-center justify-center h-40 text-sm text-gray-400">
            {activeTab} — content will appear here
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Agent Home (capability tiles with proper icons) ──────────────────────────

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("main")
  const navigate = (s: Screen) => setScreen(s)

  const renderContent = () => {
    switch (screen) {
      case "main":           return <MainWelcomeScreen onNavigate={navigate} />
      case "agent-welcome":  return <AgentWelcomeScreen />
      case "agent-home":     return <AgentHomeScreen />
      case "ml-home":        return <MLHomeScreen />
      case "agents":         return <AgentsListScreen onNavigate={navigate} />
      case "agents-preview": return <AgentPreviewScreen agentName="Legal Contract Reviewer" onNavigate={navigate} />
      case "agents-create":  return <AgentCreateScreen onNavigate={navigate} />
      case "knowledge":      return <KnowledgeScreen />
      case "llm":            return <LLMScreen />
      case "tools":          return <ToolsScreen />
      case "observability":  return <ObservabilityScreen />
      case "guardrails":     return <GuardrailsScreen />
      case "finetuning":     return <FinetuningScreen />
      default:               return <MainWelcomeScreen onNavigate={navigate} />
    }
  }

  const renderSidebar = () => {
    if (screen === "main") return <MainSidebar current={screen} onNavigate={navigate} />
    if (screen === "ml-home") return <MLSidebar onNavigate={navigate} />
    return <AgentSidebar current={screen} onNavigate={navigate} />
  }

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {renderSidebar()}
      {renderContent()}
    </div>
  )
}
