import { ProductType } from "@/types/ProductType";

export const morimoriWebApp: ProductType = {
	product_id: "20240628",
	teamsize: "4人",
	role: "coding & design",
	contributions: [
		"アプリのUIデザインや、データベース構造の設計に参加しました。",
		"ログイン・サインイン・ログアウトなどの認証機能の実装を担当しました。",
		"写真や関連データのアップロード・管理機能をFirebaseのデータベースで実装しました。",
		"写真編集機能では、画像の属性（明るさ・彩度など）の調整や、ステッカーの追加・編集・削除機能を開発しました。",
		"アプリ内のUI構築および画面遷移（ルーティング）の実装も担当しました。",
	],
	title: "Morimori Web App | 写真共有アルバムウェブアプリ",
	category: "school_work",
	description:
		"Morimori Webアプリは、16〜30歳の若者を対象としたウェブアプリです。このアプリのコンセプトは、友達と一緒に共有アルバムを作成し、遊びに行った時の写真やグループ写真を一つのアルバムにアップロードして思い出を共有・保存できるというものです。さらに、ユーザー同士で写真を共同編集し、ステッカーやメモを追加して思い出をより楽しく残すことができます。また、React Nativeで開発されたモバイル版では、写真撮影機能も備えており、リアルタイムでステッカーの追加や簡単な編集が可能です。",
	feature: [
		"Firebaseのリアルタイム機能を活用することで、同じアルバム内のユーザー同士が写真をすばやく同期・共有できます。",
		"オリジナルステッカーが豊富に用意されており、簡単に追加できるほか、位置やサイズの調整も直感的に行えます。",
	],
	demoVideos: [],
	link: "https://morimori-webapp.vercel.app/",
	banner: "https://i.pinimg.com/736x/52/29/90/5229900b46c784b85e5dbb558b70eccb.jpg",
	screenshots: [
		"https://i.pinimg.com/736x/ea/31/5b/ea315b68e0ab4d9793e0b2729910d58e.jpg",
		"https://i.pinimg.com/736x/ab/f8/fa/abf8fa4ae5454f47fb5bd5031c6240ad.jpg",
		"https://i.pinimg.com/736x/fb/55/1d/fb551dff4e20e7e2030fbfb8afb2c502.jpg",
	],
	github: "https://github.com/namdang0219/morimori-webapp",
	techs: ["React", "Tailwind", "Typescript", "Firebase", "Figma"], // ['React', 'Next JS', 'Tailwind', 'Sass', 'Node JS', 'Firebase', 'MySQL', 'PHP', 'React Native', 'Expo', 'Github', 'Typescript', 'Redux Toolkit', 'VS Code', 'Figma', 'Illustrator', 'Photoshop']
	quiz: [{ question: "", answer: "string" }],
	learned: [
		"CSSを使って、明るさや彩度（saturation）などの画像の基本的なスタイルを調整する方法を学びました。",
		"ReactのContextを活用して、アプリ全体の状態（state）を効率的に管理する方法を習得しました。",
		"データベースの管理方法や、ユーザー同士の関係（リンク）を作成・管理する方法についても学びました。",
	],
	when: "２年生の後期", // format: ...年生・"前期" | "後期"
	time: "２ヶ月", // format: ...ヶ月
};
