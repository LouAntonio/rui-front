import Container from "./Container";
import PrimaryButton from "../ui/PrimaryButton";

export default function Hero() {
	return (
		<section className="relative overflow-hidden pt-[40px] lg:pt-[60px]">
			<Container className="relative">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-[30px] lg:gap-[40px] items-center">
					<div className="flex flex-col justify-center order-2 lg:order-1">
						<h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.2] text-black">
							<span className="text-[#ff0202]">RUI</span>, UMA
							IMERSÃO
							<br />
							DE <span className="text-[#f0c322]">SABORES.</span>
						</h1>
						<p className="mt-[16px] sm:mt-[24px] max-w-[622px] text-[14px] sm:text-[17px] font-medium leading-[1.6] text-[#4a4a4a]">
							Reserve a sua mesa, consulte o cardápio do dia,
							pague com a carteira digital e avalie a sua
							refeição, tudo numa só plataforma.
						</p>
						<div className="mt-[30px] sm:mt-[40px]">
							<PrimaryButton className="h-[56px] w-[160px] sm:h-[70px] sm:w-[200px] text-[16px] sm:text-[18px]">
								Peça agora
							</PrimaryButton>
						</div>
					</div>
					<div className="relative h-[280px] sm:h-[400px] lg:h-[600px] order-1 lg:order-2">
						<div className="absolute inset-0 flex items-end justify-center">
							<img
								src="/images/hero.png"
								alt="RUI Hero"
								className="h-full w-auto object-contain lg:w-full lg:object-cover"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
