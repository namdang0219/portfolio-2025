import type { Metadata } from "next";
import "./globals.scss";
import { Slide, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
	title: "Nam Dang | Portfolio 🍓",
	description: "Portfolio created by NamDang (2025)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
				<ToastContainer
					position="top-center"
					autoClose={3000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Slide}
				/>
			</body>
		</html>
	);
}
