import React, { Component } from 'react';

export default class Research extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-research" data-section="research">
                    <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/heart.png)'}} data-stellar-background-ratio="0.1"><div class="overlay"></div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row row-bottom-padded-sm">
                                    <div className="col-md-8">
                                        <div className="about-desc">
                                            <h1 className="colorlib-heading">Research</h1>
                                            <h2 className="colorlib-heading">Overview</h2>
                                            <p>
                                                I am a PhD student in the Theoretical Chemistry department at the University of Oxford,
                                                working at the interface of Chemistry, Physics and Materials.
                                            </p>
                                            <p>
                                                My research is all about applying network theory to understand and predict the structure of low-dimensional materials,
                                                using a combination of theory and numerical simulation.
                                            </p>
                                            <p>
                                                I have developed multiple high-throughput Monte Carlo methods to generate atomic configurations with varying coordination environments
                                                and topologies, so please get in touch if any of the content below looks interesting to you!
                                            </p>
                                            <h2 className="colorlib-heading">Research Themes</h2>
                                            <ul>
                                                <li className="randomResearch">Molecular Simulation Methods</li>
                                                <li className="randomResearch">Computational Geometry</li>
                                                <li className="randomResearch">Network Theory</li>
                                                <li className="randomResearch">Persistent Homology</li>
                                                <li className="randomResearch">Percolation Theory</li>
                                            </ul>
                                            {/*<h2 className="colorlib-heading">Specific Themes</h2>*/}
                                            {/*<ul>*/}
                                            {/*    <li className="randomSpecificResearch">Monte Carlo Simulation</li>*/}
                                            {/*    <li className="randomSpecificResearch">Voronoi Diagrams</li>*/}
                                            {/*    <li className="randomSpecificResearch">Glass Structure</li>*/}
                                            {/*</ul>*/}
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