type DishCardProps = {
	name: string;
	price: string;
	image: string;
	rating: number;
	filledStar: string;
	emptyStar: string;
	dataNodeId?: string;
};

const stars = [1, 2, 3, 4, 5];

export default function DishCard({
	name,
	price,
	image,
	rating,
	filledStar,
	emptyStar,
	dataNodeId,
}: DishCardProps) {
	return (
		<div
			className="relative flex flex-col sm:flex-row items-center gap-[14px] sm:gap-[18px] rounded-[20px] bg-white px-[14px] sm:px-[18px] py-[12px] sm:py-[16px] shadow-[7px_35px_51px_0px_rgba(0,0,0,0.14)] w-full sm:w-[300px] md:w-[349px]"
			data-node-id={dataNodeId}
		>
			<div className="flex size-[70px] sm:size-[98px] items-center justify-center overflow-hidden rounded-full">
				<img
					src={image}
					alt={name}
					className="size-full object-cover"
				/>
			</div>
			<div className="text-center sm:text-left w-full">
				<h4 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c]">
					{name}
				</h4>
				<div className="mt-[6px] flex items-center gap-[7px]">
					{stars.map((star) => (
						<img
							key={`${name}-star-${star}`}
							src={star <= rating ? filledStar : emptyStar}
							alt=""
							className="size-[16px]"
						/>
					))}
				</div>
				<p className="mt-[4px] sm:mt-[6px] text-[15px] sm:text-[18px] font-semibold text-[#515151]">
					{price}
				</p>
			</div>
		</div>
	);
}
