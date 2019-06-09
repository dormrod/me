import React, { Component } from 'react';

export default class Aside extends Component {
    render() {
        return(
            <div>
                <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
                    <h1 id="colorlib-logo"><a href="index.html">XXX<span>.</span></a></h1>
                    <nav id="colorlib-main-menu" role="navigation">
                        <ul>
                            <li className="colorlib-active"><a href="index.html">Home</a></li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">CV</a></li>
                        </ul>
                    </nav>

                    <div className="colorlib-footer">
                        <p> Thanks to <a href="https://colorlib.com">Colo(u)rlib</a> and <a
                            href="https://medium.com/free-code-camp/portfolio-app-using-react-618814e35843">Dhruv
                            Barochiya</a> for the inspiration
                        </p>
                        <ul>
                            <li><a href="#"><i className="icon-github"></i></a></li>
                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                            <li><a href="#"><i className="icon-soundcloud"></i></a></li>
                            <li><a href="#"><i className="icon-linkedin"></i></a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        );
    }
}
