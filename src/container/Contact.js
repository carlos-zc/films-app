import React, { Component } from 'react';
import Fondo from '../assets/images/proyector.jpg';
import ComboSvg from '../assets/images/combo-cine.svg';

import SimpleReactValidator from 'simple-react-validator';
import SocialNetworks from '../components/SocialNetworks';

class Contact extends Component {

    state = {
        status: null
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }

    // Guarda los datos del form en el state
    readForm = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value});
    }

    sendMessage = (e) => {
        e.preventDefault();
        if(this.validator.allValid() ) {
            this.setState({ status: 'success' });
        } else {
            // Muestra las validaciones
            this.validator.showMessages();
        }
    }

	render() {
        const contactBgStyle = {
			backgroundImage: `url('${Fondo}')`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
        }
        
		return (
			<main className="contact page-height" style={contactBgStyle}>
				<div className="container margin-content">
                    <div className="subtitle">
                        <p>Got a question or contribution?</p>
                        <h2>Contact #FilmsApp</h2>
                    </div>

					<div className="row">
						<div className="col-md-8 col-lg-6">
                            <section className="contact-form">

                                {this.state.status !== 'success' &&
                                    <form onSubmit={this.sendMessage}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    id="inputFName"
                                                    name="f_name"
                                                    onChange={this.readForm}
                                                    onBlur={() => this.validator.showMessageFor('first name')}
                                                    className={this.state.f_name ? 'typed' : null}
                                                />
                                                <label htmlFor="inputFName">First Name</label>
            
                                                {this.validator.message('first name', this.state.f_name, 'required|alpha|min:2|max:32', { className: 'text-danger' })}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    id="inputLName"
                                                    name="l_name"
                                                    onChange={this.readForm}
                                                    onBlur={() => this.validator.showMessageFor('last name')}
                                                    className={this.state.l_name ? 'typed' : null}
                                                />
                                                <label htmlFor="inputLName">Last Name</label>
            
                                                {this.validator.message('last name', this.state.l_name, 'required|alpha|min:2|max:32', { className: 'text-danger' })}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="inputEmail"
                                                name="email"
                                                onChange={this.readForm}
                                                onBlur={() => this.validator.showMessageFor('email')}
                                                className={this.state.email ? 'typed' : null}
                                            />
                                            <label htmlFor="inputEmail">Email</label>
                                            
                                            {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="inputMessage"
                                                name="message"
                                                onChange={this.readForm}
                                                onBlur={() => this.validator.showMessageFor('message')}
                                                className={this.state.message ? 'typed' : null}
                                            />
                                            <label htmlFor="inputMessage">Message</label>
            
                                            {this.validator.message('message', this.state.message, 'required|alpha_num_dash_space', { className: 'text-danger' })}
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                id="inputDetails"
                                                rows="3"
                                                name="details"
                                                onChange={this.readForm}
                                                className={this.state.details ? 'typed' : null}
                                            ></textarea>
                                            <label htmlFor="inputDetails">
                                                Aditional Details
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-block">
                                            Send Message
                                        </button>
                                    </form>
                                }

                                {/* Cambia el formulario y muestra este mensaje */}
                                {this.state.status === 'success' &&
                                    <React.Fragment>
                                        <p>Thank you for your message. Our Customer Success Team will get back to you as soon as possible.</p>
                                        <div className="success-img">
                                            <img src={ComboSvg} alt="Combo"/>
                                        </div>
                                    </React.Fragment>
                                }

                                <hr/>

                                <div className="social-networks">
                                    <p>Social Networks</p>
                                    <SocialNetworks />
                                </div>

                            </section>
                            {/* .contact-form */}
                        </div>

                        <div className="col-md-4 col-lg-6 message">
                            <h4>How can we contribute?</h4>
                            <p>Some of the reasons why your message would help us are these:</p>
                            <ul>
                                <li>Report a specific bug on the web</li>
                                <li>To contribute ideas for web improvement</li>
                                <li>To know how to collaborate with the developer's work</li>
                                <li>Contact our developer for your website</li>
                            </ul>
                        </div>
                        {/* .message */}
                    </div>
				</div>
			</main>
		);
	}
}

export default Contact;
