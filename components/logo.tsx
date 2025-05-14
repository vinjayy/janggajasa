import type { FC } from "react"

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <rect width="40" height="40" rx="8" fill="#059669" />
        <path
          d="M10 30V10H16C18.2091 10 20 11.7909 20 14V14C20 16.2091 18.2091 18 16 18H10"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 10L30 10V26C30 28.2091 28.2091 30 26 30V30C23.7909 30 22 28.2091 22 26V22"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 18L22 22" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-2xl font-bold text-emerald-600">Janggajasa</span>
    </div>
  )
}
