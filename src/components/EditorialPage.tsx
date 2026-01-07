'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function EditorialPage() {
  return (
    <main className="min-h-screen bg-[#fbf7e6] px-6 py-20 text-[#2f3a2e]">
      <div className="mx-auto max-w-[140rem] flex flex-col items-center justify-center">

        {/* Top Editorial Text */}
        <section className="mx-auto mb-32 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-widest font-bold text-[#a8611c]">
            AI Research Platform
          </p>
          <h1 className="mt-4 font-serif text-3xl leading-normal text-[#456a4b] md:text-4xl">
            Mutanly AI is a next-generation platform for understanding genetic mutations & transforming raw genomic variants into clear, meaningful insight through advanced AI.
          </h1>
        </section>

        {/* Middle Content */}
        <section className="relative max-w-7xl mb-40 grid grid-cols-1 gap-24 md:grid-cols-2">

          {/* Left Text */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-[#a8611c] font-bold">
              Precision & Context
            </p>
            <p className="max-w-sm text-[1.3rem] leading-[1.6rem] font-medium text-[#456a4b] uppercase">
              Every mutation tells a story.
              <br />
              Mutanly AI reads beyond coordinates, understanding the surrounding DNA context.
              <br />
              <br />
            </p>
            <p className="max-w-sm text-[#456a4b]">
              Powered by Evo2, our models analyze sequence-level patterns to reveal the potential impact of genetic variation instantly and at scale.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/070/418/402/small_2x/close-up-of-a-dna-double-helix-strand-with-glowing-textured-details-and-a-warm-backlight-highlighting-genetic-structure-and-molecular-biology-photo.jpg"
              alt="Mountain View"
              width={500}
              height={500}
              className="rounded-sm object-cover"
            />
          </div>
        </section>

        {/* Lower Section */}
        <section className="relative grid max-w-7xl grid-cols-1 gap-24 md:grid-cols-2">

          {/* Left Image */}
          <div className="md:col-span-1">
            <Image
              src="https://www.shutterstock.com/image-vector/big-genomic-data-visualization-dna-600nw-1102537610.jpg"
              alt="Picnic"
              width={500}
              height={500}
              className="rounded-sm object-cover"
            />
          </div>

          {/* Center Text */}
          <div className="md:col-span-1 flex flex-col justify-center">
            <h2 className="font-serif text-3xl italic text-[#456a4b]">
              Within Billions of Base Pairs,
              <br />
              <span className="text-[#456a4b]">Discover What Truly Matters…</span>
            </h2>

            <p className="mt-6 leading-normal text-[#456a4b]">
              From research to real-world application, Mutanly AI helps scientists, developers, and students interpret mutations with confidence. Less complexity. More understanding. Science that moves faster.
            </p>
          </div>
        </section>

        {/* Centered Ending Video */}
        <section className="mt-32 flex w-full justify-center">
          <motion.video
            src="/EditedVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-[320px] w-auto rounded-sm object-cover md:h-[400px]"
          />
        </section>
      </div>
    </main>
  )
}