import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealOnScrollProps {
	children: React.ReactNode;
	delay?: number;
	initialY?: number;
	duration?: number;
}

const RevealOnScroll = ({ children, delay = 0.2, initialY = 40, duration = 0.6 }: RevealOnScrollProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: initialY, scale: 0.9 }}
			animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
			transition={{ duration, delay, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
};

export default RevealOnScroll;
