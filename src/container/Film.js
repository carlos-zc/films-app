import React, { Component } from 'react';
import Global from '../Global';
import DefaultImage from '../assets/images/default.jpg';
import Fondo from '../assets/images/butacas.jpg';
import Fondo404 from '../assets/images/cine.jpg';

// Buscador
import InputSearch from '../components/InputSearch';

const API = Global.API;

class Film extends Component {
	state = {
		data: ''
	};

	componentDidMount() {
		const film_id = this.props.match.params.id;
		// Solicita los datos de la api
		fetch(`${API}&i=${film_id}`)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ data });
				console.log(data);
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { data } = this.state,
			backgroundStyle = {
				position: 'absolute',
				height: '18rem',
				width: '100%',
				objectFit: 'cover',
				filter: 'blur(3px)'
			};

		if (!data) {
			return (
				<div className="d-flex flex-column justify-content-center page-height">
					<h3 className="text-light text-center">Loading...</h3>
				</div>
			);
		}

		if (data.Response === 'False') {
			const backgroundImageStyle = {
				backgroundImage: `url('${Fondo404}')`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			};

			return (
				<section 
					className="text-center d-flex flex-column justify-content-center page-height"
					style={backgroundImageStyle}
				>
					<h2>Film not found</h2>
					<p>There's nothing here</p>
				</section>
			);
		}

		// Cambia el tamaño de la imagen
		let image = data.Poster.replace('X300', 'X500');
		if (data.Poster === 'N/A') {
			image = DefaultImage;
		}
		// Imagen de fondo ya que algunas url recibidas ya no funcionan
		const backgroundImageStyle = {
			backgroundImage: `url('${DefaultImage}')`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			minHeight: '14rem'
		};

		// Agrega separacion a los géneros
		const genres = data.Genre.split(',');
		// Datos del rating
		const imdb_rating = Number(data.imdbRating),
			imdbStyle = {
				strokeDashoffset: `calc(225 - (225 * ${imdb_rating * 10}) / 100)`
			};

		let rotten_rating = false,
			rottenStyle = {};

		if (data.Ratings) {
			data.Ratings.forEach((rate) => {
				if (rate.Source === 'Rotten Tomatoes') {
					rotten_rating = rate.Value;
					const rotten_percent = Number(rotten_rating.replace('%', ''));

					rottenStyle = {
						strokeDashoffset: `calc(225 - (225 * ${rotten_percent}) / 100)`
					};
				}
			});
		}

		return (
			<main className="film-page page-height">
				<img src={Fondo} alt="Background" style={backgroundStyle} />
				<div className="container margin-content">
					{/* Buscador */}
					<div className="row">
						<div className="col-md-6 offset-md-3 p-4">
							<InputSearch redirect="true" />
						</div>
					</div>

					<section className="grid-drop">
						<div className="left-content">
							<img
								src={image}
								alt={data.Title}
								style={backgroundImageStyle}
							/>
							<div className="specs">
								<p>
									Country <br />
									<span>{data.Country}</span>
								</p>
								<p>
									Release Date <br />
									<span>{data.Released}</span>
								</p>
								{data.Production && (
									<p>
										Production <br />
										<span>{data.Production}</span>
									</p>
								)}
								{data.totalSeasons && (
									<p>
										Total Seasons <br />
										<span>{data.totalSeasons}</span>
									</p>
								)}
							</div>
							{/* .specs */}
						</div>

						<div className="right-content">
							<h2>{data.Title}</h2>
							<p>
								<span className="badge">{data.Year}</span>
								<span className="badge">{data.Runtime}</span>
								<span className="badge">{data.Rated}</span>
							</p>
							<p>
								{genres.map((genre, i) => {
									return (
										<span className="genre" key={i}>
											{genre}
										</span>
									);
								})}
							</p>

							<ul className="ratings">
								<li className="circular-progress imdb">
									<svg>
										<circle cx="36" cy="36" r="36"></circle>
										<circle
											cx="36"
											cy="36"
											r="36"
											style={imdbStyle}
										></circle>
									</svg>
									<div className="number">
										<h4 className="percent">{imdb_rating}</h4>
										<h4 className="rate-web">IMDb</h4>
									</div>
								</li>
								{rotten_rating && (
									<li className="circular-progress rotten">
										<svg>
											<circle cx="36" cy="36" r="36"></circle>
											<circle
												cx="36"
												cy="36"
												r="36"
												style={rottenStyle}
											></circle>
										</svg>
										<div className="number">
											<h4 className="percent">{rotten_rating}</h4>
											<h4 className="rate-web">Rotten</h4>
										</div>
									</li>
								)}
							</ul>
							{/* .ratings */}
						</div>
						{/* .rigth-content */}

						<div className="details">
							<h3>Synopsis</h3>
							<p className="synopsis ml-3 ml-md-0">{data.Plot}</p>

							{data.Director !== 'N/A' && (
								<div className="grid-details ml-3 ml-md-0">
									<p className="mb-0">Director</p>
									<p>{data.Director}</p>
								</div>
							)}
							{data.Actors !== 'N/A' && (
								<div className="grid-details ml-3 ml-md-0">
									<p className="mb-0">Actors</p>
									<p>{data.Actors}</p>
								</div>
							)}
							{data.Awards !== 'N/A' && (
								<div className="grid-details ml-3 ml-md-0">
									<p className="mb-0">Awards</p>
									<p>{data.Awards}</p>
								</div>
							)}
						</div>
						{/* .details */}

					</section>
					{/* .grid-drop */}
				</div>
			</main>
		);
	}
}

export default Film;
