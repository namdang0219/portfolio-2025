import { ReactNode } from "react";

export type ExperienceType = {
	title: string;
	subtitle: string;
	content: ReactNode;
	year: number;
	month: number;
};
