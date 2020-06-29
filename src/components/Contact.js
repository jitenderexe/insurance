import React, {Component} from 'react';

class Contact extends React.Component{
    render(){
        return(
        
                <div class="contact-wthree" id="contact">
                    <div class="container py-sm-5">
                        <div class="title-section py-4">
                            <h3 class="main-title-agile">contact us</h3>
                            <span class="title-line">
                            </span>
                        </div>
                        <div class="row py-lg-5 py-4">
                            <div class="col-lg-4">
                                <div class="agile-contact-top">
                                    <h4>get in touch </h4>
                                    <p>1234k Avenue,Block-4,New York City.</p>
                                </div>
                                <hr />
                                <p>Donec mi nulla, auctor nec sem a, ornare auctor mi. Sed mi tortor, commodo a felis in,
                                    fringilla
                                    tincidunt
                                    nulla. Vestibulum volutpat non eros ut vulpuuctor nec sem </p>
                                <div class="d-sm-flex">
                                    <a class="btn btn-primary mt-4 agile-link-bnr scroll" href="#footer" role="button">subscribe
                                    </a>
                                    <a href="#" role="button" data-toggle="modal" data-target="#exampleModal1" class="btn btn-primary mt-4 ml-3 agile-link-bnr scroll text-white">
                                        Register Now</a>
                                </div>
            
                            </div>
                    <div class="offset-2"></div>
                        <div class="col-lg-6 mt-lg-0 mt-5">
                        {/* <!-- register form grid --> */}
                        <div class="register-top1">
                            <form action="#" method="get" class="register-wthree">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>
                                                First name
                                            </label>
                                            <input class="form-control" type="text" placeholder="Johnson" name="email"
                                                required="" />
                                        </div>
                                        <div class="col-md-6 mt-md-0 mt-4">
                                            <label>
                                                Last name
                                            </label>
                                            <input class="form-control" type="text" placeholder="Kc" name="name" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>
                                                Mobile
                                            </label>
                                            <input class="form-control" type="text" placeholder="xxxx xxxxx" name="email"
                                                required="" />
                                        </div>
                                        <div class="col-md-6 mt-md-0 mt-4">
                                            <label>
                                                Email
                                            </label>
                                            <input class="form-control" type="email" placeholder="example@email.com" name="email"
                                                required="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>
                                                Your message
                                            </label>
                                            <textarea placeholder="Type your message here" class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-agile btn-block w-100 font-weight-bold text-uppercase">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!--  //register form grid ends here --> */}
                    </div>
                </div>
            </div>
              </div>      
        );
        
    }
}
export default Contact;