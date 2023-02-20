import { StaticImageData } from "next/image";
import Photo from "../images/profile.jpg";
import Projects from "../images/all_2023.png";
import { useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GlobalContext, GlobalContextType } from "@/Context/GlobalProvider";
import { LightenDarkenColor } from "@/utils";

export const ImageChanger = () => {
	const [page, setPage] = useState(0);
	const { backgroundTheme, changeImage, changeStep, colors, prevColor, sections, step } = useContext(
		GlobalContext
	) as GlobalContextType;
	const [c, setC] = useState(colors.previousBackgroundColor);

	useEffect(() => {
		setTimeout(() => {
			setC(colors.previousBackgroundColor);
		}, 700);
		setC(colors.backgroundColor);
	}, [colors.previousBackgroundColor]);

	const handlePage = (count: number) => {
		setPage(page + count);
		changeStep(count);
	};
	const rotation = page * 120;
	const getRotations = (num: number) => {
		const nstep = step;
		return -(nstep - num);
	};
	const getPhoto = useMemo(() => {
		if (step == 0) return Photo.src;
		if (step == 1) return Projects.src;
		return "#";
	}, [step]);
	const getRandomCount = () => {
		const numbers = new Array(Math.floor(Math.random() * 10)).fill(1).reduce((curr, num) => {
			num = Math.random() < 0.2 == true ? -(Math.random() * num) : Math.random() * num;

			curr.push(Math.round(num) / 2);
			return curr;
		}, []);
		console.log(numbers);

		return numbers;
	};
	const [{ x, y }, setPos] = useState<{ x: number[]; y: number[] }>({ x: [0, 0], y: [0, 0] });

	useEffect(() => {
		setPos({ x: [0, ...getRandomCount(), 0], y: [0, ...getRandomCount(), 0] });
	}, []);

	return (
		<>
			{c !== colors.previousBackgroundColor && colors.backgroundColor !== "#ffffff" ? (
				<motion.div
					// layoutId="transition"
					style={{
						backgroundColor: colors.backgroundColor,
					}}
					initial="hide"
					animate={{
						scale: 25,
						zIndex: -10,
						overflow: "hidden",
						background: `linear-gradient(${colors.backgroundColor}, ${LightenDarkenColor(
							colors.backgroundColor,
							-3
						)})`,
						opacity: 1,
						// transitionEnd: { opacity: 0, display: "none" },
					}}
					// exit={{ opacity: 0, display: "none" }}
					transition={{ duration: 0.7, z: 0 }}
					className="h-96 w-96 absolute rounded-full top-24 left-12 -z-10"
				></motion.div>
			) : null}
			<div className="cursor-pointer z-40 font-bold relative top-0 left-24 font-lato">
				<motion.div
					animate={{ rotate: rotation }}
					className={`xl:h-96 xl:w-96  md:h-60 md:w-60 w-44 h-44 rounded-full relative top-12 -left-12 md:top-14 md:-left-10 text-2xl md:text-4xl xl:text-5xl`}
				>
					<motion.div
						onClick={() => handlePage(getRotations(0))}
						animate={{ rotate: -rotation }}
						id="card1"
						className=" top-20  left-40  md:top-30 md:left-52 xl:top-40  xl:left-80 relative w-fit "
					>
						<p className="text-5xl   drop-shadow-lg ">About Me</p>
					</motion.div>
					<motion.div
						onClick={() => handlePage(getRotations(1))}
						animate={{ rotate: -rotation }}
						id="card2"
						className=" -top-14 -left-4 md:-top-20  relative  w-fit"
					>
						<p className=" drop-shadow-lg">Projects</p>
					</motion.div>
					<motion.div
						onClick={() => handlePage(getRotations(2))}
						animate={{ rotate: -rotation }}
						id="card2"
						className="  top-24 -left-6 md:top-32 md:-left-10 xl:top-56 xl:-left-12 relative w-fit"
					>
						<p className=" drop-shadow-lg">Contact</p>
					</motion.div>
				</motion.div>
				<div id="controls" className="relative left-96 bottom-24">
					<div className="w-fit " onClick={() => handlePage(+1)} id="left">
						<div className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="64"
								height="64"
								fill="currentColor"
								className="bi bi-caret-up"
								viewBox="0 0 16 16"
							>
								<path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
							</svg>
						</div>
					</div>
					<div className=" w-fit" onClick={() => handlePage(-1)} id="right">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="64"
								height="64"
								fill="currentColor"
								className="bi bi-caret-down"
								viewBox="0 0 16 16"
							>
								<path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<motion.img
				className={`absolute h-48 w-48 top-10 left-32 md:left-12 md:top-12 md:w-64  md:h-64 -z-10 ${
					step == 0 ? "object-cover rounded-full" : "object-contain"
				}
				} xl:w-96 xl:h-96  xl:top-14 xl:left-24 drop-shadow-2xl`}
				key={"phto"}
				animate={{
					x,
					y,
				}}
				transition={{ duration: 3, repeat: Infinity }}
				src={getPhoto}
			/>
		</>
	);
};
