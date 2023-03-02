import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const TechnologiesTab = dynamic(() => import("../Technologies").then((r) => r.TechnologiesTab));
export const AboutMeSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.7 }}
			className="flex flex-col gap-32 md:gap-64 "
		>
			<section className="pt-24 sm:pt-24 md:pt-24 lg:pt-30 xl:pt-32 items-center text-xl font-lato text-justify m-auto max-w-[90%]">
				<p className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-roboto_slab pb-12">
					Who am i?
				</p>
				<p>
					Im a 22-year old fullstack developer from brazil! After studying cinema for almost 9 years I
					decided to adventure the world of development a few years ago. Since then it has been a
					pleasure to study and work in this industry Since 2020 i have been always learning and looking
					to improve at my job. Such as the fullstack development and Data analytics career path at
					codecademy. I love to learn and discover new ways to develop cool things!
				</p>
			</section>
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="flex items-center flex-col"
			>
				<TechnologiesTab />
			</motion.section>
			<motion.section
				initial={{ opacity: 0, x: 100 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.7 }}
				className="pb-48"
			>
				<p className="text-center pt-24 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-roboto_slab ">
					Interests
				</p>
				<div className=" text-justify max-w-[90%] m-auto">
					<p className="text-xl font-lato pt-4">
						Other than living and breathing coding, I love to play video games, specifically Fps and
						MMORPGs. Currently (trying to) live a healthier lifestyle by exercising and (trying to) to
						eat healthier. I really like to practice new things and grow as a person, from learning a
						new language to training to type faster.
					</p>
				</div>
			</motion.section>
		</motion.div>
	);
};
