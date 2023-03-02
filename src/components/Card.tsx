import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

type CardType = {
	title: string;
	bodyText: JSX.Element | string;
	image?: StaticImageData;
	year?: string | number;
	liveUrl?: string;
	codeUrl?: string;
	cardOrientation?: "left" | "right";
};

const ImageComponent = ({ image, title }: { image: StaticImageData; title: string }) => {
	return (
		<div className=" items-center  flex justify-center">
			<Image src={image} className={"max-w-[300px] min-w-[200px] w-[90%]"} alt={`image for ${title}`} />
		</div>
	);
};

export const Card = ({
	liveUrl,
	year,
	codeUrl,
	title,
	bodyText,
	image,
	cardOrientation = "left",
	...props
}: CardType) => {
	const oposite: "left" | "right" = cardOrientation == "left" ? "right" : "left";

	return (
		<div className="xl:max-w-[1000px] m-auto">
			{/* hover effect slate-200 */}
			<motion.div
				animate={{
					background: `linear-gradient(#ffffff, #ffffff, #ffffff)`,
				}}
				whileHover={{
					background: `linear-gradient(#ffffff,#ffffff, #f2f2f2`,
					scale: 1.03,
				}}
				transition={{
					duration: 0.2,
				}}
				className="mt-4  p bg-gradient-to-b p-5 flex flex-col sm:flex-row rounded-3xl  text-black"
			>
				{cardOrientation == "left" && typeof image !== "undefined" && (
					<ImageComponent image={image} title={title} />
				)}
				<div className="flex rounded-3xl order-1 sm:order-none   flex-col pl-5 place-content-between col-span-2">
					<motion.div
						initial={{ opacity: 0, x: oposite == "right" ? 50 : -50 }}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							duration: 1.5,
						}}
						className="sm:flex sm:items-center"
					>
						<div
							className="border-b-orange-900 pt-4 border-b-2 max-w-xl border-opacity-20 pb-2 w-fit pr-4
					"
						>
							<motion.p
								className={`text-4xl md:text-6xl xl:text-6xl text-${oposite} text-start font-sans font-medium`}
							>
								{title}
							</motion.p>
						</div>
						<motion.p
							initial={{ opacity: 0, x: oposite == "right" ? 50 : -50 }}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								duration: 1.5,
							}}
							className={`text-md text-gray-500 pt-3 md:text-6xl xl:text-6xl text-${oposite} text-start font-sans font-medium`}
						>
							{year}
						</motion.p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0.25 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
						className={`text-${oposite} max-w-xl py-5 text-lg md:text-xl`}
					>
						{bodyText}
					</motion.div>
					<div className="flex md:gap-12  justify-center text-xl lg:text-2xl mb-3">
						{liveUrl && (
							<a
								target={"_blank"}
								href={liveUrl}
								rel={"noreferrer"}
								className="border-4 min-w-fit  h-fit text-left p-2 m-1  text-white font-semibold  border-spacing-2 border-primary-lighter bg-black rounded-full card-animation hover:scale-105 transition-transform ease-in duration-75 hover:shadow-md"
							>
								See it Live
							</a>
						)}
						{codeUrl && (
							<a
								target={"_blank"}
								href={codeUrl}
								rel={"noreferrer"}
								className="border-4 min-w-fit  h-fit text-left p-2 m-1  text-white font-semibold  border-spacing-2 border-primary-lighter bg-black rounded-full card-animation hover:scale-105 transition-transform ease-in duration-75 hover:shadow-md"
							>
								See The Code
							</a>
						)}
					</div>
				</div>
				{cardOrientation == "right" && typeof image !== "undefined" && (
					<ImageComponent image={image} title={title} />
				)}
			</motion.div>
		</div>
	);
};
