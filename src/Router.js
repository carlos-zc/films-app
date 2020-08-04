import React , { Component } from 'react'
import { BrowserRouter, Switch ,Route } from "react-router-dom";

// Componentes
import Header from './components/Header';
import Error from './container/Error';
import Home from './container/Home';
import Footer from './components/Footer';
import Films from './container/Films';
import Film from './container/Film';
import Contact from './container/Contact';
import About from './container/About';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/films/:search?" component={Films} />
                    <Route exact path="/film/:id" component={Film} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />

                    <Route component={Error} />
                </Switch>

                <Footer />
            </BrowserRouter>

        )
    }
}

export default Router;