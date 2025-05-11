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

export default function AboutPage() {
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
              About Experimind Labs
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-[#eeb288] font-semibold max-w-3xl mx-auto mb-8">
              Empowering education through innovative tech solutions that inspire and engage learners globally.
            </motion.p>
            
            {clientReady && (
              <motion.div
                variants={fadeInUp}
                className="relative mt-8 w-full max-w-4xl mx-auto"
              >
                {/* Decorative elements around the image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#48bee3]/20 to-[#ca5d2b]/20 rounded-2xl blur-xl -z-10"></div>
                
                <motion.img
                  src="https://ext.same-assets.com/815987621/1974121989.jpeg"
                  width={800} height={400}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto border border-white/20"
                  initial={{ scale: 0.9, rotateY: 15, opacity: 0 }}
                  animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
                  alt="About Experimind Labs"
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
        </div>
      </section>

      {/* WHO ARE WE - Enhanced with glass morphism */}
      <section className="py-28 px-8 max-w-7xl mx-auto">
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
                src="https://ext.same-assets.com/815987621/1974121989.jpeg" 
                alt="Our Team Meeting" 
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
              className="text-3xl sm:text-4xl font-bold mb-8 text-[#1e324f]">
              Who are we?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 mb-10 leading-relaxed">
              We are an organization dedicated to conducting research in the field of education. We focus on curriculum development, teaching aid design, student learning, methods, teacher training, innovation and more. Our aim is to improve education by developing impactful, modern solutions in partnership with learners and educators worldwide.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUES CARDS - Enhanced with glass morphism */}
      <section className="w-full py-20 px-8 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] to-[#e8f0f9] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#204692] inline-block relative">
              Our Core Values
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
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 w-full">
            {[
              {title: "Our Vision", color: "from-[#394585]/40 to-[#262f49]/60", desc: "Forge a society where science is accessible, inclusive, and an essential part of daily life."},
              {title: "Our Mission", color: "from-[#ca5d2b]/40 to-[#204692]/50", desc: "Equity, connectivity, creativity, sustainability, inclusivity: we embody these values to empower education and create opportunity."},
              {title: "Our Value", color: "from-[#1c9fd0]/40 to-[#204692]/50", desc: "Fostering innovation, demystifying science and math fears, and sharing knowledge with all."}
            ].map((card, index) => (
              <motion.div 
                key={card.title} 
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className={`rounded-2xl backdrop-blur-md bg-gradient-to-b ${card.color} p-10 flex flex-col items-center border border-white/20 shadow-xl relative overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[#204692]/30 to-[#ca5d2b]/30 -z-10"></div>
                <div className="absolute left-1/2 top-1/4 w-20 h-20 rounded-full blur-2xl bg-[#48bee3]/20 -z-10"></div>
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
                  className="text-5xl mb-6 bg-white/20 backdrop-blur-sm p-4 rounded-full shadow-lg border border-white/30">
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-base text-white/90 text-center">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MEET THE TEAM - Enhanced with glass morphism */}
      <section className="py-28 px-8 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#204692] inline-block relative">
            Meet Our Team
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
          className="grid gap-10 md:grid-cols-3 grid-cols-2">
          {[
            { name: "Akshay Mashelkar", role: "Director", image: "https://ext.same-assets.com/815987621/336721882.jpeg" },
            { name: "Lata Mashelkar", role: "Director", image: "https://ext.same-assets.com/815987621/3203286971.png" },
            { name: "Adarsh Devadiga", role: "CTO", image: "https://ext.same-assets.com/815987621/4030263484.png" },
            { name: "Harish Bhat", role: "Intern", image: "https://ext.same-assets.com/815987621/628238613.png" },
            { name: "Subramanya Hegde", role: "Content Head", image: "https://ext.same-assets.com/815987621/2440400147.png" },
            { name: "Ganapati Hegde", role: "Mentor", image: "https://experimindlabs.com/wp-content/uploads/Ganapathi-Hegde.png" }
          ].map((member, index) => (
            <motion.div 
              key={member.name}
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center border border-white/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#204692]/5 to-[#48bee3]/5 -z-10"></div>
              <div className="absolute right-0 bottom-0 w-20 h-20 rounded-full blur-xl bg-gradient-to-br from-[#48bee3]/20 to-[#ca5d2b]/20 -z-10"></div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-[#204692]/20 to-[#48bee3]/20 p-1 mb-3 flex items-center justify-center overflow-hidden shadow-lg">
                <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover w-full h-full rounded-full"/>
              </motion.div>
              <h3 className="font-bold text-lg text-[#204692]">{member.name}</h3>
              <div className="text-sm mt-1 text-[#ca5d2b] font-medium">{member.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
