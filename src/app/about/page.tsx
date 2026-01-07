'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf7e6] px-6 py-28 text-[#2f3a2e]">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a9b7c]">
            About Mutanly AI
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Genomic Intelligence,
            <br />
            Designed for Clarity
          </h1>
        </motion.div>

        {/* Content */}
        <div className="space-y-24">

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid gap-12 md:grid-cols-2"
          >
            <p className="font-serif text-xl leading-relaxed">
              Mutanly AI is a genomic intelligence platform built to interpret genetic variation
              with depth, precision, and biological awareness. We believe understanding mutations
              requires more than predictions it requires context.
            </p>

            <p className="text-sm leading-relaxed text-[#4a5e4d]">
              By combining next generation foundation models with genomic reasoning, Mutanly AI
              evaluates sequence context, mutation impact, and biological relevance across entire
              genomes. The result is a system designed to support research, clinical decision making,
              and precision medicine at scale.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="border-l border-[#a8611c]/40 pl-8"
          >
            <p className="font-serif text-2xl italic leading-relaxed">
              “Our goal is not to simplify genomics
              <br />
              but to make its complexity interpretable.”
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="grid gap-12 md:grid-cols-3 text-sm text-[#4a5e4d]"
          >
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-[#8a9b7c]">
                Built For
              </p>
              <p>Researchers, clinicians, and precision medicine teams</p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-[#8a9b7c]">
                Focus
              </p>
              <p>Variant interpretation, biological relevance, genomic context</p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-[#8a9b7c]">
                Philosophy
              </p>
              <p>Clarity, rigor, and trust in genomic intelligence</p>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  )
}