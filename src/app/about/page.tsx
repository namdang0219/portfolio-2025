"use client";

import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import React from "react";
import TopSection from "./TopSection";
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillSection";
import Navigations from "@/components/Navigations";

const AboutPage = () => {
	return (
		<div className="relative">
			<HeaderLogo canGoBack />
			<Navigations navigations={navigations} />

			<main className="flex flex-col">
				<TopSection />

				<ExperienceSection />

				<SkillSection />

				<div id="contact">
					<Footer />
				</div>
			</main>
		</div>
	);
};

const navigations: { label: string; href: string }[] = [
	{
		label: "トップ",
		href: "/about/#top",
	},
	{
		label: "開発経験",
		href: "/about/#experience",
	},
	{
		label: "スキル",
		href: "/about/#skill",
	},
	{
		label: "コンタクト",
		href: "/about/#contact",
	},
];

export default AboutPage;
