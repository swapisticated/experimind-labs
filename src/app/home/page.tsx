"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
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

      {/* NAVBAR - Glass morphism effect with more spacious layout */}


      {/* HERO SECTION - Enhanced with glass morphism and more spacious layout */}
      <section className="relative pt-40 pb-32 px-8 md:px-16 text-white overflow-hidden bg-[#1C336C]">
        <div className="max-w-7xl mx-auto">
          {/* Glass background for hero section */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#192652]/90 to-[#204692]/80 backdrop-blur-sm -z-10"></div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            
            <motion.div 
              variants={fadeInUp} 
              className="flex-1 relative z-10 flex flex-col justify-center items-start space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#48bee3] via-white to-[#ca5d2b] bg-clip-text text-transparent leading-tight">
                Together Let Us Make Learning Fun And Experiential
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl sm:text-2xl text-[#eeb288] font-semibold max-w-xl">
                Innovating Education for a Brighter Future
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-6 mt-2">
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#006eaf" }}
                  whileTap={{ scale: 0.98 }}
                  href="/about" 
                  className="px-8 py-3 bg-[#48bee3]/90 backdrop-blur-sm text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border border-white/10">
                  Learn About Us
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#9e3805" }}
                  whileTap={{ scale: 0.98 }}
                  href="/products" 
                  className="px-8 py-3 bg-[#ca5d2b]/90 backdrop-blur-sm text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border border-white/10">
                  Our Products
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex-1 flex flex-col items-center justify-center mt-10 md:mt-0">
              {clientReady && (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Decorative elements around the image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#48bee3]/20 to-[#ca5d2b]/20 rounded-2xl blur-xl -z-10"></div>
                  
                  <motion.img
                    src="https://ext.same-assets.com/1183026570/558331568.jpeg"
                    width={500} height={400}
                    className="rounded-2xl shadow-2xl object-cover w-full h-auto max-w-[500px] border border-white/20"
                    initial={{ scale: 0.9, rotateY: 15, opacity: 0 }}
                    animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
                    alt="Hero banner learning"
                  />
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-16 h-16 bg-[#48bee3]/30 backdrop-blur-md rounded-full border border-white/20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.div 
                    className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#ca5d2b]/30 backdrop-blur-md rounded-full border border-white/20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LEARN, INNOVATE, EXPLORE SECTION */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[#1e324f] mb-4">
              Our Approach to Learning
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we transform education through our three core principles
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 w-full">
            {[
              {title: "Learn", color: "from-[#394585]/40 to-[#262f49]/60", icon: "📚", desc: "Engaging tools for discovery every day."},
              {title: "Innovate", color: "from-[#ca5d2b]/40 to-[#204692]/50", icon: "💡", desc: "Creativity & design thinking brought to life."},
              {title: "Explore", color: "from-[#1c9fd0]/40 to-[#204692]/50", icon: "🌍", desc: "Adventure in practical, fun learning."}
            ].map((card, index) => (
              <motion.div 
                key={card.title} 
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className={`rounded-2xl backdrop-blur-md bg-gradient-to-b ${card.color} p-10 flex flex-col items-center border border-white/10 shadow-xl`}>
                <motion.span 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
                  className="text-5xl mb-6">
                  {card.icon}
                </motion.span>
                <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-base text-white/90 text-center">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: WHO ARE WE - Full width section */}
      <section className="py-20 px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative">
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row gap-10 justify-between relative overflow-hidden border border-white/20">
              <div className="relative z-10 md:w-1/2">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-5xl font-bold mb-8 text-[#1e324f]">
                  Who are we?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl">
                  Welcome to Experimind Labs, where innovation meets education. We advance experiential learning with research, innovative solutions, and impactful programs. We're passionate about improving educational systems worldwide.
                </motion.p>
                <motion.a 
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  href="/about" 
                  className="text-[#ca5d2b] font-semibold text-lg group flex items-center gap-2 transition-all duration-300">
                  Meet Our Team
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                </motion.a>
              </div>
              
              <div className="relative md:w-1/3 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-full overflow-hidden aspect-square w-full max-w-[300px] border border-white/20 shadow-xl">
                  <img 
                    src="https://ext.same-assets.com/1183026570/558331568.jpeg" 
                    alt="Experimind Labs Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#204692]/40 to-transparent"></div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-[#204692]/30 to-[#ca5d2b]/30 -z-10"></div>
              <div className="absolute left-1/3 top-1/4 w-40 h-40 rounded-full blur-2xl bg-[#48bee3]/20 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* SECTION 2: OUR PRODUCTS - Full width section */}
      <section className="py-20 px-8 w-full bg-gradient-to-br from-[#f0f4f8] to-[#e8f0f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative">
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col relative overflow-hidden border border-white/10">
              <div className="relative z-10 mb-10">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-5xl font-bold mb-8 text-[#204692] flex items-center gap-3">
                  Our Products
                  <motion.span 
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="text-2xl">
                    🛒
                  </motion.span>
                </motion.h2>
              </div>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transition-all duration-300">
                  <div className="relative mb-4 w-full h-32 overflow-hidden rounded-xl">
                    <img 
                      src="https://ext.same-assets.com/4131145615/3481281896.jpeg" 
                      alt="Shiksha Robot" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="font-bold text-[#1e324f] text-lg mb-2">Shiksha Robot</div>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/products" 
                    className="mt-2 px-4 py-1.5 bg-[#48bee3]/80 text-white rounded-full text-sm hover:bg-[#48bee3] transition-colors duration-300">
                    See More
                  </motion.a>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transition-all duration-300">
                  <div className="relative mb-4 w-full h-32 overflow-hidden rounded-xl">
                    <img 
                      src="https://ext.same-assets.com/4131145615/1705972427.jpeg" 
                      alt="Geomagic Kit" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="font-bold text-[#204692] text-lg mb-2">Geomagic Kit</div>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/products" 
                    className="mt-2 px-4 py-1.5 bg-[#ca5d2b]/80 text-white rounded-full text-sm hover:bg-[#ca5d2b] transition-colors duration-300">
                    See More
                  </motion.a>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transition-all duration-300">
                  <div className="relative mb-4 w-full h-32 overflow-hidden rounded-xl">
                    <img 
                      src="https://ext.same-assets.com/4131145615/3481281896.jpeg" 
                      alt="Learning Kit" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="font-bold text-[#1e324f] text-lg mb-2">Learning Kit</div>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/products" 
                    className="mt-2 px-4 py-1.5 bg-[#48bee3]/80 text-white rounded-full text-sm hover:bg-[#48bee3] transition-colors duration-300">
                    See More
                  </motion.a>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transition-all duration-300">
                  <div className="relative mb-4 w-full h-32 overflow-hidden rounded-xl">
                    <img 
                      src="https://ext.same-assets.com/4131145615/1705972427.jpeg" 
                      alt="STEM Kit" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="font-bold text-[#204692] text-lg mb-2">STEM Kit</div>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/products" 
                    className="mt-2 px-4 py-1.5 bg-[#ca5d2b]/80 text-white rounded-full text-sm hover:bg-[#ca5d2b] transition-colors duration-300">
                    See More
                  </motion.a>
                </motion.div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute left-0 top-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#204692]/20 to-[#ca5d2b]/20 -z-10"></div>
              <div className="absolute right-1/4 bottom-1/4 w-24 h-24 rounded-full blur-2xl bg-[#48bee3]/15 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: OUR PARTNERS - Full width section */}
      <section className="py-20 px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative">
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col relative overflow-hidden border border-white/10">
              <div className="relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute h-1 bg-gradient-to-r from-[#48bee3] to-transparent top-0 left-0"
                />
                
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-5xl font-bold mb-8 text-[#204692] uppercase tracking-tight">
                  Our Partners
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl">
                  We collaborate with leading educational institutions and organizations to bring innovative learning solutions to students worldwide.
                </motion.p>
                
                <motion.div 
                  variants={staggerContainer}
                  className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
                  {[
                    "https://ext.same-assets.com/1183026570/1037537537.png",
                    "https://ext.same-assets.com/1183026570/503351566.png",
                    "https://ext.same-assets.com/1183026570/933118849.png",
                    "https://ext.same-assets.com/1183026570/3916296784.png",
                    "https://ext.same-assets.com/1183026570/2163568430.png"
                  ].map((src, i) => (
                    <motion.div
                      key={src}
                      variants={fadeInUp}
                      className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#48bee3]/10 to-[#ca5d2b]/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.img
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        src={src}
                        width={150}
                        height={60}
                        className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/30 transition-all duration-300"
                        alt="partner-logo"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-[#204692]/30 to-[#ca5d2b]/30 -z-10"></div>
              <div className="absolute left-1/2 top-1/4 w-40 h-40 rounded-full blur-2xl bg-[#48bee3]/20 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* SECTION 4: OUR IMPACT - Full width section */}
      <section className="py-20 px-8 w-full bg-gradient-to-br from-[#f0f4f8] to-[#e8f0f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative">
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row gap-10 justify-between relative overflow-hidden border border-white/20">
              <div className="relative z-10 md:w-1/2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute h-1 bg-gradient-to-r from-[#ca5d2b] to-transparent top-0 left-0"
                />
                
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-5xl font-bold mb-8 text-[#192652] uppercase tracking-tight">
                  Our Impact
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl">
                  We're proud of the positive change we've brought to education through our innovative products and programs.
                </motion.p>
              </div>
              
              <div className="relative md:w-1/2">
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-2 gap-x-8 gap-y-8">
                  {[
                    { number: "10,000+", label: "Students Reached", color: "from-[#48bee3]/20 to-[#204692]/10" },
                    { number: "25+", label: "Schools Reached", color: "from-[#ca5d2b]/20 to-[#204692]/10" },
                    { number: "200+", label: "Workshops Conducted", color: "from-[#204692]/20 to-[#48bee3]/10" },
                    { number: "1,000+", label: "Awards Won", color: "from-[#ca5d2b]/20 to-[#48bee3]/10" }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label} 
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                      className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg text-center flex flex-col items-center">
                        <motion.span 
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="font-extrabold text-4xl bg-gradient-to-r from-[#204692] to-[#48bee3] bg-clip-text text-transparent mb-2">
                          {item.number}
                        </motion.span>
                        <span className="text-sm font-medium text-[#ca5d2b] mt-1">{item.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-[#48bee3]/10 to-[#ca5d2b]/10 -z-10"></div>
              <div className="absolute left-1/3 top-1/4 w-40 h-40 rounded-full blur-2xl bg-[#ca5d2b]/20 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US - Enhanced with glass morphism */}
      <section className="w-full py-28 px-8 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#192652]/5 to-[#204692]/10 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#204692] inline-block relative">
              Why Choose Us
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute h-1 bg-gradient-to-r from-[#48bee3] via-[#ca5d2b]/50 to-transparent bottom-0 left-0"
              />
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-10 text-[#204692]">
              {[
                {
                  title: "Expertise and Experience",
                  description: "Deep experience developing engaging and impactful learning methodologies for students and teachers alike.",
                  color: "bg-[#ca5d2b]",
                  icon: "🧠"
                },
                {
                  title: "Quality and Innovation",
                  description: "Relentless focus on quality and testing brings innovative, effective products to market.",
                  color: "bg-[#48bee3]",
                  icon: "✨"
                },
                {
                  title: "Tailored Approach",
                  description: "Personalized product development, adapting to each learner's and educator's needs.",
                  color: "bg-[#204692]",
                  icon: "🎯"
                },
                {
                  title: "Continuous Improvement",
                  description: "Rapidly adapts to new pedagogical strategies and technologies to stay ahead in education.",
                  color: "bg-[#ca5d2b]",
                  icon: "📈"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 group">
                  <div className="relative">
                    <div className="absolute inset-0 blur-xl bg-gradient-to-br from-[#48bee3]/30 to-[#ca5d2b]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`flex items-center justify-center w-14 h-14 ${item.color}/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 text-2xl`}>
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
                      >
                        {item.icon}
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[#204692]">{item.title}</h3>
                    <p className="text-base text-[#204692]/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative">
              {/* Glass card containing the image */}
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/20 overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#48bee3]/20 to-[#ca5d2b]/20 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#ca5d2b]/20 to-[#48bee3]/20 -z-10"></div>
                
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://ext.same-assets.com/1183026570/558331568.jpeg" 
                  alt="innovation classroom" 
                  className="rounded-2xl w-full h-auto object-cover shadow-lg border border-white/10" 
                />
                
                {/* Floating decorative elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute top-10 -right-5 w-16 h-16 bg-[#48bee3]/20 backdrop-blur-md rounded-full border border-white/20"
                />
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute -bottom-5 left-10 w-20 h-20 bg-[#ca5d2b]/20 backdrop-blur-md rounded-full border border-white/20"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#071834] text-[#eef0f1] pt-9 pb-3 px-2">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 grid-cols-2 gap-7 pb-4">
          <div>
            <div className="text-lg font-bold mb-1">Experimind Labs</div>
            <div className="text-xs text-gray-400 mb-2">Call us anytime for support :7483276508</div>
            <div className="text-xs text-gray-400 mb-2">2nd Floor Atal Block NMAMIT, Nitte, Karkala, Udupi - 574110</div>
            <div className="flex gap-3 mt-2 text-xl">
              <a href="https://youtube.com/@ExperimindLABS?si=AqqukKAItAZIpqsm" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://instagram.com/experimindlabs?igshid=OGQ5ZDc2ODk2ZA==" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/experimind-labs-40952a281" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://x.com/experimindlabs?t=6VJf5vLWlKnXn51jIW5nFA&s=08" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.facebook.com/Experimindlabs?mibextid=9R9pXO" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="mailto:experimindlabs.edu@gmail.com" aria-label="Mail"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
          <div></div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Account</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">My account</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
              <li><a href="#" className="hover:underline">Checkout</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#22344f] text-xs text-gray-400 py-2 flex flex-row justify-between items-center mt-4">
          <div>&copy; 2025 EXPERIMIND LABS</div>
          <div><a href="#" className="hover:underline">Privacy Policy</a></div>
        </div>
      </footer>
    </main>
  );
}
