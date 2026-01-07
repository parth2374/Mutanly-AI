'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function ResidencesPage() {
  return (
    <main className="min-h-screen bg-[#fbf7e6] px-2 py-16 text-[#456a4b]">
      <div className="mx-auto max-w-7xl">

        {/* Page Title */}
        <h1 className="mb-14 text-center font-serif text-3xl text-[#456a4b] tracking-wide">
          Precision-Driven Genomic Intelligence
        </h1>

        {/* SECTION 1 */}
        <section className="mb-28 grid grid-cols-1 md:grid-cols-12">

          {/* Image */}
          <div className="relative md:col-span-5">
            <Image
              src="https://www.shutterstock.com/image-photo/abstract-narrow-vertical-chain-molecules-600nw-2682240895.jpg"
              alt="Auberge Residences"
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />

            {/* Logo Badge */}
            <div className="absolute left-6 top-6 bg-[#3e5b43] px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white">
              Mutanly<br />AI Core
            </div>
          </div>

          {/* Text Panel */}
          <div className="flex flex-col justify-between bg-[#e9efd8] p-10 md:col-span-7">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#456a4b] font-medium">
                Live Variant Analysis Engine
              </p>
              <p className="mb-4 text-2xl text-[#456a4b] font-serif font-light">
                AI-Powered Mutation Interpretation
              </p>
            </div>

            <div
              className="inline-block text-xs text-[#456a4b]"
            >
              <p className="font-serif text-lg leading-6 font-extralight mb-8">
                Mutanly AI is built to interpret genetic variation at a depth and resolution that goes far beyond traditional pipelines. Powered by Evo2, our system evaluates each variant within its full genomic and biological context - examining sequence neighborhoods, evolutionary constraints, regulatory signals, and potential functional impact. Rather than producing isolated predictions, Mutanly AI synthesizes multiple layers of genomic intelligence into a coherent, evidence-driven interpretation. The result is a clear, scalable understanding of how mutations may influence biological systems, disease mechanisms, and clinical outcomes, delivered through a platform designed for researchers and clinicians who demand both scientific rigor and operational precision.
              </p>
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative cursor-pointer inline-flex items-center overflow-hidden text-xs uppercase tracking-[0.3em] text-[#456a4b]"
              >
                <motion.span
                  variants={{
                    rest: { y: 0, opacity: 0.8 },
                    hover: { y: -1, opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10 font-medium"
                >
                  Learn More
                </motion.span>
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#a8611c]"
                />
              </motion.button>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="grid grid-cols-1 md:grid-cols-12">

          {/* Text Panel */}
          <div className="flex flex-col justify-between bg-[#e9efd8] p-10 md:col-span-6">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#456a4b] font-medium">
                Advanced Genomic Models
              </p>
              <p className="mb-4 text-2xl text-[#456a4b] font-serif font-light">
                Evo2 Variant Intelligence
              </p>
            </div>

            <div
              className="inline-block text-xs text-[#456a4b]"
            >
              <p className="font-serif text-lg leading-6 font-extralight mb-8">
                Built on next-generation foundation models purpose-trained for genomic reasoning, Mutanly AI examines genetic variation with an unprecedented level of contextual awareness and biological depth. Each sequence is analyzed not as an isolated change, but as part of a complex genomic landscape that includes surrounding nucleotide context, evolutionary conservation, regulatory architecture, and potential downstream functional consequences. By integrating mutation impact assessment with biologically meaningful signals across entire genomes, Mutanly AI transforms raw variant data into structured, interpretable intelligence. The platform is designed to support researchers, clinicians, and precision medicine teams who require accuracy at scale enabling confident exploration of disease mechanisms, variant prioritization, and translational insights while maintaining clarity, consistency, and scientific rigor across diverse genomic datasets.
              </p>
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative cursor-pointer inline-flex items-center overflow-hidden text-xs uppercase tracking-[0.3em] text-[#456a4b]"
              >
                <motion.span
                  variants={{
                    rest: { y: 0, opacity: 0.8 },
                    hover: { y: -1, opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10 font-medium"
                >
                  Learn More
                </motion.span>
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#a8611c]"
                />
              </motion.button>
            </div>
          </div>

          {/* Image */}
          <div className="relative md:col-span-6">
            <Image
              src="/NN.jpg"
              alt="Mountain Estates"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />

            {/* Badge */}
            <div className="absolute left-6 top-6 bg-[#e6b97a] px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[#2e3a2f]">
              The<br />Estates
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}