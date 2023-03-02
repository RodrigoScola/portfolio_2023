import React, { createContext, useState, useEffect, useCallback } from "react";

type SectionType = {
	backgroundColor: string;
	title: string;
	id: number;
};

export type GlobalContextType = {
	changeStep: (newValue: number) => void;
	changeImage: (newValue: string) => void;
	step: number;
	setStep: (newValue: number) => void;
	sections: SectionType[];
	colors: {
		backgroundColor: string;
		previousBackgroundColor: string;
		textColor: string;
	};
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [backgroundColor, setBackgroundColor] = useState<string>("#f2f2ff");
	const [prevColor, setPrevColor] = useState<string>("#f2f2f2");
	const [sections, setSections] = useState<SectionType[]>([
		{ backgroundColor: "#fefdff", title: "About Me", id: 0 },
		{ backgroundColor: "#000512", title: "Experience", id: 1 },
		{ backgroundColor: "#d8f3dc", title: "Contact", id: 2 },
	]);
	const [step, setStep] = useState(-1);
	const [textColor, setTextColor] = useState<"text-black" | "text-white">("text-black");

	const changeImage = useCallback(
		(newValue: string) => {
			if (step >= 0) {
				setPrevColor(backgroundColor);
				setBackgroundColor(newValue);
			}
		},
		[step]
	);
	const changeStep = useCallback(
		(newValue: number) => {
			let n = (step + newValue) % 3;
			if (n < 0) n = 2;
			if (n > 2) n = 0;
			setStep(n);
		},
		[step]
	);

	useEffect(() => {
		if (step >= 0) {
			changeImage(sections[step].backgroundColor);

			if (step == 1) {
				setTextColor("text-white");
			} else {
				setTextColor("text-black");
			}
		}
	}, [step]);

	useEffect(() => {
		setStep(0);
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				changeImage,
				colors: {
					backgroundColor: backgroundColor,
					previousBackgroundColor: prevColor,
					textColor,
				},
				setStep,
				changeStep,
				sections,
				step,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
