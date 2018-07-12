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

          {/* <footer>
            <p>links to all the goodies</p>
            <p>although it just ocurred to me that I might put all the social media icons
                in bubbles that are coming up from a treasure chest or fat fish or something
            </p>
          </footer> */}

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
