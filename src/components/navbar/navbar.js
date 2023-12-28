import "./navbar.css";
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary custom-position w-100">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Shadab Ahmed Khan
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="#HOME"
							>
								Home
							</a>
							<a className="nav-link" href="#PROJECTS">
								Projects
							</a>
							{/* <a className="nav-link" href="#about-section">
								About
							</a> */}
							{/* <a className="nav-link" href="#certificate-section">
								Certification
							</a> */}
							{/* <a className="nav-link" href="#resume-section">
								Resume
							</a> */}
							<a className="nav-link" href="#CONTACT">
								Contact
							</a>
							{/* <button class="btn btn-outline-success my-2 my-sm-0 justify-content-end class" type="submit">Search</button> */}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
