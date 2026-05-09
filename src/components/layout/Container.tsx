import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
	className?: string;
}>;

export default function Container({ className, children }: ContainerProps) {
	return (
		<div
			className={`mx-auto w-full max-w-[1440px] px-[149px] ${className ?? ""}`}
		>
			{children}
		</div>
	);
}
