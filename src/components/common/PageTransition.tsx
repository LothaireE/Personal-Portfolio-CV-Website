import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

const PageTransition = ({
  children,
  className = "",
}: PageTransitionProps) => {
  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.main>
  )
}
export default PageTransition;
