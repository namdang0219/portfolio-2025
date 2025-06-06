import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

const HomeContact = () => {
	return (
		<div
			id="contact"
			className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5 scroll-m-24"
		>
			<h2 className="text-4xl text-center font-semibold">Contact</h2>
			<div className="w-full max-w-[1000px] mx-auto flex  items-start gap-12 mt-10">
				<motion.div initial={{scale: 0.8}} whileInView={{scale: 1}} className="relative w-[250px] aspect-square mt-8">
					<Image
						src={
							"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
						}
						alt="contact-img"
						fill
						className="w-full h-full object-center object-cover rounded-full"
					/>
				</motion.div>
				<div className="flex-1">
					<motion.div
						initial={{ scale: 0.2, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 15,
							bounce: 0.4,
							delay: 0.2,
						}}
						className="text-2xl text-gray-700 p-6 origin-bottom-left bg-white w-fit rounded-2xl shadow-lg relative"
					>
						何か気になることがあれば、気軽にメッセージしてください！😊
						<div className="border-solid border-t-white border-t-[28px] border-x-transparent border-x-[10px] border-b-0 w-3 h-3 absolute -bottom-4 left-0 rotate-45"></div>
					</motion.div>
					<div className="flex flex-col gap-6 mt-14">
						{/* name */}
						<div className="flex flex-col gap-2">
							<label className="text-gray-700 text-xl font-bold">
								氏名
							</label>
							<input
								type="text"
								placeholder="氏名を入力..."
								className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
						</div>
						{/* mail */}
						<div className="flex flex-col gap-2">
							<label className="text-gray-700 text-xl font-bold">
								メール
							</label>
							<input
								type="text"
								placeholder="メールアドレスを入力..."
								className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
						</div>
						{/* mail */}
						<div className="flex flex-col gap-2">
							<label className="text-gray-700 text-xl font-bold">
								内容
							</label>
							<textarea
								placeholder="内容を入力..."
								className="border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
						</div>
						<button className="px-8 w-fit py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
							送信
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContact;
