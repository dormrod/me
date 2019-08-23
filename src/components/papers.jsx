import React, { Component } from 'react';

export default class Paper extends Component {
    render() {
        const address = "https://doi.org/"+this.props.doi
        const hashid = "#"+this.props.num
        const id = ""+this.props.num
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={hashid} aria-expanded="false" aria-controls={id}> {this.props.title}
                        </a>
                    </h4>
                </div>
                <div id={id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">
                <p>
                    {this.props.abstract} <a href={address}>Full Text</a>
                </p>
                <row>
                    <div className="col-md-6">
                        <span className="__dimensions_badge_embed__" data-doi={this.props.doi} data-style="small_circle"/>
                    </div>
                    <div className="col-md-6">
                        <div data-badge-popover="right" data-badge-type="donut" data-doi={this.props.doi} className="altmetric-embed"></div>
                    </div>
                </row>
            </div>
                </div>
            </div>
        );
    }
}