import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
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
};

export default nextConfig;
