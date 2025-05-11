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

export default function ContactPage() {
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
      <section className="relative pt-40 pb-20 px-8 md:px-16 text-white overflow-hidden bg-[#1C336C]">
        <div className="max-w-7xl mx-auto">
          {/* Glass background for hero section */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#192652]/90 to-[#204692]/80 backdrop-blur-sm -z-10"></div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center mb-12">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-[#48bee3] via-white to-[#ca5d2b] bg-clip-text text-transparent leading-tight">
              Contact Us
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-[#eeb288] font-semibold max-w-3xl mx-auto">
              Reach out to us for more information or any queries—we're here to help!
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 mt-10">
            <motion.div 
              variants={fadeInUp}
              className="flex-1 relative">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#48bee3]/20 to-[#ca5d2b]/20 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#ca5d2b]/20 to-[#48bee3]/20 -z-10"></div>
                
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="flex flex-col gap-4 text-[#eef0f1] text-base mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#48bee3]/20 flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-200">Phone</div>
                      <div>+91-7483276508</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ca5d2b]/20 flex items-center justify-center">
                      <span className="text-white">✉️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-200">Email</div>
                      <div>info@experimindlabs.edu@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#204692]/20 flex items-center justify-center">
                      <span className="text-white">🏢</span>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-200">Office</div>
                      <div>2nd Floor Atal Block NMAMIT, Nitte, Karkala, Udupi - 574110</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full rounded-2xl shadow overflow-hidden mt-6 border border-white/10">
                  <Image src="https://ext.same-assets.com/3073694617/232056345.jpeg" alt="Map placeholder" width={500} height={200} className="object-cover w-full h-48"/>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex-1 relative">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#48bee3]/10 to-[#ca5d2b]/10 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#ca5d2b]/10 to-[#48bee3]/10 -z-10"></div>
          
                <motion.form initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="w-full">
                  <h2 className="text-2xl font-bold mb-4 text-[#071834]">Contact Form</h2>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">First Name<span className="text-red-500">*</span></label>
                      <input type="text" placeholder="First name here" className="rounded-md p-2 border text-base"/>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Last Name<span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Last name here" className="rounded-md p-2 border text-base"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Email Address<span className="text-red-500">*</span></label>
                      <input type="email" placeholder="Add email" className="rounded-md p-2 border text-base"/>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Subject<span className="text-red-500">*</span></label>
                      <input type="text" placeholder="How can we help you?" className="rounded-md p-2 border text-base"/>
                    </div>
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="mb-1 font-medium">Comments / Questions<span className="text-red-500">*</span></label>
                    <textarea placeholder="Comments" className="rounded-md p-2 border text-base min-h-[90px]"/>
                  </div>
                  <button type="submit" className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg shadow transition">Send Message</button>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION - Enhanced with glass morphism */}
      <section className="w-full py-20 px-8 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] to-[#e8f0f9] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#204692] inline-block relative">
              Contact Information
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center text-center">
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
              <div className="text-xl font-semibold text-[#2aa0ca] mb-3">Company Mail</div>
              <div className="text-base text-[#204692]">info@</div>
              <div className="text-base text-[#204692]">experimindlabs.edu@gmail.com</div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
              <div className="text-xl font-semibold text-[#2aa0ca] mb-3">Office Phone Number</div>
              <div className="text-base text-[#204692]">+91 7483276508</div>
              <div className="text-base text-[#204692]">+91 8277748680</div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
              <div className="text-xl font-semibold text-[#2aa0ca] mb-3">Office Location</div>
              <div className="text-base text-[#204692]">2nd Floor Atal Block NMAMIT,</div>
              <div className="text-base text-[#204692]">Karkala, Udupi - 574110</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
