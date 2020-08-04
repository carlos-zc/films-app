import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Global from '../Global';

const API = Global.API;

class InputSearch extends Component {
	state = {
        searchTerm: '',
		error: '',
		redirect: false
	};
	
	searchSubmit(e) {
		e.preventDefault();
		if (!this.state.searchTerm) {
			return this.setState({ error: 'Please write a valid text' });
		}
        
        // Solicita los datos de la api
		fetch(`${API}&s=${this.state.searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                if(!data.Search) {
                    return this.setState({ error: 'There are no results' });
				}
				if (this.props.redirect) {
					return this.setState({ redirect: true });
				}
				this.setState({ error: '', searchTerm: '' });
				// Manda los datos recibidos al padre
				this.props.search(data.Search);
            })
            .catch((err) => console.log(err));
	}

	render() {
		if(this.state.redirect) {
			return <Redirect to={"/films/" + this.state.searchTerm} />
		}
		return (
			<div>
				<form className="search-box" onSubmit={(e) => this.searchSubmit(e)}>
					<input
						type="text"
						className="search-txt"
						name="search"
						placeholder="Search your film"
						onChange={(e) => this.setState({ searchTerm: e.target.value }) }
						value={this.state.searchTerm}
						// autoFocus
					/>
					<button className="search-btn">
						<i className="fas fa-search"></i>
					</button>
				</form>
				{this.state.error && 
					<p className="text-white text-center">{this.state.error}</p>
				}
			</div>
		);
	}
}

export default InputSearch;
