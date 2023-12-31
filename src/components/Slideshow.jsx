import React, { useState, useRef, useEffect } from "react";
import { projectLinks } from "..";

function Slideshow({ setProject, project }) {
	const slidesRef = useRef([]);
	const slideContainer = useRef();

	const [counter, setCounter] = useState(1);
	const [size, setSize] = useState(0);

	useEffect(() => {
		setSize(slidesRef.current[0].clientWidth);
		slideContainer.current.style.transform =
			"translateX(" + -size * counter + "px)";
		// eslint-disable-next-line
	}, [size]);

	const transitionEnd = () => {
		if (slidesRef.current[counter].id === "lastClone") {
			slideContainer.current.style.transition = "none";
			setCounter(slidesRef.current.length - 2);
		}

		if (slidesRef.current[counter].id === "firstClone") {
			slideContainer.current.style.transition = "none";
			setCounter(slidesRef.current.length - counter);
		}
	};

	const forwardBtn = () => {
		if (counter >= slidesRef.current.length - 1) return;
		slideContainer.current.style.transition = "transform 0.4s ease-in-out";
		setCounter(old => old + 1);
	};

	const backwardsBtn = () => {
		if (counter >= slidesRef.current.length - 1) return;
		slideContainer.current.style.transition = "transform 0.4s ease-in-out";
		setCounter(old => old - 1);
	};

	useEffect(() => {
		slideContainer.current.style.transform =
			"translateX(" + -size * counter + "px)";
		if (counter === 0) setProject(2);
		else if (counter === 4) setProject(0);
		else setProject(counter - 1);
		// eslint-disable-next-line
	}, [counter]);

	return (
		<section className="slide-container">
			<div className="chevrons">
				<i
					className="fa-solid fa-circle-chevron-left chevron"
					id="prev-btn"
					onClick={backwardsBtn}
				></i>
				<i
					className="fa-solid fa-circle-chevron-right chevron"
					id="next-btn"
					onClick={forwardBtn}
				></i>
			</div>

			<div
				className="slides"
				ref={slideContainer}
				onTransitionEnd={transitionEnd}
			>
				<div
					className="slide"
					id="lastClone"
					ref={el => (slidesRef.current[0] = el)}
				>
					<img src={require("../media/weather-app.png")} alt="" />
				</div>
				{/* MAIN */}
				{projectLinks.map((project, index) => (
					<div
						className="slide"
						ref={el => (slidesRef.current[index + 1] = el)}
						key={index}
					>
						<img
							src={require(`../media/${project.image}`)}
							alt=""
						/>
						<h1 className="project-title">{project.title}</h1>
					</div>
				))}
				{/* END OF MAIN */}
				<div
					className="slide"
					id="firstClone"
					ref={el => (slidesRef.current[4] = el)}
				>
					<img src={require("../media/github-jobs.png")} alt="" />
				</div>
			</div>
		</section>
	);
}

export default Slideshow;
