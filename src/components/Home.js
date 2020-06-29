import React from 'react';
import Banner from './Banner';
import About from './About';
import Ourwork from './Ourwork';
import Testimonials from './Testimonials';
import More from './More';
import Contact from './Contact';
import Services from './Services';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';


class Home extends React.Component{
    render(){
        return(
            <div>
                <Banner />
                <About />
                <Ourwork />
                <Testimonials />
                <More />
                <Contact />
                <Services />
                <Footer />
                <Login />
                <Register />
            </div>
        );
    }
}

export default Home;