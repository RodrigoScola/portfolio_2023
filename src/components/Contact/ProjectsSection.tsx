import { m } from "framer-motion";
import TGZ from "../../images/TheGameZone.png";
import Droom from "../../images/droom copy.png";
import Ls from "../../images/ls.png";
import Tpe from "../../images/tclb.png";
import { Bublle } from "../Bubble";
import { Card } from "../Card";
import { LazyAnimation } from "../LazyAnimation";

export const ProjectsSection = () => {
  return (
    <LazyAnimation>
      <Bublle className="top-24 -right-24" />
      <m.section
        initial={{
          x: -50,
        }}
        animate={{ x: 0 }}
        className="pt-32"
      >
        <p className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl  max-w-[90%]  bg-white w-fit text-black p-7 font-medium shadow-md rounded-3xl  m-auto text-center font-lato">
          Some Of The Projects I Worked On
        </p>
      </m.section>

      <section className="pt-32 flex flex-col gap-48 p-8 px-10">
        <Card
          title="Link Saver"
          image={Ls}
          year={2023}
          liveUrl="https://overflowsaver.vercel.app"
          codeUrl="https://github.com/RodrigoScola/LinkSaver"
          bodyText="Have you ever found yourself searching for an website or a question that you saw 100 times already? Here comes Life... Link Saver, the website that saves and organizes it for you!"
        />
        <Card
          image={TGZ}
          codeUrl="https://github.com/RodrigoScola/gmp"
          liveUrl="https://thegamezone.vercel.app"
          year={2023}
          cardOrientation="right"
          title="The Game Zone"
          bodyText="Experience the ultimate gaming adventure on our game platform, where you can play timeless classics like Tic Tac Toe, Rock Paper Scissors, Simon Says, and Connect Four. Connect with friends or meet new players from around the world, engage in real-time chat, and invite friends to join in the fun! "
        />
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
              lines of information, the coding library of babel is a central
              place for you to learn coding concepts or technologies. Focusing
              on being concise, you will learn things in a very easy to
              understand manner.
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
          bodyText={
            <p>
              An music social media where you can write and hear other users
              musics
            </p>
          }
        />
        <Bublle className="bottom-[10px] right-96" />
      </section>
    </LazyAnimation>
  );
};
