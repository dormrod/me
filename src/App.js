import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import Research from './components/research'
import Pubs from './components/pubs'
import Coding from './components/coding'
import Gallery from './components/gallery'
import Podcast from './components/podcast'

function initializeReactGA() { 
    ReactGA.initialize('UA-180727245-1');
    ReactGA.pageview('/Home');
}

class App extends Component {
    render() {
        initializeReactGA();
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <Home></Home>
                        <Research></Research>
                        <Gallery></Gallery>
                        <Pubs></Pubs>
                        <Coding></Coding>
                        <Podcast></Podcast>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
