'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#fbf7e6] text-[#4e6b4f]">
      {/* Top Divider */}
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <div className="h-px bg-[#d6d9bf]" />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Left Navigation */}
          <div className="md:col-span-7 grid grid-cols-2 gap-12 md:grid-cols-4">

            {/* General Info */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#c38b4b]">
                General Info
              </p>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Experiences</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            {/* Real Estate */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#c38b4b]">
                Real Estate
              </p>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Auberge Residences</Link></li>
                <li><Link href="#">The Estates</Link></li>
                <li><Link href="#">Availability</Link></li>
              </ul>
            </div>

            {/* Experience */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#c38b4b]">
                Experience
              </p>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Outdoor Pursuits</Link></li>
                <li><Link href="#">Wellbeing</Link></li>
                <li><Link href="#">Culinary</Link></li>
                <li><Link href="#">Golf</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#c38b4b]">
                Explore
              </p>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Gallery</Link></li>
              </ul>
            </div>

          </div>

          {/* Right Info */}
          <div className="md:col-span-5 space-y-10">

            {/* Location */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#c38b4b]">
                Location
              </p>
              <p className="text-sm leading-relaxed">
                Primland
                <br />
                2000 Busted Rock Road,
                <br />
                Meadows of Dan, VA 24120, USA
              </p>

              <button className="mt-4 border border-[#4e6b4f] px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#4e6b4f] hover:text-[#fbf7e6] transition">
                Google Maps
              </button>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#c38b4b]">
                Contact
              </p>
              <p className="text-sm">
                info@ownprimland.com
                <br />
                276-222-3895
              </p>
            </div>

            {/* Partners */}
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-widest text-[#c38b4b]">
                  Part Of
                </p>
                <p className="text-sm">Auberge Collection</p>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-widest text-[#c38b4b]">
                  Exclusive Sales
                </p>
                <p className="text-sm">Premier Sotheby’s</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d6d9bf]">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 text-xs md:flex-row md:items-center md:justify-between">
          <p>Disclaimer · Privacy Policy</p>
          <p>Copyright © Primland 2026</p>
          <p>Site by outpost</p>
        </div>
      </div>
    </footer>
  )
}