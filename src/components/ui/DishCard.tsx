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
			className="relative flex h-[132px] w-[349px] items-center gap-[18px] rounded-[25px] bg-white px-[18px] shadow-[7px_35px_51px_0px_rgba(0,0,0,0.14)]"
			data-node-id={dataNodeId}
		>
			<div className="flex size-[98px] items-center justify-center overflow-hidden rounded-full">
				<img
					src={image}
					alt={name}
					className="size-full object-cover"
				/>
			</div>
			<div>
				<h4 className="text-[16px] font-semibold text-[#2c2c2c]">
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
				<p className="mt-[6px] text-[18px] font-semibold text-[#515151]">
					{price}
				</p>
			</div>
		</div>
	);
}
