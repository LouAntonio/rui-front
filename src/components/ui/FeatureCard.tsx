type FeatureCardProps = {
	icon: string;
	title: string;
	description: string;
	iconClassName?: string;
	circleImage?: string;
	dataNodeId?: string;
};

export default function FeatureCard({
	icon,
	title,
	description,
	iconClassName,
	circleImage,
	dataNodeId,
}: FeatureCardProps) {
	return (
		<div
			className="flex flex-col items-center rounded-[35px] bg-white px-[32px] py-[48px] text-center shadow-[0px_4px_40px_rgba(0,0,0,0.06)] transition-transform hover:scale-[1.02]"
			data-node-id={dataNodeId}
		>
			<div className="flex size-[140px] items-center justify-center rounded-full bg-[#f0c322]">
				<img
					src={icon}
					alt=""
					className={`object-contain brightness-0 invert ${iconClassName ?? "size-[70px]"}`}
				/>
			</div>
			<h3 className="mt-[24px] text-[18px] font-bold text-[#272727]">
				{title}
			</h3>
			<p className="mt-[8px] max-w-[240px] text-[15px] font-medium leading-[1.5] text-[#757575]">
				{description}
			</p>
		</div>
	);
}
