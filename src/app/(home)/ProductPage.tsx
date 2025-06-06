import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const ProductPage = ({
	setShow,
}: {
	setShow: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="w-screen overflow-y-scroll h-screen bg-white relative">
			{/* Cancel button */}
			<span
				className="text-gray-400 absolute left-5 top-5 cursor-pointer z-50 transition-all hover:text-gray-500 hover:scale-110"
				onClick={() => setShow(false)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={30}
					height={30}
					viewBox="0 0 56 56"
				>
					<path
						fill="currentColor"
						d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-8.414-13.5a1.99 1.99 0 0 1-1.992-1.992c0-.539.234-1.008.609-1.36l6.984-7.03l-6.984-7.032a1.8 1.8 0 0 1-.61-1.36c0-1.077.891-1.945 1.993-1.945c.539 0 1.008.211 1.36.586l7.03 7.008l7.079-7.031c.398-.422.82-.61 1.336-.61c1.101 0 1.992.891 1.992 1.97c0 .538-.188.984-.586 1.359l-7.031 7.054l7.007 6.985c.352.375.586.844.586 1.406a1.99 1.99 0 0 1-1.992 1.992a1.93 1.93 0 0 1-1.383-.586l-7.007-7.031l-6.985 7.031a1.93 1.93 0 0 1-1.406.586"
					></path>
				</svg>
			</span>

			{/* body */}
			<div className="wfull max-w-[980px] mx-auto px-5 pt-8 pb-20">
				<div className="flex flex-col gap-14">
					{/* Image */}
					<div className="w-full aspect-video relative">
						<Image
							src={
								"https://i.pinimg.com/736x/d8/3b/84/d83b843093c804b6d8c2dea87580715f.jpg"
							}
							alt="product-image"
							fill
							className="w-full h-full object-cover object-center rounded-2xl"
						/>
					</div>

					<div className="flex flex-col gap-2">
						{/* type */}
						<span className="text-white bg-blue-500 px-3 py-1.5 rounded-full w-fit text-xs font-medium block mx-auto">
							個人制作
						</span>

						{/* title */}
						<h2 className="text-3xl text-center font-semibold">
							Holo Cinema
						</h2>
						{/* description */}
						<p className="text-gray-600 w-full mx-auto max-w-[80%] text-center mt-2">
							このプロジェクトは、ホログラムを使用して映画を鑑賞する体験を提供することを目的としています。ユーザーは、特別なデバイスを使用して、立体的な映像を楽しむことができます。
						</p>
					</div>

					{/* Tech stack */}
					<div className="grid grid-cols-[2fr_1fr_1fr] gap-8">
						{Object.entries(tableData).map(
							([key, value], index) => (
								<div key={index}>
									<h3 className="list-title">
										{key === "tech"
											? "🧑🏻‍💻 使用したテクニック"
											: key === "time"
											? "🕰️ 実施期間"
											: "🙋🏻 役割"}
									</h3>
									<p>{value}</p>
								</div>
							)
						)}
					</div>

					{/* 感想 */}
					<div>
						<h3 className="list-title">感想</h3>
						<p>
							このプロジェクトは、ホログラム技術を使用して映画を鑑賞する新しい体験を提供することを目指しました。開発中は、技術的な課題やデザインの調整に苦労しましたが、最終的にはユーザーにとって魅力的な体験を提供できるアプリケーションに仕上げることができました。
						</p>
					</div>

					{/* Links */}
					<div>
						<h3 className="list-title">デモ</h3>
						<div>
							<span>{"Demo Site >  "}</span>
							<a
								href="https://example.com/demo"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline hover:text-pink-500"
							>
								https://example.com/demo
							</a>
						</div>
						<div>
							<span>{"Source Code >  "}</span>
							<a
								href="https://example.com/demo"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline hover:text-pink-500"
							>
								https://github.com/demo
							</a>
						</div>
					</div>

					<div className="h-48"></div>
				</div>
			</div>
		</div>
	);
};

const tableData = {
	tech: "React, Typescript, Redux, Tailwind",
	time: "2ヶ月",
	role: "フロントエンドエンジニア",
};

/**
 * Description:
 * - Công nghệ sủ dụng
 * - Mô tả ngắn gọn về dự án
 * - Vai trò trong dự án
 * - Link demo
 * - Link source code
 * - Thời gian thực hiện
 * - Cảm nhận trong quá trình thực hiện dự án
 */

export default ProductPage;
