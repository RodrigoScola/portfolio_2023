import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
export const Bublle = (props: any) => {
	return (
		<motion.div
			animate={{
				scale: [1, 1.5, 1],
			}}
			transition={{
				ease: "backIn",
				duration: 15,
				repeat: Infinity,
			}}
			{...props}
			className={`w-96 h-96 overflow-hidden bg-blue-300 opacity-50 -z-10 blur-[200px] rounded-full absolute  ${props.className}`}
		></motion.div>
	);
};
