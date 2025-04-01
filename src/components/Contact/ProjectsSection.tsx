import { m } from "framer-motion";
import TGZ from "../../images/TheGameZone.png";
import Droom from "../../images/droom copy.png";
import Ls from "../../images/ls.png";
import Wecode from "../../images/wecode.png";
import TextObjects from "../../images/vscode_text_objects.png";
import ThinkOrion from "../../images/think_orion.png"
import Tpe from "../../images/tclb.png";
import { Bubble } from "../Bubble";
import { Card } from "../Card";
import { LazyAnimation } from "../LazyAnimation";

export const ProjectsSection = () => {
  return (
    <LazyAnimation>
      <Bubble className="top-24 -right-24" />
      <m.section
        initial={{
          x: -50,
        }}
        animate={{ x: 0 }}
        className="pt-32"
      >
        <p className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl  max-w-[90%]  bg-white w-fit text-black p-7 font-medium shadow-md rounded-2xl  m-auto text-center font-lato">
          Work Experience
        </p>
      </m.section>

      <section className="pt-32 flex flex-col gap-24 p-8 px-10">
        <Card
          title="WeCode"
          image={Wecode}
          year={'2023-2025'}
          description="During my tenure at WeCode, a prominent software company for the ecommerce industry, I have held the position of a Full Stack Developer. In this role, I have adeptly utilized technologies such as React, Express, and Node to contribute to the development and enhancement of cutting-edge e-commerce websites."
        />
        <Card
          title="Think Orion"
          image={ThinkOrion}
          cardOrientation="right"
          year={'2022-2023'}
          description="Developed Internet of Learning, a course platform. Helped create websites for multiple clients and developed internal tools utilizing the Wordpress framework, React and Node "
        />


        <Bubble className="top-[1000px] left-36" />
        <m.section
          initial={{
            x: -50,
          }}
          animate={{ x: 0 }}
        >
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl  max-w-[90%]  bg-white w-fit text-black p-7 font-medium shadow-md rounded-2xl  m-auto text-center font-lato">
            Projects I worked on
          </p>
        </m.section>

        <Card
          title="Vscode Text Objects"
          image={TextObjects}
          year={2024}
          liveUrl="https://marketplace.visualstudio.com/items?itemName=RodrigoScola.vscode-textobjects"
          codeUrl="https://github.com/RodrigoScola/vscode-text-objects"
          description="A Visual Studio Code extension that using Tree-Sitter, helps you work faster and more effectively"
        />


        <Card
          title="Link Saver"
          image={Ls}
          year={2023}
          liveUrl="https://overflowsaver.vercel.app"
          codeUrl="https://github.com/RodrigoScola/LinkSaver"
          description="Have you ever found yourself searching for an website or a question that you saw 100 times already? Here comes Life... Link Saver, the website that saves and organizes it for you!"
        />
        <Card
          image={TGZ}
          codeUrl="https://github.com/RodrigoScola/gmp"
          liveUrl="https://thegamezone.vercel.app"
          year={2023}
          cardOrientation="right"
          title="The Game Zone"
          description="Experience the ultimate gaming adventure on our game platform, where you can play timeless classics like Tic Tac Toe, Rock Paper Scissors, Simon Says, and Connect Four. Connect with friends or meet new players from around the world, engage in real-time chat, and invite friends to join in the fun! "
        />
        <Bubble className="bottom-[1000px] left-24" />
        <Card
          image={Tpe}
          year={"2020 - current"}
          liveUrl="https://github.com/RodrigoScola/Resumos"
          cardOrientation="right"
          title="The Coding Library of Babel"
          description={
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
          description={
            <p>
              An music social media where you can write and hear other users
              musics
            </p>
          }

        />
        <Bubble className="bottom-[10px] right-96" />
      </section>
    </LazyAnimation>
  );
};
