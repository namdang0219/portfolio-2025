import Button from "@/components/Button";
import Magnet from "@/components/Magnet";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
	return (
		<div id="about" className="container scroll-m-10">
			<SectionTitle title="私について" subTitle="About" />

			<div>
				<div className="flex sm:flex-col-reverse items-center gap-20 sm:gap-10 mt-14">
					<div className="flex-1">
						<div className="mb-14 sm:mb-8 text-left sm:text-center">
							<p className="mb-4 sm:mb-2.5 font-light text-gray-400 sm:text-sm">
								DANG XUAN NAM
							</p>
							<h4 className="text-4xl uppercase font-light sm:text-2xl">
								ダン　ズアン　ナム
							</h4>
						</div>

						<p className="leading-loose font-light tracking-[3px] sm:px-5 sm:leading-relaxed text-gray-600 text-[17px] w-full max-w-[86%] sm:text-base sm:max-w-[100%] sm:text-center">
							2001年生まれ、ベトナム出身。現在、ECCコンピュータ専門学校に在学中です。
							<br />
							<br />
							フロントエンド開発者として、ReactおよびReact
							Nativeを用いて、直感的で魅力的なUIの構築に取り組んでいます。現在はバックエンドの知識も学びながら、フルスタックエンジニアを目指してスキルを磨いています。
						</p>
					</div>
					<div className="relative w-[320px] sm:w-full aspect-[3/4] shadow-2xl">
						<Image
							src="/assets/homePage/aboutSection.jpg"
							alt="avatar"
							fill
							className="w-full h-full object-cover object-center"
						/>
					</div>
				</div>

				<div className="w-fit mt-10">
					<Magnet>
						<Button
							href="/about"
							text="詳しく見る"
							containerClassName="origin-left"
						/>
					</Magnet>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
