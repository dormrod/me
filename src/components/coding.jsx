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
                                    My coding journey started in my undergraduate master's year, using a molecular simulation code written in FORTRAN 77 (yes as in 1977).
                                    This can raise an eyebrow from some people, who imagine it has long been consigned to a museum,
                                    but actually there is a huge amount of scientific legacy code written in FORTRAN. The reasons are very simple:
                                    it has excellent array handling, easy memory management and it is <i>ferociously</i> quick.
                                </p>
                                <p>
                                    Since then I have self-taught C++ and Python. C++ is great for heavy scientific simulation,
                                    whereas I primarily use Python for data analysis and visualisation, or proof-of-concept algorithmic design.
                                </p>
                                <p>
                                    If I has any advice for learners, it would be to not be afraid of starting with language such as C,
                                    as you will learn a lot from having to manage types and memory.
                                    Secondly I always think it's easier to learn a language when you have a project as opposed to copying from a resource,
                                    so pick something you fancy doing and dive in.
                                    That seemed to work for this website!
                                </p>
                                <h2 className="colorlib-heading">Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <Project title={"Triangle Raft"} subtitle={"Modern implentation of the triangle raft algorithm"} image={"triangle_raft.png"} url={"XXX"}></Project>
                            <Project title={"LaTeX CV"} subtitle={"Minimalist and professional LATEX CV template"} image={"cv.png"} url={"XXX"}></Project>
                            <Project title={"mpl-scipub"} subtitle={"High quality graph plotting"} image={"2d_heat.png"} url={"https://mpl-scipub.readthedocs.io/en/latest/"}></Project>
                            <Project title={"MD 300 Lines"} subtitle={"Ultra-compact molecular simulation"} image={"benzene.png"} url={"XXX"}></Project>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}