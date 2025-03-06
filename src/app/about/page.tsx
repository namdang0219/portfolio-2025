"use client";

import SectionTitle from "@/components/SectionTitle";
import Spacer from "@/components/Spacer";
import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import HeaderNavigation from "@/module/HeaderNavigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const AboutPage = () => {
	const {} = useRouter();

	return (
		<div className="relative">
			<HeaderLogo canGoBack />
			<HeaderNavigation navigations={navigations} />

			<main className="flex flex-col">
				{/* top */}
				<div id="top" className="flex gap-24 container mb-20">
					<div className="flex-1 pt-24">
						<SectionTitle title="私について" subTitle="About" />

						<div className="mt-16">
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
								高校生の頃から綺麗なサイトが好きで、自分で作ることにも興味があり、将来はサイト制作に携わることを目指しています。
								デザインもコーディングも好きですが、特にコーディングが得意なので、フロントエンドを中心に勉強中です。最近はサイト全体の開発にも興味を持ち、バックエンドのAPIやデータベース管理にも挑戦しています。
								<br />
								<br />
								自分が作るWebサービスが多くの人に知ってもらい、使ってもらえるように頑張ります！
							</p>
						</div>
					</div>

					<div className="relative h-screen w-[400px]">
						<Image
							src="/assets/aboutPage/about_head.JPG"
							alt="about-heading-img"
							fill
							className="w-full h-full object-center object-cover"
						/>
					</div>
				</div>

				{/* experience  */}
				<div id="experience" className="bg-slate-50 py-14">
					<div className="container">
						<SectionTitle
							title="学歴と開発経験"
							subTitle="Experience"
						/>

						{/* experience main container  */}
						<div>
							{experiences.map((e, index) => (
								<div
									key={index}
									className={`flex py-8 border-b ${
										index === experiences.length - 1
											? "border-b-transparent"
											: "border-b-slate-200"
									}
                                
										`}
								>
									<div className="w-[200px] text-primary">
										{`${e.year}.${String(e.month).padStart(
											2,
											"0"
										)}`}
									</div>

									<div className="flex-1">
										<div className="flex items-end mb-6">
											<h4 className="text-xl font-medium tracking-wider flex-1 text-slate-800">
												{e.title}{" "}
											</h4>
											<span className="text-base font-light ml-2 text-slate-400">
												{e.subtitle}
											</span>
										</div>
										<p className="tracking-[0.2em] text-slate-400 font-light leading-relaxed text-justify">
											{e.content}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div id="skill" className="py-14 container mt-10">
					<SectionTitle title="スキル" subTitle="Skill" />

					<div></div>
				</div>

				<div id="contact">
					<Footer />
				</div>

				<Spacer />
			</main>
		</div>
	);
};

const experiences: {
	title: string;
	subtitle: string;
	content: ReactNode;
	year: number;
	month: number;
}[] = [
	{
		title: "来日・日生日本語学園 入学",
		subtitle: "（2022年3月 卒業）",
		content: (
			<>
				日生日本語学園で 1年6ヶ月間学び、その間に
				<em className="text-cyan-500">
					日本語能力試験（JLPT）N3・N2に合格
				</em>
				しました。
			</>
		),
		year: 2020,
		month: 11,
	},
	{
		title: "ECC国際外語専門学校 入学",
		subtitle: "（2023年3月 卒業）",
		content: (
			<>
				ECCコンピュータ専門学校の入学試験に不合格だったため、もう1年間ECC国際外語専門学校で日本語を学びながら、再挑戦の準備をしました。在学中に
				<em className="text-cyan-500">
					日本語能力試験（JLPT）N1に合格
				</em>
				し、
				<em className="text-cyan-500">日本留学試験で250点を取得</em>
				しました。
			</>
		),
		year: 2022,
		month: 4,
	},
	{
		title: "ECCコンピュータ専門学校 入学",
		subtitle: "（2026年3月 卒業見込み）",
		content: (
			<>
				ECCコンピュータ専門学校では、デザインと開発の基礎知識を学びました。例えば、HTML、CSS、JavaScript、PHP、Adobe
				Illustrator・Photoshop
				などです。学校以外でも、YouTubeやオンラインの資料を活用し、最新の技術である
				<em className="text-cyan-500">React</em>{" "}
				を独学しました。その後、モバイルアプリ開発にも挑戦したくなり、
				<em className="text-cyan-500">React Native</em>{" "}
				も学び始めました。
				<br />
				<br />
				約1年半、ReactとReact
				Nativeの開発を続け、スキルを磨いてきました。現在はフルスタックエンジニアを目指し、
				<em className="text-cyan-500">バックエンド開発（Node.js）</em>
				の勉強も始めています。
			</>
		),
		year: 2023,
		month: 4,
	},
];

const navigations: { label: string; href: string }[] = [
	{
		label: "トップ",
		href: "/about/#top",
	},
	{
		label: "開発経験",
		href: "/about/#experience",
	},
	{
		label: "スキル",
		href: "/about/#skill",
	},
	{
		label: "コンタクト",
		href: "/about/#contact",
	},
];

export default AboutPage;
