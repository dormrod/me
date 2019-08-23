import React, { Component } from 'react';
import Project from './project'

export default class Coding extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-coding" data-section="coding">
                    <div className="colorlib-narrow-content">
                        <h1 className="colorlib-heading">Coding</h1>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading">Journey</h2>
                                <p>
                                    
                                </p>
                                <h2 className="colorlib-heading">Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <Project title={"Triangle Raft"} subtitle={"Modern implentation of the triangle raft algorithm"} image={"triangle_raft.png"} url={"XXX"}></Project>
                            <Project title={"LATEX CV"} subtitle={"Minimalist and professional LATEX CV template"} image={"cv.png"} url={"XXX"}></Project>
                            <Project title={"mpl-scipub"} subtitle={"High quality graph plotting"} image={"2d_heat.png"} url={"https://mpl-scipub.readthedocs.io/en/latest/"}></Project>
                            <Project title={"MD 300 Lines"} subtitle={"Ultra-compact molecular simulation"} image={"benzene.png"} url={"XXX"}></Project>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}