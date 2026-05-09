import Container from "./Container";
import FooterColumn from "../ui/FooterColumn";

const img4455958657592294930831097627784598206720464NPhotoroom1 =
	"https://www.figma.com/api/mcp/asset/f46004db-779e-4b0b-8263-66e3d87169e3";

export default function Footer() {
	return (
		<footer className="pt-[60px] pb-[40px] md:pt-[80px] md:pb-[60px] lg:pt-[100px] lg:pb-[80px]">
			<Container>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-[32px] sm:gap-[48px] items-start">
					<div>
						<img
							src={
								img4455958657592294930831097627784598206720464NPhotoroom1
							}
							alt="RUI"
							className="size-[114px]"
						/>
						<p className="mt-[28px] text-[15px] font-medium leading-[1.6] text-[#666] max-w-[320px]">
							Delicie-se com a arte culinária africana, onde cada
							prato é uma obra-prima.
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
						className="max-w-[220px]"
						items={[
							"restauranteuniversitarioitener@gmail.com",
							"+244 945 288 164",
							"@rui.unia",
						]}
					/>
				</div>

				<div className="mt-[60px] md:mt-[100px] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 pt-4 border-t border-gray-100">
					<div className="flex items-center gap-[14px] sm:gap-[18px] order-2 sm:order-1">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center size-[48px] rounded-full bg-[#1877F2] cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
							aria-label="Facebook"
						>
							<svg
								viewBox="0 0 24 24"
								fill="white"
								className="w-[22px] h-[22px]"
							>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center size-[48px] rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77729] cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
							aria-label="Instagram"
						>
							<svg
								viewBox="0 0 24 24"
								fill="white"
								className="w-[22px] h-[22px]"
							>
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
							</svg>
						</a>
						<a
							href="https://youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center size-[48px] rounded-full bg-[#FF0000] cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
							aria-label="YouTube"
						>
							<svg
								viewBox="0 0 24 24"
								fill="white"
								className="w-[22px] h-[16px]"
							>
								<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
							</svg>
						</a>
					</div>

					<div className="flex items-center justify-center w-full text-[14px] sm:text-[16px] font-medium text-[#666] tracking-wide order-1 sm:order-2">
						<span>
							Copyright © 2026 RUI UNIA | All rights reserved
						</span>
					</div>
				</div>
			</Container>
		</footer>
	);
}
