import React from 'react';
import Logo from '../assets/images/logo.png';

import SocialNetworks from './SocialNetworks';

const Footer = () => {
	return (
		<footer className="page-footer">
			<div className="container font-small py-3">
				<div className="footer-copyright">
					2020 © FilmsApp by <span className="color-primary">Carlos Zapata</span>
				</div>
				
				<img className="logo-footer" src={Logo} alt="Films App" />
				
				<SocialNetworks />
			</div>
			
		</footer>
	);
};

export default Footer;
