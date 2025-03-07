import { Icon } from "@iconify-icon/react";
import { SkillType } from "@/types/SkillType";

export const skills: SkillType[] = [
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
				name: "Github",
				level: "80%",
				icon: <Icon icon="mdi:github" />,
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
				icon: <Icon icon="logos:redux" />,
			},
			{
				name: "VS Code",
				level: "80%",
				icon: <Icon icon="vscode-icons:file-type-vscode" />,
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
