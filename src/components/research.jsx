import React, { Component } from 'react';

export default class Research extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-research" data-section="research">
                    <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/heart.png)'}} data-stellar-background-ratio="0.1"><div class="overlay"></div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <h1 className="colorlib-heading">Research</h1>
                                            <h2 className="colorlib-heading">Overview</h2>
                                            General research themes:
                                            <ul>
                                                <li className="randomGeneralResearch">Molecular Simulation Methods</li>
                                                <li className="randomGeneralResearch">Computational Geometry</li>
                                                <li className="randomGeneralResearch">Network Theory</li>
                                            </ul>
                                            Specific research themes:
                                            <ul>
                                                <li className="randomSpecificResearch">Monte Carlo Simulation</li>
                                                <li className="randomSpecificResearch">Voronoi Diagrams</li>
                                                <li className="randomSpecificResearch">Glass Structure</li>
                                            </ul>
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