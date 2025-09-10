'use client'
import React from "react"
import { motion } from "motion/react"




export default function Home() {
    return (
        <div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, x: 100 }} transition={{ duration: 2 }} className="w-200 h-20 bg-blue-500 rounded-full"></motion.div>
        </div>
    )
}