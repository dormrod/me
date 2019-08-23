import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return(
            <div>
                <nav href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(images/me.jpg)'}} />
                        <h1 id="colorlib-logo"><a href="index.html">David Ormrod Morley</a></h1>
                        {/*<span className="position"><a href="#">UI/UX/Designer</a> in Philippines</span>*/}
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                                <li><a href="#research" data-nav-section="research">Research</a></li>
                                <li><a href="#gallery" data-nav-section="gallery">Gallery</a></li>
                                <li><a href="#pubs" data-nav-section="pubs">Publications</a></li>
                                <li><a href="#coding" data-nav-section="coding">Coding</a></li>
                                <li><a href="#podcast" data-nav-section="podcast">Podcast</a></li>
                                <li><a href="#" data-nav-section="Podcast">CV</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                        <ul>
                            <li><a href="https://github.com/dormrod" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            <li><a href="https://twitter.com/_dormrod" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                            <li><a href="https://soundcloud.com/theoreticallyspeaking" target="_blank" rel="noopener noreferrer"><i className="icon-soundcloud2" /></a></li>
                            <li><a href="https://www.linkedin.com/in/david-ormrod-morley" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                        </ul>
                    </nav>
                    <div class="colorlib-footer">
                        <p> Hacked into submission from <a href="https://colorlib.com">Colo(u)rlib</a>, with thanks to <a
                            href="https://medium.com/free-code-camp/portfolio-app-using-react-618814e35843">Dhruv
                            Barochiya</a> for inspiration
                        </p>
                    </div>
                </aside>
            </div>
        );
    }
}