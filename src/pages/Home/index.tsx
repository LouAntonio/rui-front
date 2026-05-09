import Container from "../../components/layout/Container";
import DishCard from "../../components/ui/DishCard";
import FeatureCard from "../../components/ui/FeatureCard";
import FooterColumn from "../../components/ui/FooterColumn";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SectionHeading from "../../components/ui/SectionHeading";

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
const imgFiRrCopyright =
	"https://www.figma.com/api/mcp/asset/07853aaf-656a-48ca-93a2-65b5f80bb39f";
const imgVector5 =
	"https://www.figma.com/api/mcp/asset/01dd6928-77b9-4bfb-babf-3a3c39f20812";
const imgEllipse7 =
	"https://www.figma.com/api/mcp/asset/a1186b8a-eb5a-4f02-9869-650116599732";
const imgEllipse8 =
	"https://www.figma.com/api/mcp/asset/458a140b-4878-4583-8f21-28ac8be0d365";
const imgEllipse10 =
	"https://www.figma.com/api/mcp/asset/88b19fc0-644b-4a5d-9ddf-ccea27c4a100";
const imgIconFacebook =
	"https://www.figma.com/api/mcp/asset/0e589a49-7a66-4b65-84b8-357341425668";
const imgIconYoutube =
	"https://www.figma.com/api/mcp/asset/c537c54a-e5b2-4e7e-b877-9b134a3882ce";
const imgIconInstagram =
	"https://www.figma.com/api/mcp/asset/eb4f64f7-a494-4452-8ea9-ba23957d632a";
const imgF =
	"https://www.figma.com/api/mcp/asset/b138464a-eb08-4edd-84e3-614f1442bf9a";
const imgEllipse11 =
	"https://www.figma.com/api/mcp/asset/999ce7cb-f2a0-4078-9691-87f99c7385ff";

const features = [
	{
		id: "182:190",
		title: "Reservas Online",
		description: "Agenda a tua refeição antecipadamente e elimina filas.",
		icon: imgCalendar1,
		iconClassName: "size-[84px]",
	},
	{
		id: "182:191",
		title: "Cardápio Digital",
		description:
			"Consulta o menu diário e semanal com ingredientes, tempo de confecção em tempo real.",
		icon: imgMenu1,
		iconClassName: "size-[82px]",
	},
	{
		id: "182:192",
		title: "Pedido Antecipado",
		description:
			"Faz o pedido pelo site ou app, escolhe o horário e recolhe no balcão sem esperar na fila.",
		icon: imgShoppingBag1,
		iconClassName: "size-[88px]",
	},
];

