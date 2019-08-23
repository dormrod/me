import React, { Component } from 'react';

export default class Podcast extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-podcast" data-section="podcast">
                    <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/podcast.png)'}} data-stellar-background-ratio="0.1"><div class="overlay"></div>
                        <div className="colorlib-narrow-content">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row row-bottom-padded-sm">
                                        <div className="col-md-8">
                                            <div className="about-desc">
                                                <h1 className="colorlib-heading">Theoretically Speaking Podcast</h1>
                                                <p>
                                                What is Theoretical Chemistry? This is a question we get asked all the time, and so
                                                <a href="https://twitter.com/timothyahburd"> Tim </a> and I set out to tell people all about it.
                                                </p>
                                                <p>
                                                    The result was <i>Theoretically Speaking</i>, a podcast discussing research at the forefront of theoretical chemistry,
                                                    featuring interviews with leading academics. In the first series we covered areas from massive-scale biomolecular simulation,
                                                    to density functional theory and quantum computing.
                                                </p>
                                                <p>
                                                    We were so surprised with the interest that a second series is now underway with two excellent new hosts, Hannah and Issy.
                                                </p>
                                                <p>
                                                    If you are interested please have a listen <a href="https://soundcloud.com/theoreticallyspeaking"> here!</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}