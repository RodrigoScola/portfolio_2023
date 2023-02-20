import Image, { StaticImageData } from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const TechnologiesTab = dynamic(() => import("../Technologies").then((r) => r.TechnologiesTab));
export const AboutMeSection = () => {
	return (
		<div className="flex flex-col gap-96">
			<section className="  pt-96 items-center text-2xl font-lato text-justify m-auto max-w-[1000px]">
				<p className="text-center text-6xl font-roboto_slab pb-12 ">Who am i?</p>
				<p>
					Im a 22-year old fullstack developer from brazil! After studying cinema for almost 9 years I
					decided to adventure the world of development a few years ago. Since then it has been a
					pleasure to study and work in this industry Since 2020 i have been always learning and looking
					to improve at my job. Such as the fullstack development and Data analytics career path at
					codecademy. I love to learn and discover new ways to develop cool things!
				</p>
			</section>
			<section className="flex items-center flex-col">
				<TechnologiesTab />
			</section>
			<section className="pb-96">
				<p className="text-center text-7xl font-roboto_slab">Interests</p>
				<div className=" text-justify w-[1000px] m-auto">
					<p className="text-2xl pt-4">
						Besides my passion for coding, I love to play video games, specifically RPGs and MMORPGs.
						I also love to travel, swim, and jog. I'm a Netflix and Hulu binger. I am a huge fan of
						Harry Potter. On Wednesdays, you can find me yelling at my TV when my favorite Survivor
						castaway gets voted off the island. My favorite foods are phở and sushi.
					</p>
				</div>
			</section>
		</div>
	);
};
