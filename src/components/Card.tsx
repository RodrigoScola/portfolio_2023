import { motion } from "framer-motion";
import { React } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type CardType = {
	title: string;
	bodyText: string;
	image?: StaticImageData;
	liveUrl?: string;
	codeUrl?: string;
	cardOrientation: "left" | "right";
};

export const Card = ({ liveUrl, codeUrl, title, bodyText, image, cardOrientation = "left", ...props }: CardType) => {
	const oposite: "left" | "right" = cardOrientation == "left" ? "right" : "left";
	return (
		<motion.div className="h-[50vh] ">
			{/* hover effect slate-200 */}
			<div className="mt-4 bg-gradient-to-b from-white to-slate-100  grid grid-cols-3 gr p-10 rounded-3xl px-28 text-black">
				{cardOrientation == "left" && (
					<div className="h-64 w-80 bg-white-500">
						<Image src={image} alt={`image for ${title}`} />
					</div>
				)}
				<div className="flex flex-col pl-5 place-content-between col-span-2">
					<div
						className="border-b-orange-900 border-b-2 border-opacity-20 pb-2 w-fit pr-4
					"
					>
						<p className={`text-7xl text-${oposite} text-start font-sans font-medium`}>{title}</p>
					</div>
					<div className={`text-${oposite} py-5 text-xl`}>{bodyText}</div>
					<div className="flex gap-3 justify-center text-2xl mb-3">
						{liveUrl && (
							<a
								target={"_blank"}
								href={liveUrl}
								className="border-4 h-fit p-2 px-4 m-5 text-white font-semibold  border-spacing-2 border-primary-lighter bg-black rounded-full card-animation"
							>
								See it Live
							</a>
						)}
						{codeUrl && (
							<a className="border-4 h-fit p-2 m-5 px-4 text-white font-semibold  border-spacing-2 border-primary-lighter bg-black rounded-full card-animation">
								See The Code
							</a>
						)}
					</div>
				</div>
				{cardOrientation == "right" && (
					<div className="h-64 w-80 ">
						<Image src={image} alt={`image for ${title}`} />
					</div>
				)}
			</div>
		</motion.div>
	);
};
