import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import Research from './components/research'
import Pubs from './components/pubs'

class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <Home></Home>
                        <Research></Research>
                        <Pubs></Pubs>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
