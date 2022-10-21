import React, { Component } from 'react';
// import Footer from '../../parts/Footer/Footer';
// import Navigation from '../../parts/Navigation/Navigation';
import Header from './parts/Header';
import About from './parts/About';
// import Tech from './parts/Tech';
import Experience from './parts/Experience';
// import Contact from './parts/Contact';

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <About />
                {/* <Tech /> */}
                <Experience />
                {/* <Contact /> */}
            </React.Fragment>
        );
    }
}

export default Homepage;