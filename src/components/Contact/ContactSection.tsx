import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

type infoType = {
	name: string;
	email: string;
	message: string;
};

export const ContactSection = () => {
	const [info, setInfo] = useState<infoType>({ email: "", message: "", name: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInfo((curr) => ({ ...curr, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: Event) => {
		e.preventDefault();
	};
	return (
		<>
			<section className="my-2">
				<p className="text-center text-3xl">See what i am up to</p>
				<ul className="flex justify-evenly  gap-3 py-12">
					<li className="p-4 rounded-2xl flex shadow-md  items-end justify-center bg-green-300">
						<a
							href="https://www.linkedin.com/in/rodrigo-scola-2517521b6/"
							target={"_blank"}
							className=""
						>
							<AiOutlineLinkedin size={100} />
							<p className="text-center font-bold text-xl font-lato">Linkedin</p>
						</a>
					</li>
					<li className="p-4 rounded-2xl flex shadow-md items-end justify-center bg-green-300">
						<a href="https://github.com/RodrigoScola" target={"_blank"} className="">
							<FiGithub size={100} />
							<p className="text-center font-bold text-xl font-lato">Github</p>
						</a>
					</li>
					{/* <li className="p-4 rounded-2xl flex shadow-md  items-end justify-center bg-green-300">
						<div className="">
							<AiOutlineMail size={100} />
							<p className="text-center font-bold text-xl font-lato">Email</p>
						</div>
					</li> */}
				</ul>
			</section>
			<section className="w-[50%] m-auto">
				<p className="text-center text-4xl bg-green-300 w-fit m-auto rounded-xl p-4">Contact Me</p>
				<form onSubmit={handleSubmit} className="bg-green-200 rounded-md mt-12  p-10">
					<ul className="flex flex-col gap-12">
						<li className="flex flex-col">
							<label className="text-xl font-lato">Name:</label>
							<input
								onChange={handleChange}
								name={"name"}
								value={info.name}
								placeholder="Jane Doe"
								className="bg-transparent border-b-2 p-2 active:border-none font-lato focus:outline-none active:outline-b-black active:active:outline-b-2 border-b-black"
								type="text"
							/>
						</li>
						<li className="flex flex-col">
							<label className="text-xl font-lato">Email:</label>
							<input
								name="email"
								onChange={handleChange}
								type="email"
								value={info.email}
								placeholder="johndoe@gmail.com"
								className="bg-transparent border-b-2 p-2 active:border-none font-lato focus:outline-none active:outline-b-black active:active:outline-b-2 border-b-black"
							/>
						</li>
						<li className="flex flex-col">
							<label className="text-xl font-lato">Message:</label>
							<textarea
								name="message"
								onChange={handleChange}
								value={info.message}
								rows={4}
								cols={20}
								className="bg-transparent    border-b-2 p-2 active:border-none font-lato focus:outline-none active:outline-b-black active:active:outline-b-2 border-b-black"
							></textarea>
						</li>
					</ul>
					<div className="flex justify-center pt-4">
						<button
							className="p-3 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white ease-in duration-100 hover:border-green-200 rounded-2xl text-xl"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
};
