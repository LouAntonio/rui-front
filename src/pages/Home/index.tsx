import Container from "../../components/layout/Container";
import FeatureCard from "../../components/ui/FeatureCard";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Hero from "../../components/layout/Hero";
import SectionHeading from "../../components/ui/SectionHeading";

const imgMenu1 =
	"https://www.figma.com/api/mcp/asset/67a8b4b5-cfd6-4b6c-a64e-13c0d83eeee8";
const imgCalendar1 =
	"https://www.figma.com/api/mcp/asset/098f1b2a-45ed-4a0e-8b63-4faf577dd31b";
const imgShoppingBag1 =
	"https://www.figma.com/api/mcp/asset/59a9a24a-69d7-40e9-8700-21ac518bc3e6";

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
			<Header />

			<main>
				<Hero />

				<section className="pt-[60px] md:pt-[100px] lg:pt-[170px]">
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

				<section className="pt-[60px] md:pt-[100px] lg:pt-[180px]">
					<Container>
						<p className="text-[11px] sm:text-[13px] font-bold uppercase tracking-[2px] sm:tracking-[3.5px] text-[#ff6868]">
							RESTAURANTE UNIVERSITÁRIO ITINERANTE
						</p>
						<h2 className="mt-[16px] sm:mt-[24px] text-[24px] sm:text-[36px] font-bold text-black">
							SOBRE NÓS
						</h2>
						<div className="mt-[24px] sm:mt-[32px] max-w-[1436px] text-[15px] sm:text-[17px] font-medium leading-[1.6] sm:leading-[1.705] text-[#4a4a4a]">
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
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[32px] mt-[60px] sm:mt-[90px]">
							<div className="flex flex-col gap-[20px] sm:gap-[40px]">
								<img
									src="/images/1.jpeg"
									alt=""
									className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[448px] rounded-[40px] sm:rounded-[60px] lg:rounded-[92px] object-cover shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]"
								/>
								<img
									src="/images/2.jpeg"
									alt=""
									className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] rounded-[40px] sm:rounded-[60px] lg:rounded-[83px] object-cover"
								/>
							</div>
							<div className="flex flex-col gap-[20px] sm:gap-[40px]">
								<img
									src="/images/3.jpeg"
									alt=""
									className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[448px] rounded-[40px] sm:rounded-[60px] lg:rounded-[114px] object-cover shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]"
								/>
								<img
									src="/images/4.jpeg"
									alt=""
									className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] rounded-[40px] sm:rounded-[60px] lg:rounded-[83px] object-cover"
								/>
							</div>
							<div className="flex flex-col gap-[20px] sm:gap-[40px]">
								<img
									src="/images/5.jpg"
									alt=""
									className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[448px] rounded-[40px] sm:rounded-[60px] lg:rounded-[103px] object-cover shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)]"
								/>
								<img
									src="/images/6.jpeg"
									alt=""
									className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] rounded-[40px] sm:rounded-[60px] lg:rounded-[77px] object-cover"
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
