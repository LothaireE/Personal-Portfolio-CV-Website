import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react";

const ScrollIndicator = ({
    textContent = "",
} : {
    textContent?: string
}) => {
    return (
        <div className="flex flex-col items-center gap-2 text-white/60">
            {textContent && (
                <span className="text-xs uppercase tracking-[0.3em]">
                {textContent}
                </span>
            )}
            <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
            <ArrowDown className="h-4 w-4" />
            </motion.div>
        </div>
    );
};

export default ScrollIndicator;