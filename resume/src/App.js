import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import OtherNav from './pages/otherNav.jsx';
import Home from './pages/home.jsx';
import Blog from './pages/blog.jsx';


class App extends Component {
  componentDidMount() {
    document.title = "Marisha Hoza"
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          {/* <Nav/> */}

          <OtherNav/>
          {/* <Overview/>        
          <About/>       
          <Experience/>      
          <Portfolio/> */}

          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog}/>

          

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
