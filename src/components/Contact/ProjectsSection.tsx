import Ls from "../../images/ls.png";
import Tpe from "../../images/tclb.png";
import Droom from "../../images/droom copy.png";
import OSt from "../../images/ost.png";
import { Bublle } from "../Bubble";
import { Card } from "../Card";

export const ProjectsSection = () => {
	return (
		<>
			<Bublle className="top-24 -right-24" />
			<section className="pt-32">
				<p className="text-5xl bg-white w-fit text-black p-7 font-medium shadow-md rounded-3xl m-auto text-center font-lato">
					Some Of The Projects I Worked On
				</p>
			</section>

			<section className="pt-32 p-8 px-10">
				<Card
					title="Link Saver"
					image={Ls}
					liveUrl="https://overflowsaver.vercel.app"
					codeUrl="#"
					bodyText="	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et arcu eu metus
								semper scelerisque tincidunt vel tortor. Sed vel elit sapien. Phasellus commodo
								dolor sed odio tincidunt dignissim. Mauris ante lectus, posuere sit amet quam
								sit amet, vehicula condimentum mi."
				/>
				<Card
					image={OSt}
					codeUrl="https://github.com/RodrigoScola/StoreClone"
					liveUrl="#"
					cardOrientation="right"
					title="One Simple Store"
					bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et arcu eu metus
									semper scelerisque tincidunt vel tortor. Sed vel elit sapien. Phasellus commodo
									dolor sed odio tincidunt dignissim. Mauris ante lectus, posuere sit amet quam
									sit amet, vehicula condimentum mi."
				/>
				<Bublle className="top-[2400px] left-24" />
				<Card
					image={Tpe}
					liveUrl="https://github.com/RodrigoScola/Resumos"
					cardOrientation="left"
					title="The Coding Library of Babel"
					bodyText="	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et arcu eu metus
								semper scelerisque tincidunt vel tortor. Sed vel elit sapien. Phasellus commodo
								dolor sed odio tincidunt dignissim. Mauris ante lectus, posuere sit amet quam
								sit amet, vehicula condimentum mi."
				/>

				<Card
					codeUrl="https://github.com/RodrigoScola/Drooom"
					liveUrl="#"
					title="Droom"
					image={Droom}
					cardOrientation="right"
					bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et arcu eu metus
								semper scelerisque tincidunt vel tortor. Sed vel elit sapien. Phasellus commodo
								dolor sed odio tincidunt dignissim. Mauris ante lectus, posuere sit amet quam
								sit amet, vehicula condimentum mi."
				/>
				<Bublle className="bottom-[600px] right-96" />
			</section>
		</>
	);
};
