import React, { Component } from 'react';
import GalleryFigure from "./gallery_figure";

export default class Gallery extends Component {
    render() {
        return(
            <section className="colorlib-gallery" data-section="gallery">
                <div className="colorlib-narrow-content">
                    <h1 className="colorlib-heading">Gallery</h1>
                    <div className="row">
                        <GalleryFigure caption={"There are many different ways to organise the same rings, but some are more favoured than others in nature."} image={"ring_arrangements.png"} url={"XXX"}></GalleryFigure>
                        <GalleryFigure caption={"Maximum entropy methods can predict the ring distributions in amorphous materials."} image={"max_entropy.png"} url={"XXX"}></GalleryFigure>
                    </div>
                    <div className="row">
                        <GalleryFigure caption={"The degree of disorder in networks can be controlled using temperature."} image={"mx2_phases.png"} url={"XXX"}></GalleryFigure>
                        <GalleryFigure caption={"Diversity in ring statistics increases systematically with temperature."} image={"temperature.png"} url={"XXX"}></GalleryFigure>
                    </div>
                </div>
            </section>
        );
    }
}