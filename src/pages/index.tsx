import { GlobalContext, GlobalContextType } from "@/Context/GlobalProvider";
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { LightenDarkenColor } from "@/utils";
import Link from "next/link";

const ImageChanger = dynamic(() => import("../components/ImageChanger").then((r) => r.ImageChanger));
const AboutMeSection = dynamic(() => import("../components/Contact/AboutMeSection").then((r) => r.AboutMeSection));
const ContactSection = dynamic(() => import("../components/Contact/ContactSection").then((r) => r.ContactSection));
const ProjectsSection = dynamic(() => import("../components/Contact/ProjectsSection").then((r) => r.ProjectsSection));

const RenderTitleItem = ({ children }: { children: any }) => {
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
				className=" bg-white h-1"
			></motion.div>
		</motion.div>
	);
};

export default function Home() {
	const gcon = useContext(GlobalContext) as GlobalContextType;

	const handleSetEmail = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setTimeout(() => {
				gcon.setStep(2);
			}, 750);
		}
	};

	return (
		<div className="bg-white">
			<motion.div
				animate={{
					opacity: [0, 1],
					overflow: "hidden",
					background: `linear-gradient( ${gcon.colors.backgroundColor}, ${LightenDarkenColor(
						gcon.colors.backgroundColor,
						-1
					)})`,
				}}
				transition={{ delay: 0.2 }}
			>
				<div className={`max-w-[1600px] min-h-screen m-auto pb-12 relative z-50 ${gcon.colors.textColor}`}>
					<section className="flex   flex-col  md:flex-col  lg:flex-row xl:flex-row items-center xl:pl-12 font-lato">
						<section className="h-72 w-96 md:h-96 md:w-[500px] xl:h-[450px]  xl:w-[650px]">
							<ImageChanger />
						</section>
						<section className="xl:text-6xl text-4xl  md:text-5xl pt-12">
							{gcon.step == 0 && (
								<RenderTitleItem>
									<p className="">Hello there</p>
									<p className="">
										My name is <span className="text-yellow-400">Rodrigo</span>
									</p>
								</RenderTitleItem>
							)}
							{gcon.step == 1 && (
								<RenderTitleItem>
									<p className="">Heres Some of My </p>
									<p className=" text-yellow-400">Work</p>
								</RenderTitleItem>
							)}
							{gcon.step == 2 && (
								<RenderTitleItem>
									<p className="">
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
			<div id="footer" className="flex pt-12 flex-col bg-black  z-50 text-white items-center justify-center">
				<div className="py-6">
					<p className="font-lato text-xl">Hey there</p>
				</div>
				<ul className="flex justify-around gap-6">
					<li className="w-24 h-24 flex flex-col justify-center">
						<a
							href="https://www.linkedin.com/in/rodrigo-scola-2517521b6/"
							rel={"noreferrer"}
							target={"_blank"}
						>
							<FaLinkedin size={40} />
							<p>linkedin</p>
						</a>
					</li>
					<li className="w-24 h-24 flex flex-col justify-center">
						<a
							href="https://www.linkedin.com/in/rodrigo-scola-2517521b6/"
							rel={"noreferrer"}
							target={"_blank"}
						>
							<AiFillGithub size={40} />
							<p>Github</p>
						</a>
					</li>
					<li className="w-24 cursor-pointer h-24 flex flex-col justify-center">
						<AiFillMail size={40} />
						<p>resume</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
