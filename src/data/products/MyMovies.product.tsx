import { ProductType } from "@/types/ProductType";

export const myMovies: ProductType = {
	product_id: "20240320",
    teamsize: '1人',
    role: 'coding & design',
	title: "My Movies",
	category: "project",
	description:
		"My Moviesは、The Movie DBの無料APIを利用したプロジェクトで、ユーザーが話題の映画、現在上映中の映画、そして近日公開予定の映画を検索できるアプリです。ユーザーはアカウントを作成し、ログインすることで、お気に入りの映画を保存し、時間のあるときに見返すことができます。",
	feature: [
		"Redux ToolkitとRedux Persistを使用して、設定状態を保存し、次回以降も利用できるようにしています。",
		"Firebaseをデータベースとして使用し、ユーザー情報やユーザーが保存した映画の情報を管理しています。",
	],
	demoVideos: [],
	link: "https://browse-movies-alpha.vercel.app/",
	banner: "https://i.pinimg.com/736x/2a/a0/0a/2aa00a539b20e04989e7e008e3864348.jpg",
	screenshots: [
		"https://i.pinimg.com/736x/82/ef/e9/82efe9cbbd0916a9bdea45d3017b337e.jpg",
		"https://i.pinimg.com/736x/eb/0e/f1/eb0ef1e19909cb675c9e155739cf2a6d.jpg",
		"https://i.pinimg.com/736x/3d/39/18/3d391869d746ed4309a14f5d2c5eaf87.jpg",
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
