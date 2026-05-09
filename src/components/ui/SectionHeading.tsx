type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	highlight?: string;
	dataNodeId?: string;
};

export default function SectionHeading({
	eyebrow,
	title,
	highlight,
	dataNodeId,
}: SectionHeadingProps) {
	return (
		<div className="text-center" data-node-id={dataNodeId}>
			<p className="text-[12px] font-bold uppercase tracking-[4px] text-[#f0c322]">
				{eyebrow}
			</p>
			<h2 className="mt-[16px] text-[36px] font-extrabold text-black sm:text-[44px]">
				{title}{" "}
				{highlight ? (
					<span className="text-[#ff0202]">{highlight}</span>
				) : null}
			</h2>
		</div>
	);
}
