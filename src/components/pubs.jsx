import React, { Component } from 'react';
import Paper from './papers'

export default class Pubs extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-pubs" data-section="pubs">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                                <h1 className="colorlib-heading">Publications</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <Paper doi={"10.1080/00268976.2019.1605099"} title={"Constructing Bilayers with Tuneable Ring Statistics and Topologies"} num={"3"}
                                        abstract={"A computationally-tractable method is developed and described to generate two-dimensional networks with the aim of producing configurations for thin films (bilayers) of SiO2 and related materials. " +
                                        "The method developed allows ideal (defect-free) networks of any given shape to be grown from seeds with both tuneable ring statistics (ring distributions) and topologies, the latter characterised by the Aboav-Weaire parameter, α. " +
                                        "The method developed is demonstrated by growing networks which differ in their ring distributions and topologies as controlled by a combination of the choice of the “allowed” rings and the effective growth “temperature”. " +
                                        "Configurations are generated with Aboav-Weaire parameters commensurate with those obtained from an analysis of experimental configurations, improving significantly on previous methods for generating these networks (which systematically underestimate this parameter). " +
                                        "The ability to efficiently grow configurations allows us to explore the structural basis of Lemaitre’s law (which couples the underlying network ring distribution second moment with the fraction of six-membered rings, p6) in terms of maximum entropy. " +
                                        "A rationale for the commonly observed value of p6 ∼ 0.4 is presented as a balance between entropic and enthalpic contributions to the free energy. " +
                                        "The deviations of the respective ring areas from the ideal are discussed and the relative insensitivity of the ring area (in systems of this type) to relatively strong distortions is highlighted."}/>
                                        <Paper doi={"10.1088/1361-648X/aae61a"} title={"Controlling Disorder in Two-Dimensional Networks"} num={"2"}
                                        abstract={"Two-dimensional networks are constructed by reference to a distribution of ring sizes and a parameter (α) which controls the preferred nearest-neighbour spatial correlations, and allows network topologies to be varied in a systematic manner. " +
                                        "Our method efficiently utilizes the dual lattice and allows the range of physically-realisable configurations to be established and compared to networks observed for a wide range of real and model systems. " +
                                        "Three different ring distributions are con- sidered; a system containing 5-, 6- and 7-membered rings only (a proxy for amorphous graphene, aG), the configuration proposed by Zachariasen in 1932, and a configuration observed experimentally for thin (near-2D) films of SiO2. " +
                                        "The system energies are investigated as a function of the network topologies and the range of physically-realisable structures established and compared to known experimental results. " +
                                        "The limits on the parameter α are discussed and compared to previous results. " +
                                        "The evolution of the network structure as a function of topology is discussed in terms of the ring-ring pair distribution functions."}/>
                                        <Paper doi={"10.1021/acs.jpca.7b05279"} title={"A Coarse-Grained Model for Free and Template-Bound Porphyrin Nanorings"} num={"1"}
                                        abstract={"Coarse-grained simulation models are developed to study both templated and untemplated porphyrin nanoring systems. " +
                                        "Key interactions are modelled with relatively simple (and physically-motivated) energy functions which allow for relatively facile transfer both between different ring sizes and between the templated and untemplated systems. " +
                                        "The effect of varying the model parameters on the respective radii of gyration are determined. " +
                                        "The effects of including different templates on the ring structure are investigated both in terms of the detailed geometry of the template and the interaction strength between the template and the metal centres in the nanorings. " +
                                        "The role of the template-nanoring interaction strength in controlling potential “caterpillar track” rotational motion is discussed. " +
                                        "The relationship of the model to experimental small-angle X-ray and electron spin resonance results is discussed."}/>
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