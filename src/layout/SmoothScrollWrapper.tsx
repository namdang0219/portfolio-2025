"use client";

import React, { PropsWithChildren } from "react";
import { ReactLenis } from "lenis/react";

const SmoothScrollWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ReactLenis root options={{ lerp: 0.1 }}>
			{children}
		</ReactLenis>
	);
};

export default SmoothScrollWrapper;
