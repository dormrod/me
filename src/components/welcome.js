import React, { Component } from 'react';

export default class Welcome extends Component {
    render () {
        return (
            <div id="colorlib-main">
			<div className="hero-wrap js-fullheight" style={{backgroundImage: 'url(images/bg_bw.jpg)'}} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="js-fullheight d-flex justify-content-center align-items-center">
					<div className="col-md-8 text text-center">
						<div className="img mb-4" style={{backgroundImage: 'url(images/me.jpg'}}></div>
						<div className="desc">
							<h1 className="mb-4">David Ormrod Morley</h1>
							{/*<h2 className="subheading">XXX</h2>*/}
							<p className="mb-4"> XXX </p>
							{/*<p><a href="#" className="btn-custom">More About Me <span className="ion-ios-arrow-forward"></span></a></p>*/}
							<ul className="ftco-social mt-3">
								<li><a href="#"><span className="icon-github"></span></a></li>
								<li><a href="#"><span className="icon-twitter"></span></a></li>
								<li><a href="#"><span className="icon-soundcloud"></span></a></li>
								<li><a href="#"><span className="icon-linkedin"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            </div>
        );
    }

}