import React from 'react';
import { Link } from 'react-router-dom';

const SocialNetworks = () => {
	return (
		<ul className="list-inline text-center social-networks">
			<li className="list-inline-item btn-fb">
				<Link to="#" className="btn-floating mx-1">
					<i className="fab fa-facebook-f"> </i>
				</Link>
			</li>
			<li className="list-inline-item btn-tw">
				<Link to="#" className="btn-floating mx-1">
					<i className="fab fa-twitter"> </i>
				</Link>
			</li>
			<li className="list-inline-item btn-ig">
				<Link to="#" className="btn-floating mx-1">
					<i className="fab fa-instagram"> </i>
				</Link>
			</li>
			<li className="list-inline-item btn-ln">
				<Link to="#" className="btn-floating mx-1">
					<i className="fab fa-linkedin-in"> </i>
				</Link>
			</li>
			<li className="list-inline-item btn-yt">
				<Link to="#" className="btn-floating mx-1">
					<i className="fab fa-youtube"> </i>
				</Link>
			</li>
		</ul>
	);
};

export default SocialNetworks;
