import Ls from "../../images/ls.png";
import Tpe from "../../images/tclb.png";
import Droom from "../../images/droom copy.png";
import { Bublle } from "../Bubble";
import { Card } from "../Card";

export const ProjectsSection = () => {
	return (
		<>
			<Bublle className="top-24 -right-24" />
			<section className="pt-32">
				<p className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl  max-w-[90%]  bg-white w-fit text-black p-7 font-medium shadow-md rounded-3xl  m-auto text-center font-lato">
					Some Of The Projects I Worked On
				</p>
			</section>

			<section className="pt-32 flex flex-col gap-48 p-8 px-10">
				<Card
					title="Link Saver"
					image={Ls}
					year={2023}
					liveUrl="https://overflowsaver.vercel.app"
					codeUrl="https://github.com/RodrigoScola/LinkSaver"
					bodyText="Have you ever found yourself searching for an website or a question that you saw 100 times already? Here comes Life... Link Saver, the website that saves and organizes it for you!"
				/>
				{/* <Card
					image={OSt}
					codeUrl="https://github.com/RodrigoScola/StoreClone"
					liveUrl="#"
					cardOrientation="right"
					title="One Simple Store"
					bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et arcu eu metus
									semper scelerisque tincidunt vel tortor. Sed vel elit sapien. Phasellus commodo
									dolor sed odio tincidunt dignissim. Mauris ante lectus, posuere sit amet quam
									sit amet, vehicula condimentum mi."
				/> */}
				<Bublle className="bottom-[1000px] left-24" />
				<Card
					image={Tpe}
					year={"2020 - current"}
					liveUrl="https://github.com/RodrigoScola/Resumos"
					cardOrientation="right"
					title="The Coding Library of Babel"
					bodyText={
						<p>
							Started in 2021 and now with over
							<span
								className="text-blue-500 font-bold
							"
							>
								{" "}
								25000{" "}
							</span>
							lines of information, the coding library of babel is a central place for you to learn
							coding concepts or technologies. Focusing on being concise, you will learn things in
							a very easy to understand manner.
						</p>
					}
				/>

				<Card
					year="2021"
					codeUrl="https://github.com/RodrigoScola/Drooom"
					liveUrl="https://drooom.vercel.app"
					title={"Droom"}
					image={Droom}
					cardOrientation="left"
					bodyText={<p>An music social media where you can write and hear other users musics</p>}
				/>
				<Bublle className="bottom-[10px] right-96" />
			</section>
		</>
	);
};
