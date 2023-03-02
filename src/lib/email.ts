import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type EmailPayload = {
	subject: string;
	html: string;
};

const smtpOptions: SMTPTransport.Options = {
	host: process.env.SMTP_HOST,
	port: parseInt(process.env.SMTP_PORT || "2525"),
	secure: false,
	auth: {
		user: "handomizando@gmail.com",
		pass: "dhzbiqphguxngkvo",
	},
};

export const sendEmail = async (data: EmailPayload) => {
	const transporter = nodemailer.createTransport(smtpOptions);
	const mail = await transporter.sendMail({
		from: "handomizando@gmail.com",
		to: "rodrigo.sgarabotto.scola@gmail.com",
		...data,
	});

	return mail;
};
