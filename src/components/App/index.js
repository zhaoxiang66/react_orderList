import React, { Component } from 'react';
import OrderList from '../OrderList';
import Header from '../Header';
import './style.css';
class App extends Component {
    render() {
        return (
            <div>
                <div className="app">
                    <Header/>
                    <OrderList/>
                </div>
            </div>
        );
    }
}

export default App;