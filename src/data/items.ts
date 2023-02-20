import HtmlImage from "../images/html.png";
import CssImage from "../images/css.png";
import Jquery from "../images/jquery.png";
import React from "../images/react.png";
import Wordpress from "../images/wordpress.png";
import Next from "../images/next.png";
import AWS from "../images/aws.png";
import Bootstrap from "../images/bootstrap.jpeg";
import C from "../images/c.png";
import Chakra from "../images/chakra.jpg";
import Csharp from "../images/csharp.png";
import Express from "../images/express.png";
import Firebase from "../images/firebase.png";
import SvelteKit from "../images/sveltekit.png";
import Graph from "../images/Graph.png";
import Heroku from "../images/heroku.png";
import Js from "../images/js.png";
import NodeJs from "../images/Nodejs.png";
import Php from "../images/php.png";
import Psql from "../images/psql.png";
import Py from "../images/py.png";
import Redux from "../images/redux.png";
import Stripe from "../images/stripe.png";
import Supabase from "../images/supabase.png";
import Tailwind from "../images/tailwind.png";
import Ts from "../images/ts.png";
import { StaticImageData } from "next/image";
type ItemType = {
	title: string;
	image: StaticImageData;
};

export const FrontendItems: ItemType[] = [
	{ title: "React", image: React },
	{ title: "Html", image: HtmlImage },
	{ title: "Css", image: CssImage },
	{ title: "Jquery", image: Jquery },
];
export const backendItems: ItemType[] = [
	{ title: "NodeJs", image: NodeJs },
	{ title: "Express", image: Express },
	{ title: "Graphql", image: Graph },
	{ title: "PostgresSql", image: Psql },
	{ title: "Supabase", image: Supabase },
];
export const LanguagesItems: ItemType[] = [
	{ title: "Javascript", image: Js },
	{ title: "Typescript", image: Ts },
	{ title: "Php", image: Php },
	{ title: "Python", image: Py },
	{ title: "C", image: C },
	{ title: "CSharp", image: Csharp },
];
export const ServicesItems: ItemType[] = [
	{ title: "Firebase", image: Firebase },
	{ title: "Aws", image: AWS },
	{ title: "Heroku", image: Heroku },
	{ title: "Stripe", image: Stripe },
];
export const FrameworksItems: ItemType[] = [
	{ title: "Next", image: Next },
	{ title: "Wordpress", image: Wordpress },
	{ title: "Sveltekit", image: SvelteKit },
];
export const LibrariesItems: ItemType[] = [
	{ title: "Tailwind", image: Tailwind },
	{ title: "Redux", image: Redux },
	{ title: "Chakra-ui", image: Chakra },
	{ title: "Bootstrap", image: Bootstrap },
];
