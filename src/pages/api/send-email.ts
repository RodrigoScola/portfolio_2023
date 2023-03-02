import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { ContactEmail } from "../../components/Templates/EmailTemplate";
import { sendEmail } from "@/lib/email";

export type EmailBody = {
	name: string;
	email: string;
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method == "POST") {
		try {
			const { email, message, name }: EmailBody = req.body;
			const emai = await sendEmail({
				subject: `hello there im ${name}`,
				html: `
				<div>
					<h1>hey there my name is ${name}</h1>
					<div>
						<p>${message}</p>
						<br />
						<p>if you want to contact me, message me at ${email}</p>
					</div>
				</div>
				
				
				`,
			});
			console.log(emai);
			return res.status(200).json({ message: "email sent!" });
		} catch (err) {
			return res.status(400).send(err);
		}
	}
}
