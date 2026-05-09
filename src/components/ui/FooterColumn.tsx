type FooterColumnProps = {
	title: string;
	items: string[];
	className?: string;
};

export default function FooterColumn({
	title,
	items,
	className,
}: FooterColumnProps) {
	return (
		<div className={className}>
			<h4 className="text-[26px] font-semibold text-black">{title}</h4>
			<ul className="mt-[20px] space-y-[16px] text-[24px] font-medium text-[#555]">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}
