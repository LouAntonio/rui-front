import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { ChevronDown, PhoneCall } from "lucide-react";
import {
	categoryService,
	type Category,
} from "../../services/category.service";

const imgLogo =
	"https://www.figma.com/api/mcp/asset/f46004db-779e-4b0b-8263-66e3d87169e3";

export default function Header() {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await categoryService.list({ limit: 10 });
				setCategories(response.data.categories);
			} catch (error) {
				console.error("Failed to fetch categories:", error);
			}
		}
		fetchCategories();
	}, []);

	return (
		<header className="pt-[20px] pb-[20px] sticky top-0 bg-[#fcfcfc] z-50 shadow-sm">
			<Container>
				<div className="flex items-center justify-between gap-[20px]">
					<Link to="/">
						<img
							src={imgLogo}
							alt="RUI"
							className="size-[64px] object-cover sm:size-[88px]"
						/>
					</Link>
					<nav className="hidden lg:flex font-['Poppins'] text-[16px] text-[#272727] gap-[32px]">
						<ul className="flex items-center gap-[32px]">
							<li>
								<Link
									className="inline-flex items-center leading-none text-[#ff0202] transition-colors hover:text-[#ff0202]"
									to="/"
								>
									Ínicio
								</Link>
							</li>
							<li className="group relative">
								<Link
									to="/menu"
									className="inline-flex items-center gap-[8px] leading-none transition-colors hover:text-[#ff0202]"
									aria-haspopup="true"
								>
									Menu
									<ChevronDown className="h-[14px] w-[14px] text-[#272727] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
								</Link>
								<div className="hidden pt-[12px] group-hover:block group-focus-within:block lg:absolute lg:left-0 lg:top-full">
									<ul className="w-[220px] rounded-[16px] border border-[rgba(0,0,0,0.08)] bg-white px-[8px] py-[12px] shadow-[0px_14px_40px_-12px_rgba(0,0,0,0.25)]">
										{categories.map((category, index) => (
											<React.Fragment key={category.id}>
												<li className="flex items-center gap-[12px] px-[12px] py-[10px] rounded-[10px] text-[16px] text-[#272727] font-medium transition-all duration-200 cursor-pointer hover:bg-[#fff5f5] hover:text-[#ff0202]">
													<Link to={`/menu?category=${category.id}`} className="w-full block">
														{category.name}
													</Link>
												</li>
												{index <
													categories.length - 1 && (
													<li className="px-[12px] py-[8px]">
														<span className="block h-[1px] w-full bg-[rgba(0,0,0,0.08)]" />
													</li>
												)}
											</React.Fragment>
										))}
										{categories.length === 0 && (
											<li className="px-[12px] py-[10px] text-center text-[14px] text-gray-500">
												A carregar...
											</li>
										)}
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
					<div className="flex items-center gap-[14px]">
						<button className="hidden sm:flex items-center gap-[10px] rounded-[40px] bg-[#ff0202] px-[16px] py-[8px] font-['Poppins'] text-[16px] text-white">
							<PhoneCall className="h-[18px] w-[18px] text-white" />
							Contacto
						</button>
						<button className="flex lg:hidden items-center justify-center w-[40px] h-[40px] rounded-lg bg-[#ff0202] text-white">
							<svg
								className="w-[24px] h-[24px]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
}
