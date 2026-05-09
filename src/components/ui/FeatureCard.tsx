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
			className="rounded-[40px] bg-white p-[32px] text-center shadow-[2px_10px_30px_0px_rgba(0,0,0,0.1)]"
			data-node-id={dataNodeId}
		>
			<div className="relative mx-auto flex size-[153px] items-center justify-center rounded-full bg-white">
				{circleImage ? (
					<img
						src={circleImage}
						alt=""
						className="absolute inset-0 size-full"
					/>
				) : null}
				<img
					src={icon}
					alt=""
					className={`relative object-contain ${iconClassName ?? "size-[88px]"}`}
				/>
			</div>
			<h3 className="mt-[22px] text-[30px] font-semibold text-[#1e1e1e]">
				{title}
			</h3>
			<p className="mt-[12px] text-[16px] font-medium text-[#555]">
				{description}
			</p>
		</div>
	);
}
