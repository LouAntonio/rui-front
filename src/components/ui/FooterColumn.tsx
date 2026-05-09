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
			<h4 className="font-poppins text-[22px] font-bold text-black">{title}</h4>
			<ul className="mt-[28px] space-y-[18px] text-[15px] font-medium text-[#666]">
				{items.map((item) => (
					<li
						key={item}
						className="cursor-pointer transition-colors hover:text-red-600 break-words"
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
