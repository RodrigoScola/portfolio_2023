import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { EmailBody } from "@/pages/api/send-email";

export function ContactEmail({ name, email, message }: EmailBody) {
	return `
		<Html>
			<Section style={main}>
				<Container style={container}>
					<Text style={heading}>Hey there im {name}</Text>
					<Text style={paragraph}>{message}</Text>
					<Text style={paragraph}>My email</Text>
				</Container>
			</Section>
		</Html>
	`;
}

const main = {
	backgroundColor: "#ffffff",
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
};

const heading = {
	fontSize: "32px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
};
