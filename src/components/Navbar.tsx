"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="fixed w-full mt-6 transform -translate-x-1/2 max-w-7xl flex items-center justify-between bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl h-20 px-8 z-50 shadow-lg">
    <Link href="/" className="flex items-center text-xl font-bold">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center">
        <Image src="https://ext.same-assets.com/1183026570/2991000823.png" alt="Experimind Logo" width={50} height={50} className="rounded-full mr-3" />
        <span className="text-[#48bee3] tracking-wider font-bold">EXPERIMIND LABS</span>
      </motion.div>
    </Link>
    <div className="hidden md:flex gap-10 text-base font-medium text-black">
      <Link href="/" className="relative px-2 py-1 text-black hover:text-[#48bee3] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#48bee3] after:transition-all hover:after:w-full">
        Home
      </Link>
      <Link href="/about" className="relative px-2 py-1 text-black hover:text-[#48bee3] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#48bee3] after:transition-all hover:after:w-full">
        About Us
      </Link>
      <Link href="/products" className="relative px-2 py-1 text-black hover:text-[#48bee3] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#48bee3] after:transition-all hover:after:w-full">
        Products
      </Link>
      <Link href="/contact" className="relative px-2 py-1 text-black hover:text-[#48bee3] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#48bee3] after:transition-all hover:after:w-full">
        Contact Us
      </Link>
    </div>
  </motion.nav>)
}

export default Navbar