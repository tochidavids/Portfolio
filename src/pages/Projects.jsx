import React, { useState } from "react";
import Slideshow from "../components/Slideshow";
import { projectLinks } from "..";

function Projects() {
	const [page, setPage] = useState(0);

	return (
		<main className="pages" id="projects-page">
			{/* <i className="fa-solid fa-chevron-right"></i>
			<i className="fa-solid fa-chevron-left"></i>
			<ul className="projects-container">
				<li className="project"></li>
				<li className="project"></li>
				<li className="project"></li>
			</ul> */}
			<Slideshow setPage={setPage} />
			<nav className="project-info">
				<div className="link">
					<a
						href={projectLinks[page].live}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-house"></i>
						Live
					</a>
				</div>
				<div className="link">
					<a
						href={projectLinks[page].code}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-code"></i>
						Source Code
					</a>
				</div>
				<div className="link">
					<i className="fa-solid fa-info"></i>
					README
				</div>
			</nav>
		</main>
	);
}

export default Projects;
