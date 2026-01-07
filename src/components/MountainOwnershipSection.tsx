'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function MountainOwnershipSection() {
  return (
    <section className="bg-[#fbf7e6] px-6 py-24">
      <div className="relative mx-auto max-w-7xl">

        {/* Green Panel */}
        <div className="relative mx-auto flex w-full flex-col bg-[#4e6b4f] md:h-[720px] md:translate-x-[10%] md:w-[80%] md:flex-row">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:absolute md:-left-[25%] md:top-1/2 md:z-10 md:w-[60%] md:max-w-[520px] md:-translate-y-1/2"
          >
            <Image
              src="/square.jpg"
              alt="Family enjoying mountain fire"
              width={900}
              height={700}
              className="w-full p-3 md:p-0 object-cover shadow-xl rounded-md"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex w-full px-6 py-16 text-white md:ml-auto md:h-full md:max-w-xl md:px-12 md:py-20 md:pr-24"
          >
            <div className="flex h-full flex-col justify-between">
              <p className="mb-3 text-xs uppercase tracking-widest text-[#f2d5b5] font-medium opacity-80">
                Platform Access
              </p>

              <h2 className="font-serif text-3xl text-[#fbf7e6] leading-tight md:text-4xl">
                Interpret Genetic
                <br />
                Variation With Confidence
              </h2>

              <div className="mt-6 max-w-xs text-sm leading-relaxed text-white/80">
                <p className="font-serif text-lg text-[#fbf7e6]">
                  Mutanly AI provides a unified platform for analyzing genomic variation at scale combining sequence context, mutation impact, and biological relevance into clear, actionable insight. Designed for researchers, clinicians, and precision medicine teams, the system transforms complex genomic data into structured intelligence you can trust.
                </p>
                <motion.button
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="group mt-10 relative cursor-pointer inline-flex items-center overflow-hidden text-xs uppercase tracking-[0.05rem] text-white"
                >
                  <motion.span
                    variants={{
                      rest: { y: 0, opacity: 0.8 },
                      hover: { y: -1, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative z-10 font-medium"
                  >
                    Launch Analysis
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#f7d9b8]"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}