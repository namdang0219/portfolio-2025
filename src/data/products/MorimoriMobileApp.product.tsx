import { ProductType } from "@/types/ProductType";

export const morimoriMobileApp: ProductType = {
	product_id: "20250210",
	teamsize: "4人",
	role: "coding & design",
	type: "mobile",
	contributions: [
		"アプリ内の各画面のUIデザインに参加しました。",
		"アプリ内のUI実装および、ルーティング（画面遷移）の構築を担当しました。",
		"Firebase Authenticationを使用して、ユーザーの新規登録・ログイン・ログアウト機能を実装しました。",
		"アプリ内で使用するデータの保存構造（データベース）の設計を担当しました。",
		"Redux Persistを使用し、ユーザーデータをローカルに保存することで、アプリ再起動後もデータが保持されるようにしました。",
		"カメラ機能と、撮影後の写真編集機能を開発し、撮影した写真をアプリ内のアルバムや端末のカメラロールに保存できるようにしました。",
		"アルバムの作成・編集・削除機能、およびアルバムをお気に入りに追加する機能を実装しました。",
	],
	title: "Morimori Mobile App | 写真共有アルバムウェブアプリ",
	category: "school_work",
	description:
		"Morimori Webアプリは、16〜30歳の若者を対象としたウェブアプリです。このアプリのコンセプトは、友達と一緒に共有アルバムを作成し、遊びに行った時の写真やグループ写真を一つのアルバムにアップロードして思い出を共有・保存できるというものです。さらに、ユーザー同士で写真を共同編集し、ステッカーやメモを追加して思い出をより楽しく残すことができます。また、React Nativeで開発されたモバイル版では、写真撮影機能も備えており、リアルタイムでステッカーの追加や簡単な編集が可能です。",
	feature: [
		"ステッカー付きの写真をその場で撮影でき、撮影後にもステッカーを追加したり、手書きで描き込みをしたり、明るさや暗さを調整するなど、基本的なカメラアプリのような編集機能を備えています。",
		"Firebaseのリアルタイム機能を活用することで、同じアルバム内のユーザー同士が写真をすばやく同期・共有できます。",
		"オリジナルステッカーが豊富に用意されており、簡単に追加できるほか、位置やサイズの調整も直感的に行えます。",
	],
	demoVideos: [],
	// link: "https://morimori-webapp.vercel.app/",
	banner: "https://i.pinimg.com/736x/51/18/e4/5118e4fd5c2dffbbd54e53b6b053e87b.jpg",
	screenshots: [
		"https://i.pinimg.com/736x/6c/18/62/6c1862fc3f25c01e65f2a46648c1f5ce.jpg",
		"https://i.pinimg.com/736x/c2/fd/c7/c2fdc709237d8637de99fd11a153335b.jpg",
		"https://i.pinimg.com/736x/6f/7c/60/6f7c604762c272bbdb4de490794fac19.jpg",
	],
	github: "https://github.com/namdang0219/team-project-2024",
	techs: [
		"React Native",
		"Expo",
		"Typescript",
		"Redux Toolkit",
		"Firebase",
		"Github",
		"Figma",
	], // ['React', 'Next JS', 'Tailwind', 'Sass', 'Node JS', 'Firebase', 'MySQL', 'PHP', 'React Native', 'Expo', 'Github', 'Typescript', 'Redux Toolkit', 'VS Code', 'Figma', 'Illustrator', 'Photoshop']
	quiz: [{ question: "", answer: "string" }],
	learned: [
		"React NativeアプリでのAsyncStorageの使い方を学び、アプリの状態やデータを保存・管理する方法を習得しました。",
		"画像や必要なファイルを保存するための基本的なFile Systemの使い方を理解しました。",
		"カメラ機能に関する開発経験を積み、写真撮影、フラッシュ、ズーム、明るさ調整、ユーザーの顔に合わせてステッカーをトラッキングする機能などを実装しました。",
		"ジェスチャー操作を活用し、画像の拡大・回転・移動など、基本的な編集機能を実装しました。",
		"モバイルアプリ向けのマップUIを構築し、GoogleのAPIを使ってルート案内機能を実装する方法を学びました。",
	],
	when: "２年生の後期", // format: ...年生・"前期" | "後期"
	time: "3ヶ月", // format: ...ヶ月
};
