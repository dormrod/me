import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome';
import Footer from './components/footer';
import Aside from './components/aside';

class App extends Component {
    render() {
        return (
            <div>
                <Aside></Aside>
                <Welcome></Welcome>
            </div>
        );
    }
}

export default App;
