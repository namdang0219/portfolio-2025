import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<div id="about" className="min-h-screen container">
			<SectionTitle title="私について" subTitle="#About" />

			<div>
				<div className="flex items-center gap-20 mt-14">
					<div className="flex-1">
						<div className="mb-14">
							<p className="mb-4">ダン ズアン ナム</p>
							<h4 className="text-4xl uppercase font-light">
								dang xuan nam
							</h4>
						</div>

						<p className="leading-loose font-light tracking-[4px] text-gray-600 text-[17px] w-full max-w-[86%] text-justify">
							2001年生まれ、ベトナム出身です。ECCコンピュータ専門学校に通っています。
							<br />
                            <br />
							フロントエンド開発者として、ReactとReact
							Nativeを中心に直感的で魅力的なUIを構築しています。現在、バックエンドの知識も学びながら、フルスタックエンジニアを目指してスキルを磨いています。新しい技術に挑戦するのが好きです。
						</p>
					</div>
					<div className="relative w-[320px] aspect-[3/4] shadow-2xl">
						<Image
							src="https://i.pinimg.com/736x/b3/7b/17/b37b1701c2090fc6944923e969f7cb0e.jpg"
							alt="avatar"
							fill
							className="w-full h-full object-cover object-center"
						/>
					</div>
				</div>

				<div className="w-fit mt-10">
					<Button
						href="/#"
						text="詳しく見る"
						containerClassName="origin-left"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
