import type { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
	className,
	...props
}: PrimaryButtonProps) {
	return (
		<button
			className={`rounded-[40px] bg-[#ff0202] text-[18px] font-semibold text-white shadow-[-2px_22px_38px_0px_rgba(255,5,5,0.27)] ${className ?? ""}`}
			{...props}
		/>
	);
}
