'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function HeroTwo() {

  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden z-10">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://stream.mux.com/QmZTac95fKLyONRqrhr02E6R5GuinqWH6/high.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl"
        >
          Understanding Genetics
          <br />
          <span className="italic">Through Artificial Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 max-w-2xl text-sm md:text-base text-white/70"
        >
          Mutanly AI interprets genomic variants using Evo2-powered models transforming complex DNA data into clear, meaningful insight.
        </motion.p>

        {/* Luxury AI Status Pill (replacement for scroll indicator) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-14 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#de8246] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#de8246]" />
          </span>

          <span className="text-xs tracking-widest uppercase text-white/80">
            Evo2 Model Active
          </span>
        </motion.div>
      </div>
    </section>
  )
}