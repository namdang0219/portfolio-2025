import { ReactNode } from "react";

export type SkillType = {
	category: string;
	skillList: {
		name: string;
		level: string;
		icon: ReactNode;
	}[];
};
