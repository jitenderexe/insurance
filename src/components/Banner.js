import React, {Component} from 'react';
import Header from './Header';

class Banner extends React.Component{
    render(){
        return(
    
    <div class="App">
            {/* <!-- banner --> */}
    <div class="banner" id="home">
        
        {/* <!-- header --> */}
        <div>
            <Header />
        </div>
        {/* <!-- //header --> */}

        <div class="container">
            <div class="banner-text">
                <div class="slider-info">
                    <h3>protect your family with insurance</h3>
                    <p class="text-white mt-sm-4 mt-2">Rutrum congue donec leo eget malesuada ras ultricies ligula sed magna
                        dictum porta.</p>
                    <a class="btn btn-primary mt-4 agile-link-bnr scroll" href="#about" role="button">View
                        More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- //banner --> */}
</div>
    );
    }
}

export default Banner;
