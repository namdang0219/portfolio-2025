import { ProductType } from "@/types/ProductType";

export const myMovies: ProductType = {
	product_id: "20240320",
	teamsize: "1人",
	role: "coding & design",
	title: "My Movies | 映画情報検索サイト",
	category: "self_project",
	type: "frontend",
	description:
		"My Moviesは、The Movie DBの無料APIを利用したプロジェクトで、ユーザーが話題の映画、現在上映中の映画、そして近日公開予定の映画を検索できるアプリです。ユーザーはアカウントを作成し、ログインすることで、お気に入りの映画を保存し、時間のあるときに見返すことができます。",
	feature: [
		"Redux ToolkitとRedux Persistを使用して、設定状態を保存し、次回以降も利用できるようにしています。",
		"Firebaseをデータベースとして使用し、ユーザー情報やユーザーが保存した映画の情報を管理しています。",
	],
	demoVideos: [],
	link: "https://browse-movies-alpha.vercel.app/",
	banner: "/assets/products/myMovies/banner.jpg",
	screenshots: [
		"/assets/products/myMovies/image00.jpg",
		"/assets/products/myMovies/image01.jpg",
		"/assets/products/myMovies/image02.jpg",
		"/assets/products/myMovies/image03.jpg",
		"/assets/products/myMovies/image04.jpg",
	],
	github: "https://github.com/namdang0219/browse-movies",
	techs: ["React", "Tailwind", "Redux Toolkit", "Typescript", "Firebase"], // ['React', 'Next JS', 'Tailwind', 'Sass', 'Node JS', 'Firebase', 'MySQL', 'PHP', 'React Native', 'Expo', 'Github', 'Typescript', 'Redux Toolkit', 'VS Code', 'Figma', 'Illustrator', 'Photoshop']
	quiz: [{ question: "", answer: "string" }],
	learned: [
		"Redux ToolkitとRedux Persistを組み合わせてアプリの状態を保存する方法",
		"映画の一覧情報や詳細情報をAPIから取得する方法",
		"映画情報を整理して効率的にデータベースに保存する方法",
	],
	when: "２年生前の春休み", // format: ...年生・"前期" | "後期"
	time: "２ヶ月", // format: ...ヶ月
};
