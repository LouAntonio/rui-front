import Container from "../../components/layout/Container";
import DishCard from "../../components/ui/DishCard";
import FeatureCard from "../../components/ui/FeatureCard";
import Footer from "../../components/layout/Footer";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SectionHeading from "../../components/ui/SectionHeading";
import { ChevronDown, PhoneCall, Search, User } from "lucide-react";

const imgWhatsAppImage20260330At174320Photoroom1 =
	"https://www.figma.com/api/mcp/asset/b6c2a8c8-ee56-49b8-8de6-a93a35368049";
const imgImage14 =
	"https://www.figma.com/api/mcp/asset/ee92f71f-a147-4a6c-8603-b79ff363ff27";
const imgImage15 =
	"https://www.figma.com/api/mcp/asset/f730c8ec-23b4-4f59-a611-3955cc12c53a";
const img4455958657592294930831097627784598206720464NPhotoroom1 =
	"https://www.figma.com/api/mcp/asset/f46004db-779e-4b0b-8263-66e3d87169e3";
const imgUser1 =
	"https://www.figma.com/api/mcp/asset/9c6944ed-f2cb-447f-9bda-14b103befdc1";
const imgMenu1 =
	"https://www.figma.com/api/mcp/asset/67a8b4b5-cfd6-4b6c-a64e-13c0d83eeee8";
const imgCalendar1 =
	"https://www.figma.com/api/mcp/asset/098f1b2a-45ed-4a0e-8b63-4faf577dd31b";
const imgShoppingBag1 =
	"https://www.figma.com/api/mcp/asset/59a9a24a-69d7-40e9-8700-21ac518bc3e6";
const imgSaveClipApp497815396178958230352336281754066218522986375N1 =
	"https://www.figma.com/api/mcp/asset/1af5afd4-1985-4df1-af52-b540da2c6ab4";
const imgSaveClipApp497314562178958247002336288462919314098396801N1 =
	"https://www.figma.com/api/mcp/asset/5d249864-0c71-4e33-9d58-14a476485b56";
const imgSaveClipApp497717228178958247722336288703094415346763039N1 =
	"https://www.figma.com/api/mcp/asset/d738f408-0122-47c7-ac7a-485bcbdf0010";
const imgSaveClipApp498016890178958247452336281348135696263974760N1 =
	"https://www.figma.com/api/mcp/asset/3c591499-8787-418a-8c6a-d16f8a1644d9";
const imgSaveClipApp497758957178958229662336285380980575851933517N1 =
	"https://www.figma.com/api/mcp/asset/ac8081c9-7ae2-4cd2-a114-7e7766b7d01a";
const imgSaveClipApp497956836178959713582336285871967548377065268N1 =
	"https://www.figma.com/api/mcp/asset/c06a11e8-35ae-4e8b-b110-c79dfdd6eb68";
const imgGroup2 =
	"https://www.figma.com/api/mcp/asset/38a34037-c087-4179-aebe-1ceccb9243ff";
const imgRectangle24 =
	"https://www.figma.com/api/mcp/asset/fb79d1a9-0112-4a6c-a53a-264b3ed4630d";
const imgIconSearch =
	"https://www.figma.com/api/mcp/asset/a4771b1e-17bc-4ca6-b0c9-b338e3d19a1d";
const imgVector =
	"https://www.figma.com/api/mcp/asset/e4bb4f74-7905-4b8b-ae2d-acb4071e5f31";
const imgVector1 =
	"https://www.figma.com/api/mcp/asset/29df699b-b424-4d71-94b9-2d0c09c43b96";
const imgLine3 =
	"https://www.figma.com/api/mcp/asset/2d07403c-389c-411d-a331-730a8de19c75";
const imgVector2 =
	"https://www.figma.com/api/mcp/asset/48e0888a-4b57-48e1-9f62-517d8c3840b4";
const imgEllipse11 =
	"https://www.figma.com/api/mcp/asset/999ce7cb-f2a0-4078-9691-87f99c7385ff";

const features = [
	{
		id: "182:190",
		title: "Reservas Online",
		description: "Agenda a tua refeição antecipadamente e elimina filas.",
		icon: imgCalendar1,
		iconClassName: "size-[64px]",
	},
	{
		id: "182:191",
		title: "Cardápio Digital",
		description:
			"Consulta o menu diário e semanal com ingredientes, tempo de confecção em tempo real.",
		icon: imgMenu1,
		iconClassName: "size-[62px]",
	},
	{
		id: "182:192",
		title: "Pedido Antecipado",
		description:
			"Faz o pedido pelo site ou app, escolhe o horário e recolhe no balcão sem esperar na fila.",
		icon: imgShoppingBag1,
		iconClassName: "size-[68px]",
	},
];

