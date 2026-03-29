"use client"
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionWrapper({
  children,
  bg = 'white',
}: {
  children: React.ReactNode
  bg?: 'white' | 'dark' | 'light-gray' | 'emerald-gradient'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const bgClasses = {
    white: 'bg-white dark:bg-slate-950',
    dark: 'bg-slate-950 dark:bg-slate-900',
    'light-gray': 'bg-gray-50 dark:bg-slate-900/50',
    'emerald-gradient': 'bg-gradient-to-r from-emerald-600 to-emerald-600',
  }

  return (
    <div ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 ${bgClasses[bg]}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-350 mx-auto"
      >
        {children}
      </motion.div>
    </div>
  )
}
