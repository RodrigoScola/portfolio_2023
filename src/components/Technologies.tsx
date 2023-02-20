import {
	FrontendItems,
	LanguagesItems,
	LibrariesItems,
	ServicesItems,
	FrameworksItems,
	backendItems,
} from "../data/items";
import Image from "next/image";

type ItemType = {
	title: string;
	image: string;
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
		<>
			<p className="text-left absolute left-0 text-7xl opacity-10 w-full">{title}</p>
			<ul className="grid grid-flow-col gap-10 m-auto">
				{items.map((item, index) => (
					<li key={index}>
						<RenderItem title={item.title} image={item.image} />
					</li>
				))}
			</ul>
		</>
	);
};

export const TechnologiesTab = () => {
	return (
		<section className=" text-center  ">
			<p className="font-roboto_slab text-7xl pb-32  ">Technologies I use</p>
			<ul className="grid grid-flow-row gap-32 max-w-[1200px] m-auto ">
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
