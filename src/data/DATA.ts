import { v4 as uuidv4 } from "uuid";

export const DATA: DataType = {
	PRODUCTS: [
		// Morimori
		{
			id: uuidv4(),
			title: "Morimori（モリモリ）",
			description:
				"このアプリは、React Native と Firebase を主な技術として開発されており、iOS と Android の両方で動作するため、開発時間の最適化にもつながりました。\nリーダーとしてこのチームプロジェクトに取り組む中で、タスク管理やチームメンバーとのコミュニケーションなど、チーム開発における実践的な経験を多く積むことができました。特にプロジェクト全体の進捗管理やスケジュール調整など、リーダーとしての役割の重要性を実感しました。\n技術面では、アプリのメイン開発者として、カメラ機能の実装やプロジェクトに必要な外部ライブラリの導入、実際のアプリ開発におけるビルド作業などを通じて、実務的なスキルを身につけることができました。",
			image: "https://i.pinimg.com/736x/3b/78/6f/3b786fa79282a6465379cb97a9ba4060.jpg",
			tags: ["React Native", "TypeScript", "Redux", "Firebase"],
			type: "チーム制作",
			role: "UIデザイン、アプリ開発",
			short_description:
				"モリモリは若者を対象とした写真共有アプリです。グループでのアルバム管理や写真編集・同期ができるほか、マップ機能も搭載されており、他のユーザーが共有した写真を通して、周辺の面白いスポットを素早く見つけることができます。",
			time: "3ヶ月",
			demo_site: "",
			github_link: "https://github.com/namdang0219/team-project-2024",
		},

		// Swaptune
		{
			id: uuidv4(),
			title: "Swaptune（スワップチューン）",
			description:
				"iOS ユーザーにスムーズで快適な体験を提供することを目的に、このアプリは Swift / SwiftUI と Xcode を用いてネイティブで開発しています。これまでに React Native を使ってクロスプラットフォームアプリの開発経験があったため、今回のプロジェクトでは新しい言語に挑戦し、Swift の書き方や iOS ネイティブ開発の特徴を学ぶ良い機会になりました。\n現在、アプリは開発中で、UI の部分はほぼ完成に近づいています。残りの約2ヶ月間で、バックエンドチームと連携を取りながら、最初のアイデア通りの完成度の高いプロダクトを目指して引き続き取り組んでいきます。",
			image: "https://i.pinimg.com/736x/7f/09/40/7f094047f9e20eebcb5050c39478cc9f.jpg",
			tags: ["Swift/SwiftUI", "Firebase"],
			type: "チーム制作",
			role: "フロントエンドエンジニア",
			short_description:
				"スワップチューン は、Spotify の API を活用して開発された iOS アプリで、Instagram のノート機能に近い形で音楽をシェアできるサービスです。すれ違いをコンセプトにしており、ユーザーが外出する際に位置情報をもとに音楽を自動で収集し、その日の気持ちや雰囲気を音楽で共有・発見することができます。",
			time: "1ヶ月",
			demo_site: "",
			github_link: "",
		},

		// My movies
		{
			id: uuidv4(),
			title: "My Movies",
			description:
				"このウェブサイトは、React と Next.js に約1年間取り組んだ後、Redux や Redux Toolkit の理解を深めることを目的に開発しました。\n開発を通して、グローバルステートだけでなく、React アプリにおけるローカルステートの管理（ライト/ダークモードの切り替え、アプリ内言語の変更など）にも実践的に取り組むことができました。現在では、Redux を React Native アプリでも活用しており、より幅広いプロジェクトに応用しています。\nまた、API の仕組みや、実際の開発環境での API の扱い方、そしてプロジェクト内での API 管理の重要性についても理解を深めることができた点は、大きな学びとなりました。",
			image: "https://i.pinimg.com/736x/41/9b/72/419b72d420420af3da454b5c8cf97ccf.jpg",
			tags: ["React", "Redux", "Tailwind CSS", "Firebase"],
			type: "練習用制作",
			role: "デザイン、コーディング",
			short_description:
				"My Movies は、TheMovieDB の豊富な映画 API を活用して、お気に入りの映画を検索・保存できるウェブサイトです。まるで小さなノートのように、いつでも好きな映画を振り返ることができます。",
			time: "2ヶ月",
			demo_site: "",
			github_link: "https://github.com/namdang0219/browse-movies",
		},

		// Rekiteku
		{
			id: uuidv4(),
			title: "Rekiteku（歴てく）",
			description:
				"このプロジェクトでは、私は主にデザインと管理用ダッシュボードの開発を担当しました。コスト面を考慮して、当初は Google Apps Script を使ってデータベースの作成・管理を行う予定でしたが、実際には CORS エラーによりうまく連携できず、最終的には Firebase のサービスを全面的に活用する構成に切り替えました。\n管理画面の開発は今回が初めての経験でしたが、CMS 的な仕組みや管理画面の役割について、実際に手を動かしながら学ぶことができました。まだ未完成な部分も多いですが、実践を通じて理解が深まり、今後はより完成度の高いプロジェクトを目指して取り組んでいきたいと考えています。",
			image: "https://i.pinimg.com/736x/6c/5c/1b/6c5c1b6f52f0665c020badca1433496a.jpg",
			tags: ["React", "Tailwind Css", "Firebase", "Github"],
			type: "チーム制作",
			role: "管理ベージのコーディング、データベース作成",
			short_description:
				"歴てく は、福岡の観光サービス向けに開発されたツアー紹介サイトおよび管理用ダッシュボードで、企業連携型のチームプロジェクトとして、約4ヶ月かけてコンセプト立案・デザイン・実装まで行いました。クラス内4チーム中、私たちのチームは第2位に選ばれました。",
			time: "4ヶ月",
			demo_site: "",
			github_link: "https://github.com/namdang0219/team_reactors",
		},

		// Mee Task
		{
			id: uuidv4(),
			title: "Mee Task（ミータスク）",
			description:
				"このプロジェクトは、React Native を用いたアプリ開発を学ぶ過程で取り組んだものです。React とは記述方法が大きく異なる点や、TypeScript を併用する必要があったことから、当初の予定より進行が遅れ、UI は約60%の完成度となっています。\nまた、ライブラリの非互換によるインストール時のエラー対応にも多くの時間を費やしましたが、その経験を通じて、エラー解決の方法やリサーチの仕方、そしてそれを実際のプロジェクトにどう活かすかについて多くの学びを得ることができました。",
			image: "https://i.pinimg.com/736x/3b/78/6f/3b786fa79282a6465379cb97a9ba4060.jpg",
			tags: ["React Native"],
			type: "個人制作",
			role: "デザイン、UIコーディング",
			short_description:
				"ミータスク は、個人や組織向けにタスク・イベント・スケジュールを迅速かつ簡単に管理できるアプリです。さらに、週・月・年ごとの進捗分析機能も搭載しており、ユーザーが一定期間ごとに仕事の効率を改善できるようサポートします。",
			time: "2ヶ月",
			demo_site: "",
			github_link: "https://github.com/namdang0219/meetask_v2",
		},

		// Hi MBTI
		{
			id: uuidv4(),
			title: "Hi MBTI",
			description:
				"Hi MBTI は、モバイルアプリ開発の基礎から実践までを学びながら取り組んだ、私にとって初めてのモバイルアプリプロジェクトです。\n開発環境の構築からパソコンの設定、React Native の書き方や設定ファイルの扱いなど、モバイルと Web（HTML/CSS や React）との違いに最初はとても苦労しました。\n結果として、アプリの UI 画面の一部しか完成できませんでしたが、このプロジェクトを通じてモバイル開発という新しい領域に触れることができ、現在ではモバイル開発環境の仕組みや操作に対して、ある程度自信を持って取り組めるようになりました。",
			image: "https://i.pinimg.com/736x/3b/78/6f/3b786fa79282a6465379cb97a9ba4060.jpg",
			tags: ["React Native"],
			type: "個人制作",
			role: "デザイン、UIコーディング",
			short_description:
				"Hi MBTI は、MBTI 指標を通じて人と人をつなぐソーシャルネットワークアプリです。同じ MBTI タイプの人々は性格や思考傾向が似ているという考えに基づき、悩みを共有したり、アドバイスし合ったりしながら、一緒に人生の課題を乗り越えていけることを目指しています。",
			time: "3ヶ月",
			demo_site: "",
			github_link: "https://github.com/namdang0219/hi-mbti",
		},

		// Monstera
		{
			id: uuidv4(),
			title: "Monstera",
			description:
				"この初めてのプロジェクトを通して、HTML/CSS や基本的な JavaScript を使ってシンプルなウェブサイトを構築するスキルをより習得することができました。また、Sass を導入することで、CSS コードをより効率的に管理・最適化する方法も学びました。\nさらに、コーディングだけでなく、キャンペーン用のバナーをデザインしたり、自分のアイデアをもとに実際のウェブサイトとして形にしていく経験も初めてで、とても貴重な学びとなりました。",
			image: "https://i.pinimg.com/736x/3b/78/6f/3b786fa79282a6465379cb97a9ba4060.jpg",
			tags: ["HTML", "CSS"],
			type: "個人制作",
			role: "デザイン、UIコーディング",
			short_description:
				"Monstera は、自然をテーマにしたカフェとそのコーヒー商品を紹介するウェブサイトです。カフェは緑あふれるナチュラルな雰囲気を大切にしており、全体のコンセプトカラーはグリーンで統一されています。自然のイメージを強く打ち出した商品ラインナップも特徴です。",
			time: "2ヶ月",
			demo_site: "",
			github_link: "",
		},
	],
};

// TypeScript types for the data structure
export type DataType = {
	PRODUCTS: Product[];
};

export type Product = {
	// Morimori, Swaptune, My Movies, Rekiteku, Mee Task, Hi MBTI
	id: string;
	title: string;
	description: string;
	image: string;
	tags: string[];
	type: "個人制作" | "チーム制作" | "練習用制作";
	short_description: string;
	role: string;
	time: string;
	demo_site: string;
	github_link: string;
};
