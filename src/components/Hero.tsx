'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {

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
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        src="/HeroVideo.mp4"
        autoPlay
        muted
        playsInline
        preload='auto'
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <header className="relative z-20 flex items-center justify-between px-6 py-5 text-white md:px-12">
        <div
          className="relative z-50"
          onClick={() => setOpen(prev => !prev)}
        >
          <button className="flex items-center gap-3 cursor-pointer text-xs uppercase hover:opacity-80">
            <Menu className="h-5 w-5" />
            <span>Menu</span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                style={{ pointerEvents: 'auto' }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="absolute left-0 top-full mt-2 w-64 z-50 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl"
                ref={menuRef}
              >
                <div className="p-5 space-y-4">
                  <div className="text-[10px] z-50 tracking-[0.3em] uppercase text-white/50">
                    Navigation
                  </div>

                  <nav className="space-y-3 text-sm">
                    <Link href={'/variant-analysis'} className="block hover:text-[#de8246]" onClick={() => setOpen(false)}>
                      Variant Analysis
                    </Link>
                    <Link href={'/about'} className="block hover:text-[#de8246]" onClick={() => setOpen(false)}>
                      About
                    </Link>
                    <Link href={'/contact'} className="block hover:text-[#de8246]" onClick={() => setOpen(false)}>
                      Contact
                    </Link>
                  </nav>

                  <div className="pt-3 border-t border-white/10 text-xs text-white/50">
                    EVO2 · Research Platform
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img onClick={() => router.push("/")} src="/Logo.png" alt="Logo" width={42} height={42} className='cursor-pointer' />
        </div>

        <motion.button
          whileHover="hover"
          initial="rest"
          animate="rest"
          onClick={() => router.push('/dashboard')}
          className="relative hidden md:flex items-center cursor-pointer overflow-hidden rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-md"
        >
          <motion.span
            variants={{
              rest: { x: '-120%' },
              hover: { x: '120%' },
            }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <motion.span
            variants={{
              rest: { opacity: 0.85 },
              hover: { opacity: 1 },
            }}
            className="relative z-10"
          >
            Dashboard
          </motion.span>
        </motion.button>
      </header>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-6xl font-serif text-4xl leading-tight md:text-6xl"
        >
          From Sequence to Insight
          <br />
          <span className="italic">Next-Generation Variant Analysis</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 text-xs tracking-[0.25em]"
        >
          SCROLL TO EXPLORE
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-4 w-px bg-white"
        />
      </div>
    </section>
  )
}