import React, {Component} from 'react';

class More extends React.Component{
    render(){
        return(
<div>
<section class="agile_stats py-sm-5" id="more">
        <div class="container">
            <div class="py-lg-5 w3-abbottom">
                <div class="row py-5">
                    <div class="counter col-lg-3 col-6">
                        <i class="far fa-smile"></i>
                        <div class="timer count-title count-number mt-2 text-white" data-to="5100" data-speed="1500"></div>
                        <p class="count-text text-capitalize text-white">happy clients</p>
                    </div>

                    <div class="counter col-lg-3 col-6">
                        <i class="fas fa-database"></i>
                        <div class="timer count-title count-number mt-2 text-white" data-to="971" data-speed="1500"></div>
                        <p class="count-text text-capitalize text-white">insurance projects</p>
                    </div>
                    <div class="counter col-lg-3 col-6 mt-lg-0 mt-4">
                        <i class="fas fa-users"></i>
                        <div class="timer count-title count-number mt-2 text-white" data-to="21" data-speed="1500"></div>
                        <p class="count-text text-capitalize text-white">professional agents</p>
                    </div>
                    <div class="counter col-lg-3 col-6 mt-lg-0 mt-4">
                        <i class="fas fa-award"></i>
                        <div class="timer count-title count-number mt-2 text-white" data-to="27" data-speed="1500"></div>
                        <p class="count-text text-capitalize text-white">years of experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>     
           );
        
    }
}
export default More;
