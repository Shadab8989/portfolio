import "./home.css";
const Home = () => {
	return (
		<>
			<section id="home-section">
				<div className="home-container">
					<p className="p-title">Frontend Developer</p>
					<p className="p-about">
						Hello there! I'm Shadab Ahmed Khan, a passionate frontend developer.
						My journey into the world of coding began with a fascination for
						turning ideas into interactive and visually appealing digital
						experiences.
						<a
							href="https://drive.google.com/file/d/17qKm0nQk1QO4MhFos_rr6gtqvqm6UAN_/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>
								Resume{" "}
								<img
									src={process.env.PUBLIC_URL + "/images/download-icon.png"}
									alt="download"
								/>
							</button>
						</a>
					</p>

					<div className="tech-stack">
						<p className="tech-stack-head">Tech Stack</p>
						<p className="stack">
							<span>
								<img
									src={process.env.PUBLIC_URL + "/images/html-logo.png"}
									alt=""
								/>
							</span>
							<span>
								<img
									src={process.env.PUBLIC_URL + "/images/css-logo.png"}
									alt=""
								/>
							</span>
							<span>
								<img
									src={process.env.PUBLIC_URL + "/images/js-logo.png"}
									alt=""
								/>
							</span>
							<span>
								<img
									src={process.env.PUBLIC_URL + "/images/reactJs-logo.png"}
									alt=""
								/>
							</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
export default Home;
