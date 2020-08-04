import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

class Header extends Component {

	state = {
		menuOpen: false
	}
	showMenu =() => {
		if(!this.state.menuOpen) {
			this.setState({
				menuOpen: true
			});
		} else {
			this.setState({
				menuOpen: false
			});
		}
	}

	render() {
		return (
			<header className="App-header">
				<nav className="container">
					<NavLink to="/home">
						<img src={Logo} alt="Films App" className="logo-header" />
					</NavLink>
					<div className={"menu-btn " + (this.state.menuOpen ? 'open' : '')} onClick={this.showMenu}>
						<div className="menu-btn-burger"></div>
					</div>
					<ul className={(this.state.menuOpen ? 'open' : '')}>
						<li>
							<NavLink to="/home" activeClassName="active" >Home</NavLink>
						</li>
						<li>
							<NavLink to="/films" activeClassName="active" >Movies</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="active" >About</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeClassName="active" >Contact</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
