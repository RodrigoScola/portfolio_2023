import { useState, useEffect, ReactElement, ReactNode } from "react";
import { m, animate } from "framer-motion";
import { LazyAnimation } from "./LazyAnimation";

const propIn = {
	duration: 0.3,
	scale: 1,
	backgroundColor: "#95d5b2",
};

type PropType = typeof propIn;

const propOut: PropType = {
	duration: 0.2,
	scale: 1.1,
	backgroundColor: "#7cbf9b",
};

export const ContactCard = ({ children }: { children: JSX.Element | ReactElement | ReactNode }) => {
	const [{ backgroundColor, scale }, setProperties] = useState({
		backgroundColor: propIn.backgroundColor,
		scale: 1,
	});

	const handleAnimate = (type: keyof PropType, first: PropType = propIn, second: PropType = propOut) => {
		animate(first[type], second[type], {
			duration: first.duration,
			onUpdate: (latest) => setProperties((curr) => ({ ...curr, [type]: latest })),
		});
	};

	const [isHovering, setIsHovering] = useState(false);
	useEffect(() => {
		if (isHovering == true) {
			handleAnimate("backgroundColor");
			handleAnimate("scale");
		} else {
			handleAnimate("backgroundColor", propOut, propIn);
			handleAnimate("scale", propOut, propIn);
		}
	}, [isHovering]);

	return (
		<LazyAnimation>
			<m.div
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				style={{
					background: `linear-gradient(110deg,${propIn.backgroundColor},  ${backgroundColor})`,
					scale,
				}}
				className={"rounded-xl"}
			>
				{children}
			</m.div>
		</LazyAnimation>
	);
};
