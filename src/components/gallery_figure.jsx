import React, { Component } from 'react';

export default class GalleryFigure extends Component {
    render() {
        const image = "url(images/"+this.props.image+")";
        return(
            <div className="col-md-6">
                <div className="galleryfigure" style={{backgroundImage: image}}>
                    <div className="desc">
                        <div className="con">
                            <h3><a href={this.props.url}>{""}</a></h3>
                            <span>{this.props.caption}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}