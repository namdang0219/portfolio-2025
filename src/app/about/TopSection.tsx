import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const TopSection = () => {
	return (
		<div id="top" className="flex gap-24 container mb-20">
			<div className="flex-1 pt-20">
				<SectionTitle title="私について" subTitle="About" />

				<div className="mt-14">
					<h4 className="text-[30px] mb-10">
						ダン ズアン ナム
						<span className="ml-6 text-gray-400 text-base font-light">
							DANG XUAN NAM
						</span>
					</h4>

					<p className="leading-loose font-light tracking-[2.5px] text-gray-600 text-[17px] text-justify">
						2001年生まれ、ベトナム🇻🇳出身のナムです。
						<br />
						<br />
						ECCコンピュータ専門学校に通いながら、コンビニでアルバイトをしています。
						<br />
						<br />
						高校生の頃から綺麗なWebサイトを見るのが好きで、自分でも作ってみたいと思うようになりました。将来はWebサイトの制作に携わることを目指しています。
						デザインもコーディングも好きですが、特にコーディングが得意なため、現在はフロントエンドを中心に勉強しています。最近はWeb全体の開発にも興味を持ち、バックエンドのAPIやデータベース管理にも挑戦中です。
						<br />
						<br />
						自分の作ったWebサービスが多くの人に使ってもらえるよう、これからも頑張っていきます！
					</p>
				</div>
			</div>

			<div className="relative h-screen w-[400px] bg-slate-100">
				<Image
					src="/assets/aboutPage/about_head.JPG"
					alt="about-heading-img"
					fill
					className="w-full h-full object-center object-cover"
				/>
			</div>
		</div>
	);
};

export default TopSection;
