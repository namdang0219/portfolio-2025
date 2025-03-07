"use client";

import SectionTitle from "@/components/SectionTitle";
import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import HeaderNavigation from "@/module/HeaderNavigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
// import { useCollapse } from "react-collapsed";
import { Icon } from "@iconify-icon/react";
import { experiences } from "@/data/experiences";

const AboutPage = () => {
	const {} = useRouter();

	// const { getToggleProps, getCollapseProps, isExpanded } = useCollapse({
	// 	defaultExpanded: true,
	// });

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

					{/* collapse example */}
					<div>
						{/* <button {...getToggleProps()}>
							{isExpanded ? "Collapse" : "Expand"}
						</button>
						<section {...getCollapseProps()}>
							Collapsed content 🙈
						</section> */}
					</div>

					<div>
						{skills.map((s, index) => (
							<div
								key={index}
								className={`flex gap-10 py-8 border-b ${
									index === skills.length - 1
										? "border-b-transparent"
										: "border-b-slate-200"
								}`}
							>
								<span className="text-primary w-[200px] mt-3">
									{s.category}
								</span>

								<div className="flex flex-wrap flex-1">
									{s.skillList.map((item, idx) => (
										<div
											key={idx}
											className={`inline-block`}
										>
											<div className="flex items-center">
												<div className="flex items-center gap-1.5 hover:bg-slate-100 rounded-lg cursor-pointer px-3 py-1">
													<span className="text-[30px] leading-none mt-1">
														{item.icon}
													</span>
													<span className="text-lg font-light">
														{item.name}
													</span>
												</div>
												{idx !==
													s.skillList.length - 1 && (
													<span className="mx-2 font-thin text-2xl leading-none -mt-1">
														/
													</span>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* <Spacer /> */}

				<div id="contact">
					<Footer />
				</div>
			</main>
		</div>
	);
};

const skills: {
	category: string;
	skillList: {
		name: string;
		level: string;
		icon: ReactNode;
	}[];
}[] = [
	// frontend
	{
		category: "フロントエンド",
		skillList: [
			{
				name: "React",
				level: "80%",
				icon: <Icon icon="logos:react" />,
			},
			{
				name: "Next JS",
				level: "80%",
				icon: <Icon icon="logos:nextjs-icon" />,
			},
			{
				name: "Tailwind",
				level: "80%",
				icon: <Icon icon="vscode-icons:file-type-tailwind" />,
			},
			{
				name: "Sass",
				level: "80%",
				icon: <Icon icon="devicon:sass" />,
			},
		],
	},
	// backend
	{
		category: "バックエンド",
		skillList: [
			{
				name: "Node JS",
				level: "80%",
				icon: <Icon icon="material-icon-theme:nodejs" />,
			},
			{
				name: "Firebase",
				level: "80%",
				icon: <Icon icon="devicon:firebase" />,
			},
			{
				name: "MySQL",
				level: "80%",
				icon: <Icon icon="logos:mysql" />,
			},
			{
				name: "PHP",
				level: "80%",
				icon: <Icon icon="material-icon-theme:php" />,
			},
		],
	},
	// application
	{
		category: "モバイルアプリ",
		skillList: [
			{
				name: "React Native",
				level: "80%",
				icon: <Icon icon="devicon:reactnative-wordmark" />,
			},
			{
				name: "Expo",
				level: "80%",
				icon: <Icon icon="file-icons:expo" />,
			},
		],
	},
	// tools
	{
		category: "その他",
		skillList: [
			{
				name: "VS Code",
				level: "80%",
				icon: <Icon icon="vscode-icons:file-type-vscode" />,
			},
			{
				name: "Typescript",
				level: "80%",
				icon: (
					<Icon icon="vscode-icons:file-type-typescript-official" />
				),
			},
			{
				name: "Redux Toolkit",
				level: "80%",
				icon: (
					<Icon icon="logos:redux" />
				),
			},
		],
	},
	// design
	{
		category: "デザイン",
		skillList: [
			{
				name: "Figma",
				level: "80%",
				icon: <Icon icon="material-icon-theme:figma" />,
			},
			{
				name: "Illustrator",
				level: "80%",
				icon: <Icon icon="skill-icons:illustrator" />,
			},
			{
				name: "Photoshop",
				level: "80%",
				icon: <Icon icon="skill-icons:photoshop" />,
			},
		],
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
