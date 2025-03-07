import { ReactNode } from "react";

export const experiences: {
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
