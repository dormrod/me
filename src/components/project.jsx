import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const image = "url(images/"+this.props.image+")";
        return(
            <div className="col-md-6">
                <div className="project" style={{backgroundImage: image}}>
                    <div className="desc">
                        <div className="con">
                            <h3><a href={this.props.url}>{this.props.title}</a></h3>
                            <span>{this.props.subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}