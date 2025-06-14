import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glb|gltf)$/,
			use: {
				loader: "file-loader",
				options: {
					outputPath: "static/models/",
					publicPath: "/_next/static/models/",
					name: "[name].[ext]",
				},
			},
		});

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pinimg.com",
			},
			{
				protocol: "https",
				hostname: "img.shields.io",
			},
			{
				protocol: "https",
				hostname: "cdn-icons-png.flaticon.com",
			},
		],
	},
};

export default nextConfig;
