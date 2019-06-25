import React, { Component } from 'react';
import Paper from './papers'

export default class Pubs extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-pubs" data-section="pubs">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h1 className="colorlib-heading animate-box">Publications</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <Paper doi={"10.1080/00268976.2019.1605099"} title={"Constructing Bilayers with Tuneable Ring Statistics and Topologies"} num={"3"}/>
                                        <Paper doi={"10.1088/1361-648X/aae61a"} title={"Controlling Disorder in Two-Dimensional Networks"} num={"2"}/>
                                        <Paper doi={"10.1021/acs.jpca.7b05279"} title={"A Coarse-Grained Model for Free and Template-Bound Porphyrin Nanorings"} num={"1"}/>
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