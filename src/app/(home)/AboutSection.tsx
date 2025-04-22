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
				<div className="flex items-center gap-20 mt-14">
					<div className="flex-1">
						<div className="mb-14">
							<p className="mb-4 font-light text-gray-400">
								DANG XUAN NAM
							</p>
							<h4 className="text-4xl uppercase font-light">
								ダン　ズアン　ナム
							</h4>
						</div>

						<p className="leading-loose font-light tracking-[3px] text-gray-600 text-[17px] w-full max-w-[86%] text-justify">
							2001年生まれ、ベトナム出身。現在、ECCコンピュータ専門学校に在学中です。
							<br />
							<br />
							フロントエンド開発者として、ReactおよびReact
							Nativeを用いて、直感的で魅力的なUIの構築に取り組んでいます。現在はバックエンドの知識も学びながら、フルスタックエンジニアを目指してスキルを磨いています。
						</p>
					</div>
					<div className="relative w-[320px] aspect-[3/4] shadow-2xl">
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
