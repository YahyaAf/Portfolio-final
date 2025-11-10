"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  src: string
  alt?: string
  className?: string
}

export default function AvatarAnimated({ src, alt = "avatar", className = "w-64 h-64 lg:w-72 lg:h-72" }: Props) {
  return (
    <motion.div
      className={`relative ${className} flex items-center justify-center`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* rotating blurred gradient behind the avatar */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div
          className="w-full h-full rounded-full blur-2xl opacity-40"
          style={{
            background:
              "conic-gradient(from 0deg, #f97316, #fb7185, #f43f5e, #fb7185, #f97316)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>

      {/* main avatar ring + image */}
      <motion.div
        className="relative rounded-full overflow-hidden border-4 border-red-400/50 shadow-2xl"
        style={{ width: "100%", height: "100%" }}
        whileHover={{ boxShadow: "0 30px 60px -12px rgba(244,63,94,0.45)", borderColor: "rgba(244,63,94,0.6)" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />

        {/* animated waveform/outline */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gradRed" x1="0" x2="1">
              <stop offset="0%" stopColor="#ff7a18" />
              <stop offset="50%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g transform="translate(0,0)">
            <path
              d="M10,100 C40,20 160,180 190,100 C160,20 40,180 10,100 Z"
              fill="none"
              stroke="url(#gradRed)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              strokeOpacity="0.9"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="800" dur="6s" repeatCount="indefinite" />
              <animate attributeName="stroke-dasharray" values="1 300;120 300;1 300" dur="6s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  )
}
