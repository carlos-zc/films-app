import React, { Component } from 'react';
import Fondo from '../assets/images/claqueta.jpg';
import Typed from 'react-typed';

import InputSearch from '../components/InputSearch';

class Home extends Component {
	render() {
		const homeStyle = {
			backgroundImage: `url('${Fondo}')`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			height: '100vh',
			minHeight: '30rem',
			filter: 'saturate(120%)'
		}

		return (
			<main className="home" style={homeStyle}>
				<section className="container search-content">
					<div className="title">
						<h1>
							Welcome to <span className="app-title">#FilmsApp</span>
						</h1>
						<p className="subtitle">
							type here to search for any{' '}
							<Typed
								className="typed"
								strings={['Movie', 'Series', 'TV Show', 'Documentary', 'Anime', 'Game','FILM']}
								typeSpeed={75}
								backSpeed={65}
								startDelay= {2600}
								backDelay={1500}
								loop
							></Typed>
						</p>
					</div>

					<InputSearch redirect="true" />
					
				</section>
			</main>
		);
	}
}

export default Home;
