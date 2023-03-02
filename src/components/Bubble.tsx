export const Bublle = (props: any) => {
	return (
		<div
			{...props}
			className={`w-96 h-96 overflow-hidden bg-blue-300 opacity-50 -z-10 blur-[200px] rounded-full absolute  ${props.className}`}
		></div>
	);
};
