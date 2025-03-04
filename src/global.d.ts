/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare module '*.glb' {
	const value: string;
	export default value;
  }

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
	export const MeshLineGeometry: any;
	export const MeshLineMaterial: any;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			meshLineGeometry: any;
			meshLineMaterial: any;
		}
	}
}