export default function Home() {
	return (
		<div className="bg-[#fcfcfc]" data-node-id="182:78">
			<header className="pt-[38px]">
				<Container>
					<div className="flex items-start justify-between">
						<div className="flex items-center gap-[18px]">
							<img
								src={
									img4455958657592294930831097627784598206720464NPhotoroom1
								}
								alt="RUI"
								className="size-[97px] object-cover"
							/>
						</div>
						<nav className="font-['Poppins'] text-[20px] text-[#272727]">
							<ul className="flex items-start gap-[40px]">
								<li>
									<a className="text-[#ff0202]" href="#">
										Ínicio
									</a>
								</li>
								<li className="relative">
									<span className="flex items-center gap-[8px]">
										Menu
										<img
											src={imgGroup2}
											alt=""
											className="h-[11px]"
										/>
									</span>
									<ul className="mt-[12px] space-y-[6px] text-[20px] text-[rgba(0,0,0,0.47)]">
										<li className="leading-[19px]">
											Prato Principal
										</li>
										<li>
											<img
												src={imgLine3}
												alt=""
												className="w-[92px]"
											/>
										</li>
										<li>Fast Food</li>
										<li>Bebidas</li>
										<li>
											<img
												src={imgLine3}
												alt=""
												className="w-[92px]"
											/>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Reservas</a>
								</li>
								<li>
									<a href="#">Feedback</a>
								</li>
							</ul>
						</nav>
						<div className="flex items-center gap-[22px]">
							<img
								src={imgIconSearch}
								alt="Pesquisar"
								className="size-[24px]"
							/>
							<img
								src={imgUser1}
								alt="Usuário"
								className="size-[31px] object-cover"
							/>
							<button className="flex items-center gap-[12px] rounded-[40px] bg-[#ff0202] px-[22px] py-[12px] font-['Poppins'] text-[20px] text-white">
								<img
									src={imgVector2}
									alt=""
									className="size-[24px]"
								/>
								Contacto
							</button>
						</div>
					</div>
				</Container>
			</header>

			<main>
				<section className="relative pt-[150px]">
					<Container className="relative">
						<div className="grid grid-cols-[1fr_662px] gap-[40px]">
							<div>
								<div className="relative inline-flex items-center">
									<img
										src={imgRectangle24}
										alt=""
										className="h-[67px] w-[248px]"
									/>
									<span className="absolute left-[27px] text-[20px] font-semibold text-[#ff6868]">
										Vem pitar no RUI
									</span>
								</div>
								<h1 className="mt-[36px] text-[62px] font-extrabold leading-[1.455] text-black">
									<span className="text-[#ff0202]">RUI</span>,
									UMA IMERSÃO
									<br />
									DE{" "}
									<span className="text-[#f0c322]">
										SABORES.
									</span>
								</h1>
								<p className="mt-[24px] max-w-[622px] text-[26px] font-medium leading-[1.705] text-[#4a4a4a]">
									Reserve a sua mesa, consulte o cardápio do
									dia, pague com a carteira digital e avalie a
									sua refeição, tudo numa só plataforma.
								</p>
								<PrimaryButton className="mt-[32px] h-[80px] w-[229px]">
									Peça agora
								</PrimaryButton>
							</div>
							<div className="relative h-[856px]">
								<div className="absolute right-[0px] top-[202px] h-[653.969px] w-[662.703px] rounded-[500px] bg-[#f0c322]" />
								<div className="absolute right-0 top-[0px] h-[856px] w-[662px] overflow-hidden">
									<img
										src={
											imgWhatsAppImage20260330At174320Photoroom1
										}
										alt=""
										className="h-[137.3%] w-full object-cover"
									/>
								</div>
							</div>
						</div>
						<div className="mt-[-70px] flex justify-end gap-[24px]">
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
						<div className="mt-[70px] grid grid-cols-3 gap-[48px]">
							{features.map((feature) => (
								<FeatureCard
									key={feature.id}
									title={feature.title}
									description={feature.description}
									icon={feature.icon}
									iconClassName={feature.iconClassName}
									circleImage={imgEllipse11}
									dataNodeId={feature.id}
								/>
							))}
						</div>
					</Container>
				</section>

				<section className="pt-[180px]">
					<Container>
						<p className="text-[20px] font-bold uppercase tracking-[3.5px] text-[#ff6868]">
							RESTAURANTE UNIVERSITÁRIO ITINERANTE
						</p>
						<h2 className="mt-[24px] text-[60px] font-bold text-black">
							SOBRE NÓS
						</h2>
						<div className="mt-[32px] max-w-[1436px] text-[26px] font-medium leading-[1.705] text-[#4a4a4a]">
							<p>
								Somos o RUI — Restaurante Universitário
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

			<footer className="pt-[180px] pb-[60px]">
				<Container>
					<div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-[48px]">
						<div>
							<img
								src={
									img4455958657592294930831097627784598206720464NPhotoroom1
								}
								alt="RUI"
								className="size-[97px]"
							/>
							<p className="mt-[20px] text-[24px] font-medium leading-[1.243] text-[#555]">
								Delicie-se com a arte culinária africana, onde
								cada prato é uma obra-prima.
							</p>
						</div>
						<FooterColumn
							title="Links úteis"
							items={["Sobre nós", "Edições"]}
						/>
						<FooterColumn
							title="Serviços"
							items={["Ínicio", "Menu", "Carteira"]}
						/>
						<FooterColumn
							title="Contacta-nos"
							items={[
								"restauranteuniversitarioitener@gmail.com",
								"+244 945 288 164",
								"@rui.unia",
							]}
						/>
					</div>
					<div className="mt-[40px] flex items-center gap-[18px]">
						<div className="relative">
							<img
								src={imgEllipse7}
								alt=""
								className="size-[57px]"
							/>
							<img
								src={imgIconFacebook}
								alt="Facebook"
								className="absolute left-[14px] top-[14px] h-[25px] w-[14px]"
							/>
						</div>
						<div className="relative">
							<img
								src={imgEllipse8}
								alt=""
								className="size-[57px]"
							/>
							<img
								src={imgIconInstagram}
								alt="Instagram"
								className="absolute left-[17px] top-[17px] size-[22px]"
							/>
						</div>
						<div className="relative">
							<img
								src={imgEllipse10}
								alt=""
								className="size-[57px]"
							/>
							<img
								src={imgIconYoutube}
								alt="YouTube"
								className="absolute left-[16px] top-[19px] h-[19px] w-[27px]"
							/>
						</div>
					</div>
					<div className="mt-[30px] flex items-center gap-[12px] text-[22px] font-medium text-[#555]">
						<img
							src={imgFiRrCopyright}
							alt=""
							className="size-[18px]"
						/>
						<img
							src={imgVector5}
							alt=""
							className="-ml-[18px] size-[18px]"
						/>
						<span>
							Copyright 2026 RUI UnIA | All rights reserved
						</span>
					</div>
					<img
						src={imgF}
						alt=""
						className="mt-[12px] h-[24px] w-[18px]"
					/>
				</Container>
			</footer>
		</div>
	);
}
