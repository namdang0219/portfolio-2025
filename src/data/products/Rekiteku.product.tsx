import { ProductType } from "@/types/ProductType";

export const rekiteku: ProductType = {
	product_id: "20240720",
	teamsize: "4人",
	role: "coding & design",
	title: "Rekiteku | 福岡歴史ツアー管理",
	category: "school_work",
	description:
		"Rekiteku（レキテク）は、福岡県の観光ツアーに関する情報サイトであり、ユーザーは各観光地の情報や、それに関連するツアーを調べることができます。私は、サイト管理者向けの管理画面の制作を担当しました。管理者はこの管理画面を通じて、公式サイトに掲載される各コンテンツの追加・編集を行うことができます。",
	feature: [
		"Firebaseのデータベースを使用することで、管理者がコンテンツを追加・編集した際、ウェブサイトの内容が常に最新の状態に自動で更新されます。",
		"管理者はコンテンツの追加・編集だけでなく、記事の表示順を自由に並び替えることも可能です。これにより、特に宣伝したいツアーを優先的に表示し、ユーザーに素早く届けることができます。",
	],
	demoVideos: [],
	link: "https://reki-teku.vercel.app/manager/home",
	banner: "https://i.pinimg.com/736x/a8/d4/8a/a8d48a4aee0b62d3a7425545628cd7e8.jpg",
	screenshots: [
		"https://i.pinimg.com/736x/11/03/be/1103bed792d0857ecc94b0af928195ab.jpg",
		"https://i.pinimg.com/736x/75/77/ce/7577ce4c47ed96045f6ad801010d128a.jpg",
		"https://i.pinimg.com/736x/72/e4/43/72e44366914d903a2fdad1914b37c72e.jpg",
	],
	github: "https://github.com/namdang0219/team_reactors",
	techs: ["React", "Tailwind", "Firebase", 'Github'], // ['React', 'Next JS', 'Tailwind', 'Sass', 'Node JS', 'Firebase', 'MySQL', 'PHP', 'React Native', 'Expo', 'Github', 'Typescript', 'Redux Toolkit', 'VS Code', 'Figma', 'Illustrator', 'Photoshop']
	quiz: [{ question: "", answer: "string" }],
	learned: [
		"Google Apps Scriptの基本的な使い方を学びました。最初はGoogle Sheetsをデータベースとして、Google Driveをストレージとして利用する方法を試しました（ただし、CORSのエラーによりデプロイに失敗したため、Firebaseの使用に切り替えました）。",
		"FirebaseのFirestoreデータベースとStorageを使って、ウェブサイトのコンテンツを管理する方法を習得しました。",
		"Reactでの開発において、以下のライブラリの使い方を学びました：react-dnd：ドラッグ＆ドロップ機能の実装 | react-quill：リッチテキストエディタの実装 | react-toastify、sweetalert2：通知・アラート機能の実装",
	],
	when: "２年生の前期", // format: ...年生・"前期" | "後期"
	time: "２ヶ月", // format: ...ヶ月
};
