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
		user: "handomize64@gmail.com",
		pass: "1212Roro",
	},
};

export const sendEmail = async (data: EmailPayload) => {
	const transporter = nodemailer.createTransport(smtpOptions);
	const mail = await transporter.sendMail({
		from: process.env.SMTP_USER,
		to: process.env.STMP_TO_EMAIL,
		...data,
	});

	return mail;
};
