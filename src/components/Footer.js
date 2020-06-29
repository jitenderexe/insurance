import React, {Component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div class="footerv4-w3ls" id="footer">
                    <div class="footerv4-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-sm-6 footv4-left">
                                    <h3>About Us</h3>
                                    <h2>
                                        <a href="index.html">Insurance</a>
                                    </h2>
                                    <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum
                                        has
                                        been
                                        the
                                        industry's standard.</p>
                                    <div class="footerv4-social">
                                        <h3>stay connected</h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span class="fab fa-facebook-f icon_facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="fab fa-twitter icon_twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="fab fa-dribbble icon_dribbble"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="fab fa-google-plus icon_g_plus"></span>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                                    {/* <!-- //footer social --> */}

                            </div>
                                <div class="col-lg-3 col-sm-6 footv4-content mt-sm-0 mt-4">
                                    <h3>featured content</h3>
                                    <ul class="v4-content">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="#about" class="scroll">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#work" class="scroll">work</a>
                                        </li>
                                        <li>
                                            <a href="#testi" class="scroll">testimonials</a>
                                        </li>
                                        <li>
                                            <a href="#contact" class="scroll">contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 footv4-left fv4-g3 my-lg-0 my-4">
                                    <h3>Latest releases</h3>
                                    <ul class="v4-rel">
                                        <li>
                                            <a href="#">
                                                Lorem ipsum dolor sit amet.Cras rutrum iaculis enim, non mattis.
                                            </a>
                                            <p class="text-white">February 15, 2018</p>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Lorem ipsum dolor sit amet.Cras rutrum iaculis enim, non mattis.
                                            </a>
                                            <p class="text-white">February 18, 2018</p>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Lorem ipsum dolor sit amet.Cras rutrum iaculis enim, non mattis.
                                            </a>
                                            <p class="text-white">February 20, 2018</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 footv4-left">
                                    <h3>newsletter</h3>
                                    <form action="#" method="post">
                                        <input type="text" placeholder="Your name" name="name" required />
                                        <input type="email" placeholder="Your Email" name="email" required />
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /footerv4-top --> */}
                    </div>
                </div>
                    {/* <!-- //footer --> */}
                <div class="cpy-right">
                    <p>© 2020 Insurance. All rights reserved </p>
                </div>
</div>

);
}
}

export default Footer;