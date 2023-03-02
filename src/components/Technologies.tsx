import {
	FrontendItems,
	LanguagesItems,
	LibrariesItems,
	ServicesItems,
	FrameworksItems,
	backendItems,
} from "../data/items";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
type ItemType = {
	title: string;
	image: string;
};

const GlitchTitle = ({ title }: { title: string }) => {
	const all_letters = "ABCDEFGIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
	const baseTitle = title;

	const [letterTitle, setLetterTitle] = useState(title);
	const ref = useRef(null);
	const inView = useInView(ref);

	const [iterations, setIterations] = useState(-1);
	const [running, setRunning] = useState(false);
	const handleHover = () => {
		let nword: string[] = [];
		letterTitle.split("").forEach((letter, index) => {
			if (index < iterations) {
				nword.push(baseTitle[index]);
			} else {
				const num = Math.floor(Math.random() * all_letters.length);

				const l = all_letters[num];

				nword.push(l);
			}
		});
		setLetterTitle(nword.join(""));
	};

	useEffect(() => {
		if (iterations <= title.length) {
			setRunning(true);
			setTimeout(() => {
				handleHover();
				setIterations(iterations + 1);
			}, 50);
		} else {
			setRunning(false);
		}
	}, [iterations]);

	useEffect(() => {
		setIterations(0);
	}, [inView]);

	return (
		<motion.div ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex">
			{letterTitle.split("").map((letter, index) => (
				<p
					onMouseEnter={() => {
						if (!running) {
							setIterations(0);
						}
					}}
					key={index}
				>
					{letter}
				</p>
			))}
		</motion.div>
	);
};

const RenderItem = ({ title, image }: ItemType) => {
	return (
		<div className="w-fit">
			<Image className=" h-16 object-contain" src={image} alt={`${title}`} width={100} height={100} />
			<p className="text-center ">{title}</p>
		</div>
	);
};

const RenderItems = ({ items, title }: { items: ItemType[]; title: string }) => {
	return (
		<div className="flex absolute items-center">
			<div className="absolute -left-12  text-5xl -z-20 opacity-40 ">
				<GlitchTitle title={title} />
			</div>
			<ul className="flex justify-center flex-wrap gap-6 m-auto">
				{items.map((item, index) => (
					<li key={index}>
						<RenderItem title={item.title} image={item.image} />
					</li>
				))}
			</ul>
		</div>
	);
};

export const TechnologiesTab = () => {
	return (
		<section className="text-center  ">
			<p className="font-roboto_slab text-center text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl  pb-12 md:pb-24 lg:pb-24  xl:pb-24  ">
				Technologies I use
			</p>
			<ul className="grid grid-flow-row gap-60 max-w-[1200px]  ">
				<li className="">
					<RenderItems items={FrontendItems} title="Frontend" />
				</li>
				<li className="">
					<RenderItems items={backendItems} title="Backend" />
				</li>
				<li className="">
					<RenderItems items={LanguagesItems} title="Languages" />
				</li>
				<li className="">
					<RenderItems items={ServicesItems} title={"Services"} />
				</li>
				<li className="">
					<RenderItems items={FrameworksItems} title={"Frameworks"} />
				</li>
				<li className="">
					<RenderItems items={LibrariesItems} title={"Libraries"} />
				</li>
			</ul>
		</section>
	);
};
