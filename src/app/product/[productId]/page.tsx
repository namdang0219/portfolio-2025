/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SectionTitle from "@/components/SectionTitle";
import Spacer from "@/components/Spacer";
import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, {
	FC,
	PropsWithChildren,
	RefObject,
	useRef,
	useState,
} from "react";
import { categories } from "../page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const ProductDetailPage = () => {
	const { productId } = useParams();
	console.log("🚀 ~ ProductDetailPage ~ productId:", productId);

	const [slideIndex, setSlideIndex] = useState<number>(0);
	const sliderRef = useRef<Slider>(null);

	const productData: ProductType = demo;

	const {
		product_id,
		title,
		screenshots,
		banner,
		github,
		category,
		...renderTableDatas
	} = productData;

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	};

	return (
		<div className="relative">
			<HeaderLogo canGoBack />
			{/* <Navigations navigations={navigations} /> */}

			<main className="container pt-20">
				<SectionTitle
					title="作品の詳細"
					subTitle="Product Detail"
					containerClassName="mb-8"
				/>

				<div className="relative overflow-hidden bg-cyan-500 rounded-2xl group aspect-[2/1]">
					<Slider
						ref={sliderRef}
						{...settings}
						initialSlide={0}
						afterChange={(c) => setSlideIndex(c)}
					>
						{screenshots.map((screenshot, idx) => (
							<div key={idx} className="relative aspect-[2/1]">
								<Image
									src={screenshot}
									alt="product-image"
									fill
									className="object-cover object-center w-full h-full"
									priority
								/>
							</div>
						))}
					</Slider>

					<div className="transition-all opacity-0 cursor-default group-hover:opacity-100">
						<SliderButton
							sliderRef={sliderRef}
							customClassName="left-4"
							onClick={() => sliderRef.current?.slickPrev()}
						>
							<FaChevronLeft size={20} />
						</SliderButton>
						<SliderButton
							sliderRef={sliderRef}
							customClassName="right-4"
							onClick={() => sliderRef.current?.slickNext()}
						>
							<FaChevronRight size={20} />
						</SliderButton>
						<div className="absolute px-2 py-1 text-sm text-white -translate-x-1/2 bg-black rounded-full bottom-4 left-1/2 backdrop-blur-lg bg-opacity-40 ">{`${
							slideIndex + 1
						}/${productData.screenshots.length}`}</div>
					</div>
				</div>

				{/* <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
					<Image
						src={productData.banner}
						alt="product-image"
						fill
						className="object-cover object-center w-full h-full"
					/>
				</div> */}

				<div className="mt-6">
					<div>
						<h2 className="text-2xl font-semibold tracking-widest">
							{productData.title}
						</h2>

						<div className="mt-4">
							<span>Githubリンク：</span>
							<Link
								href={productData.github}
								target="_blank"
								className="ml-2 hover:underline text-primary"
							>
								{productData.github}
							</Link>
						</div>
					</div>

					<div className="mt-10">
						{Object.entries(renderTableDatas).map(
							([key, value], idx) => (
								<div
									key={idx}
									className={`flex py-8 border-b ${
										idx ===
										Object.entries(renderTableDatas)
											.length -
											1
											? "border-b-transparent"
											: "border-b-slate-200"
									}`}
								>
									<div className="text-primary w-[200px] shrink-0">
										{key}
									</div>
									<div className="flex-1">
										{Array.isArray(value) ? (
											typeof value[0] === "object" ? (
												<ul>
													{value.map((v: any, i) => (
														<li
															key={i}
														>{`Q: ${v.question} => A: ${v.answer}`}</li>
													))}
												</ul>
											) : (
												<ul>
													{value.map((v: any, i) => (
														<li key={i}>{v}</li>
													))}
												</ul>
											)
										) : (
											value
										)}
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</main>

			<Spacer />

			<div>
				<Footer />
			</div>
		</div>
	);
};

const SliderButton: FC<
	PropsWithChildren & {
		sliderRef: RefObject<Slider | null>;
		customClassName?: string;
		onClick: () => void;
	}
> = ({ children, sliderRef, customClassName, onClick }) => {
	const defaultClassName =
		"absolute flex items-center justify-center w-10 text-white transition-all -translate-y-1/2 bg-black rounded-full cursor-pointer top-1/2 bg-opacity-30 backdrop-blur-lg aspect-square hover:scale-110";

	return (
		<div
			className={`${defaultClassName} ${customClassName}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export type ProductType = {
	product_id: string;
	title: string;
	category: (typeof categories)[number];
	description: string;
	feature: string[];
	demoVides?: string[];
	banner: string;
	screenshots: string[];
	github: string;
	techs: string[]; // ['React', 'Next JS', 'Tailwind', 'Sass', 'Node JS', 'Firebase', 'MySQL', 'PHP', 'React Native', 'Expo', 'Github', 'Typescript', 'Redux Toolkit', 'VS Code', 'Figma', 'Illustrator', 'Photoshop']Ï
	quiz: { question: string; answer: string }[];
	learned: string[];
	when: string; // format: ...年生・"前期" | "後期"
	time: string; // format: ...ヶ月
};

const demo: ProductType = {
	product_id: "1",
	title: "モリモリ（写真編集アプリ）",
	category: "lesson",
	description: "lorem ipsum dolor sit amet, consectetur",
	feature: ["featuer 1", "featuer 1", "featuer 1"],
	demoVides: [
		"https://www.youtube.com/embed/jxcSAXdgx7c?si=rIqYEvghR3FWzMNm&amp",
		"https://www.youtube.com/embed/jxcSAXdgx7c?si=rIqYEvghR3FWzMNm&amp",
	],
	banner: "https://i.pinimg.com/736x/24/e3/c6/24e3c6f584da5b63dfb1132e9010a0fb.jpg",
	screenshots: [
		"https://i.pinimg.com/736x/24/e3/c6/24e3c6f584da5b63dfb1132e9010a0fb.jpg",
		"https://i.pinimg.com/736x/43/89/49/4389493a6712dcdec289e4b8bd25f1e9.jpg",
		"https://i.pinimg.com/736x/df/f8/91/dff891a8360a01fe2f73f537856e60fa.jpg",
	],
	github: "https://github.com/namdang0219",
	techs: ["React", "Tailwind", "Sass"], // ['React', 'Next JS', 'Tailwind', 'Sass', 'Node JS', 'Firebase', 'MySQL', 'PHP', 'React Native', 'Expo', 'Github', 'Typescript', 'Redux Toolkit', 'VS Code', 'Figma', 'Illustrator', 'Photoshop']Ï
	quiz: [
		{
			question: "How Can u know this question",
			answer: "because i want to find this item",
		},
	],
	learned: ["Learned 1", "Learned 2"],
	when: "１年生・前期", // format: ...年生・"前期" | "後期"
	time: "２ヶ月", // format: ...ヶ月
};

const products: ProductType[] = [
	
]

export default ProductDetailPage;
