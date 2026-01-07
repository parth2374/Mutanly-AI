'use client'

import Image from "next/image"

export default function EditorialQuoteSection() {
  return (
    <div className="bg-neutral-500">
      <section
        className="relative min-h-screen px-6 py-20 z-30"
        style={{
          backgroundImage: "url('https://ownprimland.com/quotes-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-[#eef0d3]/85" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12">

          {/* LEFT IMAGE */}
          <div className="md:col-span-4">
            <Image
              src="https://www.shutterstock.com/image-vector/illustration-abstract-stream-artificial-intelligence-600nw-2594662519.jpg"
              alt="Breakfast with mountain view"
              width={500}
              height={700}
              className="w-full object-cover rounded-2xl"
              priority
            />
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="relative hidden md:col-span-1 md:flex justify-center">
            <span className="h-full w-px bg-[#6f8267]" />
          </div>

          {/* RIGHT QUOTE */}
          <div className="md:col-span-6 flex items-center">
            <div className="max-w-xl">
              <p className="font-serif text-2xl text-center max-w-xl leading-relaxed text-[#4a5e4d] md:text-3xl">
                “Mutanly AI represents a new paradigm in genomic interpretation where artificial intelligence meets biological understanding at scale. By analyzing genetic variation within its full sequence and functional context, the platform transforms complex mutations into insights that are not only computationally precise, but biologically meaningful.”
              </p>

              <p className="mt-12 font-bold text-xs uppercase text-center tracking-widest text-[#6f8267]">
                Mutanly AI · Genomic Intelligence Platform
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}