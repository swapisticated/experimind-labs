"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Animation variants for consistent use across components
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ProductsPage() {
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => { setClientReady(true); }, []);
  
  return (
    <main className="relative w-full min-h-screen font-sans bg-white">
      {/* BACKGROUND SHAPES - Enhanced with more subtle gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute left-0 -top-20 w-2/3 h-[500px] rounded-full bg-gradient-to-br from-[#204692]/20 via-[#48bee3]/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute right-0 top-60 w-1/3 h-[400px] rounded-full bg-gradient-to-l from-[#ca5d2b]/25 via-white/0 to-transparent blur-3xl opacity-50" />
        <div className="absolute left-40 bottom-20 w-1/3 h-[300px] rounded-full bg-gradient-to-r from-[#ca5d2b]/20 via-[#48bee3]/10 to-transparent blur-3xl opacity-40" />
        <div className="absolute right-1/4 top-1/3 w-1/4 h-[250px] rounded-full bg-gradient-to-tl from-[#204692]/15 via-[#48bee3]/5 to-transparent blur-3xl opacity-30" />
      </div>
      {/* HERO SECTION - Enhanced with glass morphism */}
      <section className="relative pt-40 pb-32 px-8 md:px-16 text-white overflow-hidden bg-[#1C336C]">
        <div className="max-w-7xl mx-auto">
          {/* Glass background for hero section */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#192652]/90 to-[#204692]/80 backdrop-blur-sm -z-10"></div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-[#48bee3] via-white to-[#ca5d2b] bg-clip-text text-transparent leading-tight">
              Our Products
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-[#eeb288] font-semibold max-w-3xl mx-auto mb-8">
              Transforming classrooms with innovative learning kits and robots.
            </motion.p>
            
            {clientReady && (
              <motion.div
                variants={fadeInUp}
                className="relative mt-8 w-full max-w-4xl mx-auto grid grid-cols-2 gap-8"
              >
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#48bee3]/20 to-[#ca5d2b]/20 rounded-2xl blur-xl -z-10"></div>
                
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 overflow-hidden"
                >
                  <Image 
                    src="https://ext.same-assets.com/4131145615/3481281896.jpeg" 
                    alt="Shiksha Robot" 
                    width={400} height={250} 
                    className="rounded-xl w-full h-auto object-cover shadow-lg border border-white/10" 
                  />
                  <h3 className="mt-4 text-xl font-bold text-white">Shiksha Robot</h3>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 overflow-hidden"
                >
                  <Image 
                    src="https://ext.same-assets.com/4131145615/1705972427.jpeg" 
                    alt="Geomagic Kit" 
                    width={400} height={250} 
                    className="rounded-xl w-full h-auto object-cover shadow-lg border border-white/10" 
                  />
                  <h3 className="mt-4 text-xl font-bold text-white">Geomagic Kit</h3>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS DETAILS - Enhanced with glass morphism */}
      <section className="w-full py-28 px-8 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] to-[#e8f0f9] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#204692] inline-block relative">
              Our Educational Solutions
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute h-1 bg-gradient-to-r from-[#48bee3] via-[#ca5d2b]/50 to-transparent bottom-0 left-0"
              />
            </h2>
          </motion.div>
          
          {/* SHIKSHA ROBOT */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
            
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2 relative">
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20 overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#48bee3]/20 to-[#ca5d2b]/20 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#ca5d2b]/20 to-[#48bee3]/20 -z-10"></div>
                
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://ext.same-assets.com/4131145615/3481281896.jpeg" 
                  alt="Shiksha Robot" 
                  width={500} height={300}
                  className="rounded-2xl w-full h-auto object-cover shadow-lg border border-white/10" 
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-8 text-[#48bee3]">
                Shiksha Robot
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 mb-10 leading-relaxed">
                Shiksha is an advanced educational robot transforming classrooms into engaging spaces using cutting-edge technology. It emphasizes interactive and playful learning, aiming to ignite children's enjoyment and extend education beyond traditional methods, fostering a dynamic and captivating approach to learning.
              </motion.p>
              <motion.a 
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                href="#" 
                className="px-8 py-3 bg-[#48bee3]/90 backdrop-blur-sm text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border border-white/10 inline-flex items-center gap-2">
                Learn More
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* GEOMAGIC KIT */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-16">
            
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2 relative">
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20 overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#48bee3]/20 to-[#ca5d2b]/20 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#ca5d2b]/20 to-[#48bee3]/20 -z-10"></div>
                
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://ext.same-assets.com/4131145615/1705972427.jpeg" 
                  alt="Geomagic Kit" 
                  width={500} height={300}
                  className="rounded-2xl w-full h-auto object-cover shadow-lg border border-white/10" 
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-8 text-[#ca5d2b]">
                Geomagic Kit
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 mb-10 leading-relaxed">
                Geomagic transforms math education through a fusion of physical tools and interactive digital elements for grades 1 to 10, amplifying engagement. It features precise modular measurement scales allowing learners to construct practical structures and experience hands-on interactive learning.
              </motion.p>
              <motion.a 
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                href="#" 
                className="px-8 py-3 bg-[#ca5d2b]/90 backdrop-blur-sm text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border border-white/10 inline-flex items-center gap-2">
                Learn More
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
