import React, {Component} from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                        <nav class="navbar navbar-expand-lg navbar-light bg-gradient-secondary">
                            <h1>
                                <a class="navbar-brand text-white" href="index.html">
                                    Insurance
                                </a>
                            </h1>
                            <button class="navbar-toggler ml-md-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-lg-auto text-center">
                                        <li class="nav-item active  mr-lg-3 mt-lg-0 mt-3">
                                            <a class="nav-link" href="index.html">Home
                                                <span class="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li class="nav-item  mr-lg-3 mt-lg-0 mt-3">
                                            <a class="nav-link scroll" href="#about">about</a>
                                        </li>
                                        <li class="nav-item dropdown mr-lg-3 mt-lg-0 mt-3">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item scroll" href="#work">our work</a>
                                                <a class="dropdown-item scroll" href="#testi">testimonials</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item scroll" href="#more">more</a>
                                            </div>
                                        </li>
                                        <li class="nav-item mr-lg-3 mt-lg-0 mt-3">
                                            <a class="nav-link scroll" href="#contact">Contact</a>
                                        </li>
                                        <li class="nav-item mr-lg-3 mt-lg-0 mt-3">
                                            <a class="nav-link scroll" href="#services">Services</a>
                                        </li>
                                        <li>
                                            <button type="button" class="btn  ml-lg-2 w3ls-btn" data-toggle="modal" aria-pressed="false"
                                                data-target="#exampleModal">
                                                <i class="far fa-user-circle"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                        </nav>
                </header>
            </div>
        );
    }
}

export default Header;