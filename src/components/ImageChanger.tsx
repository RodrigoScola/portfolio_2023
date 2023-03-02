import Photo from "../images/profile.jpg";
import Connect from "../images/all_connect.png";
import Projects from "../images/all_2023.png";
import { useContext, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { GlobalContext, GlobalContextType } from "@/Context/GlobalProvider";
import { LightenDarkenColor } from "@/utils";
import { LazyAnimation } from "./LazyAnimation";

const photos: string[] = [Photo.src, Projects.src, Connect.src];

export const ImageChanger = () => {
	const [page, setPage] = useState(0);
	const { changeStep, colors, step } = useContext(GlobalContext) as GlobalContextType;
	const [c, setC] = useState(colors.previousBackgroundColor);

	useEffect(() => {
		setTimeout(() => {
			setC(colors.previousBackgroundColor);
		}, 700);
		setC(colors.backgroundColor);
	}, [colors.previousBackgroundColor]);
	const rotation = useMemo(() => page * 120, [page]);

	const handlePage = useCallback(
		(count: number) => {
			setPage(page + count);
			changeStep(count);
		},
		[page, changeStep]
	);
	const getRotations = useCallback(
		(num: number) => {
			const nstep = step;
			return -(nstep - num);
		},
		[step]
	);

	useEffect(() => {
		setPage((curr) => curr + step);
	}, [step]);
	console.log(colors.backgroundColor);
	if (colors.backgroundColor == "#f2f2f2" || step == -1) return <div></div>;
	return (
		<>
			{c !== colors.previousBackgroundColor ? (
				<LazyAnimation>
					<m.div
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
						className="h-96 w-96 absolute rounded-full top-12 -left-2 -z-10"
					></m.div>
				</LazyAnimation>
			) : null}
			<div className="cursor-pointer noselect  z-40 font-bold absolute top-0 left-44 font-lato">
				<LazyAnimation>
					<m.div
						animate={{ rotate: rotation }}
						className={`xl:h-96 xl:w-96  md:h-60 md:w-60 w-44 h-44 rounded-full relative top-12 -left-24 md:top-14 md:-left-20 text-2xl md:text-4xl lg:-left-20 xl:text-5xl xl:-left-12 xl:top-16`}
					>
						<m.div
							onClick={() => handlePage(getRotations(0))}
							animate={{ rotate: -rotation }}
							id="card1"
							className=" top-20  left-40  md:top-30 md:left-52 xl:top-40  xl:left-80 relative w-fit "
						>
							<p className="   drop-shadow-lg ">About Me</p>
						</m.div>
						<m.div
							onClick={() => handlePage(getRotations(1))}
							animate={{ rotate: -rotation }}
							id="card2"
							className=" -top-14 -left-4 md:-top-20  relative  w-fit"
						>
							<p className=" drop-shadow-lg">Projects</p>
						</m.div>
						<m.div
							onClick={() => handlePage(getRotations(2))}
							animate={{ rotate: -rotation }}
							id="card2"
							className="  top-24 -left-6 md:top-32 md:-left-10 xl:top-56 xl:-left-12 relative w-fit"
						>
							<p className=" drop-shadow-lg">Contact</p>
						</m.div>
					</m.div>
				</LazyAnimation>
				<div id="controls" className="relative left-20 top-2 lg:left-40 xl:left-80 md:left-52  md:-top-12">
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
			{photos.map((src, index) => {
				if (step == index)
					return (
						<LazyAnimation>
							<AnimatePresence>
								<m.img
									className={`absolute h-48 w-48 top-10 left-12  md:left-12 md:top-12 md:w-64  md:h-64 -z-10 ${
										step == 0 ? "object-cover rounded-full" : "object-contain"
									}
				} xl:w-96 xl:h-96  xl:top-14 xl:left-24 drop-shadow-2xl`}
									key={index}
									src={src}
									initial={{
										scale: 0,
									}}
									transition={{ duration: 0.2 }}
									animate={{
										scale: 1,
									}}
									exit={{ opacity: 0, scale: 0 }}
								/>
							</AnimatePresence>
						</LazyAnimation>
					);
			})}
		</>
	);
};
