import { m, LazyMotion, domAnimation } from "framer-motion";
export const LazyAnimation = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
