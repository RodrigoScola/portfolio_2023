import { GlobalContext, GlobalContextType } from "@/Context/GlobalProvider";
import { AiFillMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import dynamic from "next/dynamic";

import { ImageChanger } from "../components/ImageChanger";
import { AboutMeSection } from "../components/Contact/AboutMeSection";
import { LightenDarkenColor } from "@/utils";
const ContactSection = dynamic(() => import("../components/Contact/ContactSection").then((r) => r.ContactSection));
const ProjectsSection = dynamic(() => import("../components/Contact/ProjectsSection").then((r) => r.ProjectsSection));

const RenderTitleItem = ({ children }: { children: JSX }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 0.5 }}
			animate={{ opacity: 1, x: 10 }}
			transition={{ duration: 0.2, delay: 0.15 }}
		>
			{children}

			<motion.div
				initial={{ scaleX: 0, x: -309, opacity: 0 }}
				animate={{
					opacity: [0, 0.2, 1],
					scaleX: 1,
					x: 0,
				}}
				transition={{
					duration: 0.4,
				}}
				className=" bg-red-500 h-1"
			></motion.div>
		</motion.div>
	);
};

export default function Home() {
	const gcon = useContext(GlobalContext) as GlobalContextType;

	return (
		<>
			<motion.div
				animate={{
					opacity: [0, 0.2, 1],
					background: `linear-gradient( ${gcon.colors.backgroundColor}, ${LightenDarkenColor(
						gcon.colors.backgroundColor,
						-1
					)})`,
				}}
				transition={{ delay: 0.2 }}
			>
				<div className={`max-w-[1600px] min-h-screen m-auto pb-12 relative z-50 ${gcon.colors.textColor}`}>
					<section className="flex sm:flex-row flex-col items-center xl:pl-12 font-lato">
						<section className="h-72 w-96 md:h-96 md:w-[500px] xl:h-[450px]  xl:w-[650px]">
							<ImageChanger />
						</section>
						<section>
							{gcon.step == 0 && (
								<RenderTitleItem>
									<p className="xl:text-6xl">Hello there</p>
									<p className="xl:text-6xl">
										My name is <span className="text-yellow-400">Rodrigo</span>
									</p>
								</RenderTitleItem>
							)}
							{gcon.step == 1 && (
								<RenderTitleItem>
									<p className="xl:text-6xl">Here's Some of My </p>
									<p className="text-6xl text-yellow-400">Work</p>
								</RenderTitleItem>
							)}
							{gcon.step == 2 && (
								<RenderTitleItem>
									<p className="xl:text-6xl">
										Lets <span className="text-yellow-400">Chat</span>!
									</p>
								</RenderTitleItem>
							)}
						</section>
					</section>

					<section className="text-justify m-auto z-40  w-full max-w-[1500px]">
						{gcon.step == 0 && <AboutMeSection />}
						{gcon.step == 1 && <ProjectsSection />}
						{gcon.step == 2 && <ContactSection />}
					</section>
				</div>
			</motion.div>
			<div id="footer" className="flex flex-col bg-black  z-50 text-white items-center justify-center">
				<div className="py-6">
					<p className="font-lato text-xl">Dont be a stranger</p>
				</div>
				<ul className="flex justify-around gap-6">
					<li className="w-24 h-24 flex flex-col justify-center">
						<a href="https://www.linkedin.com/in/rodrigo-scola-2517521b6/" target={"_blank"}>
							<FaLinkedin size={40} />
							<p>linkedin</p>
						</a>
					</li>
					<li className="w-24 h-24 flex flex-col justify-center">
						<a href="https://www.linkedin.com/in/rodrigo-scola-2517521b6/" target={"_blank"}>
							<AiFillGithub size={40} />
							<p>Github</p>
						</a>
					</li>
					<li className="w-24 h-24 flex flex-col justify-center">
						<AiFillMail size={40} />
						<p>Email</p>
					</li>
				</ul>
			</div>
		</>
	);
}
