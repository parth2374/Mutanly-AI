'use client'

import { motion } from 'framer-motion'

export default function VariantAnalysis() {
  return (
    <main className="min-h-screen bg-[#fbf7e6] px-6 py-32 text-[#2f3a2e]">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#8a9b7c]">
            Variant Analysis
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            A Context-Driven Approach
            <br />
            To Genetic Interpretation
          </h1>
        </motion.header>

        {/* INTRO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-28"
        >
          <p className="font-serif text-2xl leading-relaxed">
            Interpreting genetic variation requires more than identifying a change in sequence.
            True understanding emerges only when mutations are evaluated within their biological,
            evolutionary, and regulatory context.
          </p>

          <p className="mt-8 text-sm leading-relaxed text-[#4a5e4d]">
            Mutanly AI approaches variant analysis as a reasoning problem rather than a classification
            task. Each variant is examined as part of a broader genomic landscape integrating sequence
            context, conservation signals, functional relevance, and inferred biological consequence
            to produce interpretable and trustworthy insight.
          </p>
        </motion.section>

        {/* SECTION 1 */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-28 grid gap-16 md:grid-cols-2"
        >
          <div>
            <h2 className="mb-6 font-serif text-3xl">
              Sequence Context Matters
            </h2>
            <p className="text-sm leading-relaxed text-[#4a5e4d]">
              Genetic variants do not exist in isolation. Their impact is shaped by surrounding
              nucleotides, structural motifs, and regional genomic architecture. Mutanly AI evaluates
              extended sequence neighborhoods to understand how local context influences functional
              outcomes.
            </p>
          </div>

          <div className="border-l border-[#a8611c]/40 pl-8">
            <p className="font-serif text-lg leading-relaxed">
              By incorporating contextual signals, the system avoids oversimplified interpretations
              and instead reflects the true complexity of genomic regulation.
            </p>
          </div>
        </motion.section>

        {/* SECTION 2 */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mb-28"
        >
          <h2 className="mb-6 font-serif text-3xl">
            Evolutionary and Biological Signals
          </h2>

          <p className="text-sm leading-relaxed text-[#4a5e4d]">
            Evolutionary conservation offers a powerful lens for interpreting genetic variation.
            Mutations occurring in highly constrained regions are more likely to carry biological
            significance. Mutanly AI integrates conservation signals alongside inferred regulatory
            and functional indicators to assess potential impact.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[#4a5e4d]">
            This multi-layered evaluation enables a deeper understanding of how variants may influence
            molecular pathways, gene regulation, and phenotypic outcomes.
          </p>
        </motion.section>

        {/* SECTION 3 */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-28 grid gap-16 md:grid-cols-2"
        >
          <div>
            <h2 className="mb-6 font-serif text-3xl">
              Foundation Model Reasoning
            </h2>
            <p className="text-sm leading-relaxed text-[#4a5e4d]">
              At the core of Mutanly AI lies a next-generation foundation model trained to reason
              across genomic sequences at scale. Rather than producing isolated scores, the model
              synthesizes diverse biological signals into coherent interpretations.
            </p>
          </div>

          <div className="border-l border-[#a8611c]/40 pl-8">
            <p className="font-serif text-lg leading-relaxed">
              This approach prioritizes interpretability and biological relevance ensuring results
              can be trusted and understood by researchers and clinicians alike.
            </p>
          </div>
        </motion.section>

        {/* CONCLUSION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="border-l border-[#8a9b7c]/50 pl-8"
        >
          <p className="font-serif text-2xl italic leading-relaxed">
            Variant analysis is not about labeling mutations as benign or pathogenic.
            <br />
            It is about understanding their place within the living genome.
          </p>
        </motion.section>

      </div>
    </main>
  )
}