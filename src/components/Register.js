import React, {Component} from 'react';

class Register extends React.Component{
    render(){
        return(
            <div>
                <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel1">Register</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action="#" method="post" class="p-3">
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label">Username</label>
                                            <input type="text" class="form-control" placeholder=" " name="Name" id="recipient-rname"
                                                required="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="recipient-email" class="col-form-label">Email</label>
                                            <input type="email" class="form-control" placeholder=" " name="Email" id="recipient-email"
                                                required="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password1" class="col-form-label">Password</label>
                                            <input type="password" class="form-control" placeholder=" " name="Password" id="password1"
                                                required="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password2" class="col-form-label">Confirm Password</label>
                                            <input type="password" class="form-control" placeholder=" " name="Confirm Password" id="password2"
                                                required="" />
                                        </div>
                                        <div class="sub-w3l">
                                            <div class="sub-agile">
                                                <input type="checkbox" id="brand2" value="" />
                                                <label for="brand2" class="mb-3 text-white">
                                                    <span></span>I Accept to the Terms & Conditions</label>
                                            </div>
                                        </div>
                                        <div class="right-w3l">
                                            <input type="submit" class="form-control" value="Register" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Register;

