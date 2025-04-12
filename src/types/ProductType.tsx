export const product_categories = [
	"all", // すべて
	"school_lesson", // 学校の授業
	"school_work", // 学校の作品
	"self_project", // 自分の作品
	"self_training", // 自分の練習
] as const;

export type ProductType = {
	product_id: string;
	teamsize: "1人" | "2人" | "3人" | "4人";
	role: "coding" | "design" | "coding & design";
	title: string;
	category: (typeof product_categories)[number];
	description: string;
	feature: string[];
	demoVideos?: string[];
	banner: string;
	screenshots: string[];
	github: string;
	link?: string;
	techs: string[]; // ['React', 'Next JS', 'Tailwind', 'Sass', 'Node JS', 'Firebase', 'MySQL', 'PHP', 'React Native', 'Expo', 'Github', 'Typescript', 'Redux Toolkit', 'VS Code', 'Figma', 'Illustrator', 'Photoshop']Ï
	quiz: { question: string; answer: string }[];
	learned: string[];
	when: string; // format: ...年生・"前期" | "後期"
	time: string; // format: ...ヶ月
};
