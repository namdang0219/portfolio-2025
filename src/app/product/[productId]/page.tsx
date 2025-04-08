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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { ProductType } from "@/types/ProductType";
import { products } from "@/data/products";
import styled from "styled-components";
import SkillItem, { SkillDataType } from "@/components/item/SkillItem";
import { allSkills } from "@/data/skills";

const TableStyles = styled.div`
	.table-container {
		display: flex;
		padding-block: 32px;
		border-bottom: 1px solid #e2e8f0;
	}
	.table-title {
		flex-shrink: 0;
		color: #84b5c5;
		width: 200px;
		font-weight: 400;
	}
	.table-content {
		flex: 1;
	}
`;

const ProductDetailPage = () => {
	const { productId } = useParams();

	const [slideIndex, setSlideIndex] = useState<number>(0);
	const sliderRef = useRef<Slider>(null);

	const productData = products.find(
		(item) => item?.product_id === productId
	) as ProductType;

	const {
		title,
		screenshots,
		github,
		description,
		teamsize,
		role,
		feature,
		demoVideos,
		techs,
		quiz,
		learned,
		when,
		time,
		link,
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

				<div className="mt-6">
					{/* top container  */}
					<div>
						<h2 className="text-2xl font-semibold tracking-widest">
							{title}
						</h2>

						{/* source code link */}
						<div className="mt-4">
							<span>Githubリンク：</span>
							<Link
								href={github}
								target="_blank"
								className="ml-2 hover:underline text-primary"
							>
								{github}
							</Link>
						</div>

						{/* demo site link */}
						{link && (
							<div className="mt-4">
								<span>サイトリンク：</span>
								<Link
									href={link}
									target="_blank"
									className="ml-2 hover:underline text-primary"
								>
									{link}
								</Link>
							</div>
						)}

						<p className="mt-4 leading-loose text-justify text-gray-600 font-light">
							{description}
						</p>
					</div>

					{/* table field  */}
					<TableStyles className="mt-10 font-light mb-[200px]">
						{/* teamsize  */}
						<div className="table-container">
							<div className="table-title">チームサイズ</div>
							<div className="table-content">{teamsize}</div>
						</div>

						{/* role */}
						<div className="table-container">
							<div className="table-title">担当</div>
							<div className="table-content">{role}</div>
						</div>

						{/* feature */}
						<div className="table-container">
							<div className="table-title">機能</div>
							<div className="table-content">
								{feature.length > 0 &&
									feature.map((f, idx) => (
										<li key={idx}>{f}</li>
									))}
							</div>
						</div>

						{/* demovideos */}
						<div className="table-container">
							<div className="table-title">デモビデオ</div>
							<div className="table-content">
								{!demoVideos || demoVideos.length == 0 ? (
									<div className="text-gray-300">
										データがありません
									</div>
								) : (
									<></>
								)}
							</div>
						</div>

						{/* techs */}
						<div className="table-container">
							<div className="table-title">テクニック</div>
							<div className="table-content flex flex-wrap">
								{techs.length > 0 &&
									techs.map((t, idx) => {
										const techData = allSkills.find(
											(s) => s.name === t
										);
										return (
											<SkillItem
												key={idx}
												canClick={false}
												isLastItem={
													idx === techs.length - 1
												}
												skillData={
													techData as SkillDataType
												}
											/>
										);
									})}
							</div>
						</div>

						{/* quiz */}
						<div className="table-container">
							<div className="table-title">チームサイズ</div>
							<div className="table-content">{teamsize}</div>
						</div>

						{/* learned */}
						<div className="table-container">
							<div className="table-title">勉強になったこと</div>
							<div className="table-content">
								{learned.length > 0 &&
									learned.map((l, idx) => (
										<li key={idx}>{l}</li>
									))}
							</div>
						</div>

						{/* when */}
						<div className="table-container">
							<div className="table-title">実施時間</div>
							<div className="table-content">{when}</div>
						</div>

						{/* time */}
						<div className="table-container">
							<div className="table-title">制作期間</div>
							<div className="table-content">{time}</div>
						</div>
					</TableStyles>

					{/* <div className="mt-10">
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
					</div> */}
				</div>
			</main>

			{/* <Spacer /> */}

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

export default ProductDetailPage;
