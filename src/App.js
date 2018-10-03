import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TabViewComponent from './components/TabViewComponent';
import CartGridView from './components/CartGridView';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <TabViewComponent />
        <CartGridView />
      </div>
    );
  }
}

export default App;
