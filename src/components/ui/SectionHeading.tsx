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
			<p className="text-[20px] font-bold uppercase tracking-[3.5px] text-[#f0c322]">
				{eyebrow}
			</p>
			<h2 className="mt-[22px] text-[60px] font-bold text-black">
				{title}{" "}
				{highlight ? (
					<span className="text-[#ff0202]">{highlight}</span>
				) : null}
			</h2>
		</div>
	);
}
