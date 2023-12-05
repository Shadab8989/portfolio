import "./projects.css";

const projects = [
	{
		name: "Sketch Board App",
		stack: "HTML , CSS , JavaScript , Express.js , socket.io",
		img: process.env.PUBLIC_URL + "/images/sketchBoard.png",
		description:
			"Developed a real-time collaborative drawing application using HTML, CSS, and JavaScript, with a Canvas element for drawing. Implemented an Express server with socket.io to enable live sharing of drawings among connected users",
		// "Developed a real-time collaborative drawing application using HTML, CSS, and JavaScript, with a Canvas element for drawing. Implemented an Express server with socket.io to enable live sharing of drawings among connected users",
		code: "https://github.com/Shadab8989/sketchBoardApp",
		demo: "https://sketchboardapp-iowq.onrender.com/",
	},
	{
		name: "Chat App",
		stack: "HTML , CSS , JavaScript , Express.js , socket.io",
		img: process.env.PUBLIC_URL + "/images/chatApp.png",
		description:
			"Designed and implemented a real-time chat application. The application was built using HTML, CSS, and JavaScript for the frontend, while the backend was powered by Express.js and Socket.io for seamless real-time communication",
		// "Developed a real-time collaborative drawing application using HTML, CSS, and JavaScript, with a Canvas element for drawing. Implemented an Express server with socket.io to enable live sharing of drawings among connected users",
		code: "https://github.com/Shadab8989/chatApp",
		demo: "https://chatapp-cv4p.onrender.com/",
	},
	{
		name: "Country App ",
		stack: "ReactJs , HTML , CSS , JavaScript",
		img: process.env.PUBLIC_URL + "/images/countryApp.png",
		description:
			"Developed an app using the restcountries API, providing detailed information of almost all countries. The app supports both single-country and multi-country searches, displaying all information on a single page.",
		code: "https://github.com/Shadab8989/countryapp",
		demo: "https://shadab8989.github.io/countryapp/",
	},
	{
		name: "Multiplayer Games Hub",
		stack: "HTML , CSS , JavaScript",
		img: process.env.PUBLIC_URL + "/images/multiplayerGameHub.png",
		description:
			"Developed a collection of three interactive multiplayer games for dual-player game play on a single device",
		code: "https://github.com/Shadab8989/Multiplayer-Games-Hub",
		demo: "https://shadab8989.github.io/Multiplayer-Games-Hub/",
	},
];

const Projects = () => {
	return (
		<>
			<section id="project-section">
				<h2 className="project-section-head">Projects</h2>
				<div className="d-flex justify-content-center flex-wrap">
					{projects.map((project, index) => (
						<div className="card mx-3 my-3 projectCard" key={index}>
							<img src={project.img} className="card-img-top" alt="..." />
							<div className="card-body">
								<a
									href={project.demo}
									className="card-title project-name"
									target="_blank"
									rel="noopener noreferrer"
								>
									{project.name}
								</a>
								{/* <h5 className="card-title project-name">{project.name}</h5> */}
								<p className="stack">{project.stack}</p>
								<p className="card-text project-description">
									{project.description}
								</p>
								<div className="links">
									<a
										href={project.code}
										className="btn btn-primary code button"
										target="_blank"
										rel="noopener noreferrer"
									>
										Code
									</a>
									<a
										href={project.demo}
										className="btn btn-primary demo button"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live Demo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};
export default Projects;
