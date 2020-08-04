import React, { Component } from 'react';
import Global from '../Global';

import Card from '../components/Card';
import InputSearch from '../components/InputSearch';

const API = Global.API;

class Films extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		if (this.props.match.params.search) {
			const search = this.props.match.params.search;
			this.request(search);
		} else {
			this.request();
		}
	}

	// Solicita los datos de la api
	request(film = 'avengers') {
		fetch(`${API}&s=${film}`)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ data: data.Search });
				// console.log(data);
			})
			.catch((err) => console.log(err));
	}

	search = (film) => {
		this.setState({
			data: film
		});
	};

	render() {
		const { data } = this.state;

		if (data.length <= 0) {
			return (
				<div className="d-flex flex-column justify-content-center page-height">
					<h3 className="text-light text-center">Loading...</h3>
				</div>
			);
		}

		return (
			<main className="container margin-content">
				<div className="row">
					<div className="col-md-6 offset-md-3 p-4">
						<InputSearch search={this.search} />
					</div>
				</div>
				<section className="films-list">
					{data.map((movie) => {
						return <Card movie={movie} key={movie.imdbID} />;
					})}
				</section>
			</main>
		);
	}
}

export default Films;