export default function Home() {
	return (
		<div className="bg-[#fcfcfc]" data-node-id="182:78">
			<header className="pt-[28px]">
				<Container>
					<div className="flex flex-wrap items-start justify-between gap-[20px] lg:flex-nowrap sm:items-center">
						<div className="flex items-center gap-[18px]">
							<img
								src={
									img4455958657592294930831097627784598206720464NPhotoroom1
								}
								alt="RUI"
								className="size-[88px] object-cover"
							/>
						</div>
						<nav className="order-3 w-full font-['Poppins'] text-[16px] text-[#272727] sm:text-[18px] lg:order-none lg:w-auto">
							<ul className="flex flex-wrap items-center gap-[24px] lg:flex-nowrap lg:gap-[32px]">
								<li>
									<a
										className="inline-flex items-center leading-none text-[#ff0202] transition-colors hover:text-[#ff0202]"
										href="#"
									>
										Ínicio
									</a>
								</li>
								<li className="group relative">
									<button
										type="button"
										className="inline-flex items-center gap-[8px] leading-none transition-colors hover:text-[#ff0202]"
										aria-haspopup="true"
									>
										Menu
										<ChevronDown className="h-[14px] w-[14px] text-[#272727] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
									</button>
									<div className="hidden pt-[8px] group-hover:block group-focus-within:block lg:absolute lg:left-0 lg:top-full">
										<ul className="w-[168px] rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[10px] text-[18px] text-[rgba(0,0,0,0.47)] shadow-[0px_14px_30px_-18px_rgba(0,0,0,0.45)]">
											<li className="leading-[19px] transition-colors hover:text-[#ff0202]">
												Prato Principal
											</li>
											<li className="py-[4px]">
												<span className="block h-[2px] w-[84px] bg-[#ff0202]" />
											</li>
											<li className="transition-colors hover:text-[#ff0202]">Fast Food</li>
											<li className="transition-colors hover:text-[#ff0202]">Bebidas</li>
											<li className="py-[4px]">
												<span className="block h-[2px] w-[84px] bg-[#ff0202]" />
											</li>
										</ul>
									</div>
								</li>
								<li>
									<a
										className="inline-flex items-center leading-none transition-colors hover:text-[#ff0202]"
										href="#"
									>
										Reservas
									</a>
								</li>
								<li>
									<a
										className="inline-flex items-center leading-none transition-colors hover:text-[#ff0202]"
										href="#"
									>
										Feedback
									</a>
								</li>
							</ul>
						</nav>
						<div className="flex items-center gap-[14px] sm:gap-[18px]">
							<Search
								className="h-[20px] w-[20px] text-[#272727] sm:h-[22px] sm:w-[22px]"
								aria-label="Pesquisar"
							/>
							<User
								className="h-[24px] w-[24px] text-[#272727] sm:h-[28px] sm:w-[28px]"
								aria-label="Usuário"
							/>
							<button className="flex items-center gap-[10px] rounded-[40px] bg-[#ff0202] px-[16px] py-[8px] font-['Poppins'] text-[16px] text-white sm:px-[20px] sm:py-[10px] sm:text-[18px]">
								<PhoneCall className="h-[18px] w-[18px] text-white sm:h-[20px] sm:w-[20px]" />
								Contacto
							</button>
						</div>
					</div>
				</Container>
			</header>

			<main>
				<section className="relative overflow-hidden">
					<Container className="relative">
						<div className="grid grid-cols-1 gap-[40px] lg:grid-cols-[1fr_550px]">
							<div className="flex flex-col justify-center">
								<h1 className="text-[40px] font-extrabold leading-[1.2] text-black sm:text-[40px] lg:text-[40px]">
									<span className="text-[#ff0202]">RUI</span>, UMA IMERSÃO
									<br />
									DE{" "}
									<span className="text-[#f0c322]">
										SABORES.
									</span>
								</h1>
								<p className="mt-[24px] max-w-[622px] text-[20px] font-medium leading-[1.6] text-[#4a4a4a] sm:text-[20px]">
									Reserve a sua mesa, consulte o cardápio do
									dia, pague com a carteira digital e avalie a
									sua refeição, tudo numa só plataforma.
								</p>
								<div className="mt-[40px]">
									<PrimaryButton className="h-[70px] w-[200px] sm:h-[80px] sm:w-[229px]">
										Peça agora
									</PrimaryButton>
								</div>
							</div>
							<div className="relative h-[500px] sm:h-[700px] lg:h-[856px]">
								{/* Speech Bubble */}
								<div className="absolute right-[55%] top-[10%] z-20 sm:right-[70%] sm:top-[120px] lg:right-[65%]">
									<div className="relative flex h-[50px] items-center justify-center rounded-[12px] bg-white px-[20px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] after:absolute after:bottom-[-8px] after:right-[15%] after:h-0 after:w-0 after:border-l-[8px] after:border-r-[8px] after:border-t-[8px] after:border-l-transparent after:border-r-transparent after:border-t-white">
										<span className="text-[14px] font-semibold text-[#ff6868] sm:text-[16px]">
											Vem pitar no RUI
										</span>
									</div>
								</div>

								{/* Yellow Circle */}
								<div className="absolute right-[50%] top-[150px] h-[350px] w-[350px] translate-x-[50%] rounded-full bg-[#f0c322] sm:h-[550px] sm:w-[550px] lg:right-[0px] lg:top-[202px] lg:h-[653px] lg:w-[662px] lg:translate-x-0" />

								{/* Hero Image */}
								<div className="absolute inset-0 flex items-end justify-center">
									<img
										src={
											imgWhatsAppImage20260330At174320Photoroom1
										}
										alt="RUI Hero"
										className="h-full w-auto object-contain lg:w-full lg:object-cover"
									/>
								</div>
							</div>
						</div>

						{/* Dish Cards Overlay */}
						<div className="relative mt-[-40px] flex flex-wrap justify-center gap-[24px] lg:absolute lg:bottom-[-20px] lg:right-[0px] lg:mt-0 lg:justify-end">
							<DishCard
								name="Prato x"
								price="10.000 AOA"
								rating={3}
								image={imgImage15}
								filledStar={imgVector}
								emptyStar={imgVector1}
								dataNodeId="182:125"
							/>
							<DishCard
								name="Prato y"
								price="3.000 AOA"
								rating={4}
								image={imgImage14}
								filledStar={imgVector}
								emptyStar={imgVector1}
								dataNodeId="182:101"
							/>
						</div>
					</Container>
				</section>

				<section className="pt-[170px]">
					<Container>
						<SectionHeading
							eyebrow="AQUI NO RUI TEMOS:"
							title="DIVERSAS"
							highlight="FUNCIONALIDADES"
							dataNodeId="182:150"
						/>
						<div className="mt-[84px] grid grid-cols-1 gap-[32px] md:grid-cols-3 md:gap-[48px]">
							{features.map((feature) => (
								<FeatureCard
									key={feature.id}
									title={feature.title}
									description={feature.description}
									icon={feature.icon}
									iconClassName={feature.iconClassName}
									dataNodeId={feature.id}
								/>
							))}
						</div>
					</Container>
				</section>

				<section className="pt-[180px]">
					<Container>
						<p className="text-[13px] font-bold uppercase tracking-[3.5px] text-[#ff6868]">
							RESTAURANTE UNIVERSITÁRIO ITINERANTE
						</p>
						<h2 className="mt-[24px] text-[36px] font-bold text-black">
							SOBRE NÓS
						</h2>
						<div className="mt-[32px] max-w-[1436px] text-[17px] font-medium leading-[1.705] text-[#4a4a4a]">
							<p>
								Somos o RUI - Restaurante Universitário
								Itinerante, um verdadeiro laboratório de
								experiências criado no seio da Faculdade de
								Ciências Económicas e Gestão. Mais do que uma
								iniciativa, somos um espaço dinâmico onde teoria
								e prática se encontram, proporcionando vivências
								reais nas áreas de Marketing, Recursos Humanos,
								Contabilidade, Gestão e Auditoria.
							</p>
							<p className="mt-[18px]">
								Aqui, transformamos conhecimento em ação,
								estimulando a criatividade, o pensamento
								estratégico e o desenvolvimento profissional. O
								RUI nasce com o propósito de formar mentes
								preparadas para o mercado, através de
								experiências envolventes, colaborativas e cheias
								de sabor.
							</p>
						</div>
						<div className="mt-[90px] grid grid-cols-3 gap-[32px]">
							<div className="flex flex-col gap-[40px]">
								<img
									src={
										imgSaveClipApp497815396178958230352336281754066218522986375N1
									}
									alt=""
									className="h-[448px] w-[448px] rounded-[92px] object-cover shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)]"
								/>
								<img
									src={
										imgSaveClipApp497314562178958247002336288462919314098396801N1
									}
									alt=""
									className="h-[546px] w-[437px] rounded-[83px] object-cover"
								/>
							</div>
							<div className="flex flex-col gap-[40px]">
								<img
									src={
										imgSaveClipApp497717228178958247722336288703094415346763039N1
									}
									alt=""
									className="h-[448px] w-[479px] rounded-[114px] object-cover shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)]"
								/>
								<img
									src={
										imgSaveClipApp498016890178958247452336281348135696263974760N1
									}
									alt=""
									className="h-[546px] w-[437px] rounded-[83px] object-cover"
								/>
							</div>
							<div className="flex flex-col gap-[40px]">
								<img
									src={
										imgSaveClipApp497758957178958229662336285380980575851933517N1
									}
									alt=""
									className="h-[448px] w-[460px] rounded-[103px] object-cover shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)]"
								/>
								<img
									src={
										imgSaveClipApp497956836178959713582336285871967548377065268N1
									}
									alt=""
									className="h-[546px] w-[538px] rounded-[77px] object-cover"
								/>
							</div>
						</div>
					</Container>
				</section>
			</main>

			<Footer />
		</div>
	);
}
