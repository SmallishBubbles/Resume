import React from 'react';
import Overview from './overview.jsx';
import About from './about.jsx';
import Experience from './experience.jsx';
import Portfolio from './portfolio.jsx';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Overview />
                <About />
                <Experience />
                <Portfolio /> 
            </div> 
        );
    }
};


export default Home