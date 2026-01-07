"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "~/components/Hero";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import EditorialPage from "~/components/EditorialPage";
import ResidencesPage from "~/components/ResidencesPage";
import EditorialQuoteSection from "~/components/EditorialQuoteSection";
import HeroTwo from "~/components/HeroTwo";
import MountainOwnershipSection from "~/components/MountainOwnershipSection";
import Footer from "~/components/Footer";
import { ArrowUp } from "lucide-react";

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  const { scrollYProgress, scrollY } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "0vh"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 200);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={scrollRef} className="relative">
      <Hero />

      <motion.div style={{ y }} className="relative z-20 bg-white">
        <EditorialPage />
      </motion.div>

      <HeroTwo />

      <motion.div style={{ y }} className="relative z-20 bg-white">
        <ResidencesPage />
      </motion.div>

      <motion.div className="relative z-20">
        <EditorialQuoteSection />
      </motion.div>

      <motion.div className="relative z-20">
        <MountainOwnershipSection />
      </motion.div>

      <motion.div className="relative z-20">
        <Footer />
      </motion.div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 group cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6f8267] bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:bg-[#6f8267] group-hover:shadow-xl">
              <ArrowUp className="h-5 w-5 text-[#6f8267] transition-colors duration-300 group-hover:text-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;