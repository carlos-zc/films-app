import React, { Component } from 'react';

// Images
import Fondo from '../assets/images/HD/interstellar.jpg';
import FondoMobile from '../assets/images/HD/interstellar-mobile.jpg';
import OMDb from '../assets/images/OMDB-API.png';
import developer from '../assets/images/developer.jpg';
// Logos
import linkedin from '../assets/images/linkedin-blue.svg';
import github from '../assets/images/github-white.svg';
import githubIcon from '../assets/images/github-icon.svg';


class About extends Component {
	state = {
		boxes: [],
		screenWidth: null
	};

	componentDidMount() {
		// Añade evento para escuchar tamaño de pantalla
		window.addEventListener('resize', this.updateWindowDimensions);
		this.updateWindowDimensions();

		// Crea efecto "Glitch" en la imagen de fondo
		let intervalId = setInterval(this.boxes, 300);
		this.setState({ intervalId });
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	// Guarda el ancho de pantalla en el estado
	updateWindowDimensions = () => {
		this.setState({ screenWidth: window.innerWidth });
	};

	// Genera las cajas para el efecto "glitch"
	boxes = () => {
		this.setState({ boxes: [] });
		let boxes = [],
			boxStyle = {},
			fondo = null;

		if (this.state.screenWidth >= 768) {
			fondo = Fondo;
		} else {
			fondo = FondoMobile;
		}

		for (let i = 0; i < 20; i++) {
			var left = Math.floor(Math.random() * 90),
				top = Math.floor(Math.random() * 90);
			boxStyle = {
				background: `url('${fondo}')`,
				left: `${left}%`,
				top: `${top}%`,
				width: `${Math.floor(Math.random() * 20)}em`,
				height: `${Math.floor(Math.random() * 8)}em`,
				// backgroundPosition: `${Math.floor(Math.random() * 50)}px`,
				backgroundPosition: `${left}% ${top}%`
			};
			boxes.push(<div className="box" key={i} style={boxStyle}></div>);
		}

		this.setState({ boxes });
	};

	render() {
		return (
			<main className="about page-height margin-content">
				<section className="banner">
					{this.state.screenWidth >= 768 &&
						<img src={Fondo} alt="" className="banner-img" />
					}
                    {this.state.screenWidth < 768 &&
                        <img src={FondoMobile} alt="" className="banner-img" />
                    }

                    {/* Print divs .box for glitch effect */}
					{this.state.boxes}

					<div className="container title-content">
						<h2>Welcome</h2>
						<p>Let's talk about #FilmsApp</p>
					</div>
				</section>
				{/* section.banner */}

				<section className="about-us">
                    <div className="info">
                        <p><em>FilmsApp</em> is a web application that allows you to find and track any movie, series, TV Show, Documentary, Anime and even Video Games getting all the details about release dates, scores, awards, etc. From any device in the browser of your choice</p>
                        
                        <p>In August 2020, <em>FilmsApp</em> was launched seeking to provide a comfortable, simple and pleasant search engine for all movie-loving users, which sets it apart from other web apps of this type. It also seeks to take advantage of all the content provided by the open omdb database.</p>
                    </div>
                    {/* .info */}

                    <div className="provider">
                        <div className="container">
                            <h3>Who provides us the films data?</h3>
                            <div className="row justify-content-center">
                                <div className="col-8 col-md-4 mb-4 mb-md-0">
                                    <img src={OMDb} alt="" className="provider-img"/>
                                </div>
                                <div className="col-md-7 d-flex align-items-center">
                                    <p>The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by the users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* .provider */}

                    <div className="developer">
                        <h3 className="container">The developer behind #FilmsApp</h3>
                        <div className="profile">
                            <img src={developer} alt="Developer Profile" className="profile-img rounded-circle"/>
                            <p className="dev-name">Carlos Zapata</p>
                            <p className="speciality">Web Developer</p>
                        </div>
                        <div className="social-networks container">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/carlos-zc">
                                <img src={githubIcon} alt="" className="mr-2" />
                                <img src={github} alt="" className="github" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ca-zapata/">
                                <img src={linkedin} alt=""/>
                            </a>
                        </div>
                    </div>
                </section>
				{/* section.about */}
			</main>
		);
	}
}

export default About;
