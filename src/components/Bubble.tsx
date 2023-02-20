export const Bublle: React.FC<JSX.IntrinsicElements["div"]> = (props) => {
	return (
		<div
			{...props}
			className={`w-96 h-96 bg-blue-300 opacity-50 -z-10 blur-[200px] rounded-full absolute  ${props.className}`}
		></div>
	)
}
