"use client";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Model = () => {
	const { scene } = useGLTF("/card.glb");
	return (
		<Canvas>
			<primitive object={scene} />
		</Canvas>
	);
};
