import React from "react";
// import { describeArc } from "..";
// import { ReactComponent as GradientSvg } from "../components/svgGradient.svg";
// import { Svg1, Svg2 } from "../components/Svgs";

function Home() {
	return (
		<main className="pages" id="home-page">
			<p className="intro-text">
				Hey, my name is Tochi Davids and I am a Web Developer
			</p>
			<div className="second-outline"></div>
			<div className="scroll-down">
				<div className="text">
					<h1>scroll down</h1>
					<p>to see more info about my projects</p>
				</div>
				<i className="fa-solid fa-arrow-pointer"></i>
			</div>

			<section className="info">
				<ul className="left">
					<li>
						<div className="rotated-text">
							<h1>React</h1>
							<p>
								<i>This website</i> was made solely using React
								JS
							</p>
						</div>
					</li>
					<li>
						<div className="rotated-text middle">
							<h1>SCSS</h1>
							<p>
								<i>This website</i> was styled using SCSS
							</p>
						</div>
					</li>
					<li>
						<div className="rotated-text">
							<h1>Django</h1>
							<p>
								Learnt through{" "}
								<i>Harvard's CS50 Web Programming Course</i>
							</p>
						</div>
					</li>
				</ul>
				<ul className="right">
					<li className="first">
						<i className="fa-solid fa-paintbrush"></i>
						<h1>Figma</h1>
						<p>Exact copy of design</p>
					</li>
					<li className="second">
						<i className="fa-solid fa-plus"></i>
						<h1>Bootstrap</h1>
						<p>Easily intergrated</p>
					</li>
					<li className="third">
						<i className="fa-solid fa-code"></i>
						<h1>Git</h1>
						<p>Version control</p>
					</li>
				</ul>
			</section>
		</main>
	);
}

export default Home;
