"use client";

import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloatStyles = styled.h2`
	.scroll-float {
		overflow: hidden;
	}

	.scroll-float-text {
		display: inline-block;
	}

	.char {
		display: inline-block;
	}
`;

interface ScrollFloatProps {
	children: ReactNode;
	scrollContainerRef?: RefObject<HTMLElement>;
	containerClassName?: string;
	textClassName?: string;
	animationDuration?: number;
	ease?: string;
	scrollStart?: string;
	scrollEnd?: string;
	stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
	children,
	scrollContainerRef,
	containerClassName = "",
	textClassName = "",
	animationDuration = 1   ,
	ease = "back.inOut(2)",
	scrollStart = "center bottom+=50%",
	scrollEnd = "bottom bottom-=40%",
	stagger = 0.03,
}) => {
	const containerRef = useRef<HTMLHeadingElement>(null);

	const splitText = useMemo(() => {
		const text = typeof children === "string" ? children : "";
		return text.split("").map((char, index) => (
			<span className="char" key={index}>
				{char === " " ? "\u00A0" : char}
			</span>
		));
	}, [children]);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const scroller =
			scrollContainerRef && scrollContainerRef.current
				? scrollContainerRef.current
				: window;

		const charElements = el.querySelectorAll(".char");

		gsap.fromTo(
			charElements,
			{
				willChange: "opacity, transform",
				opacity: 0,
				yPercent: 120,
				scaleY: 2.3,
				scaleX: 0.7,
				transformOrigin: "50% 0%",
			},
			{
				duration: animationDuration,
				ease: ease,
				opacity: 1,
				yPercent: 0,
				scaleY: 1,
				scaleX: 1,
				stagger: stagger,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: scrollStart,
					end: scrollEnd,
					scrub: true,
				},
			}
		);
	}, [
		scrollContainerRef,
		animationDuration,
		ease,
		scrollStart,
		scrollEnd,
		stagger,
	]);

	return (
		<ScrollFloatStyles
			ref={containerRef}
			className={`scroll-float ${containerClassName}`}
		>
			<span className={`scroll-float-text ${textClassName}`}>
				{splitText}
			</span>
		</ScrollFloatStyles>
	);
};

export default ScrollFloat;
