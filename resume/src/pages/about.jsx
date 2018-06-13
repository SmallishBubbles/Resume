import React from 'react';
import styled from 'styled-components';


const WrapperLeft = styled.div`
	width: 45%;
	background-color: rgb(161, 171, 175, 0.5);
	height: 48em;
    margin-left: 2em;
    margin-top: 4em;
	border: 2px solid black;
	float: left;
	border-radius: 30px;
`;

const WrapperRight = styled.div`
	width: 45%;
	background-color: rgb(161, 171, 175, 0.5);
	height: 48em;
    margin-right: 2em;
    margin-top: 4em;
	border: 2px solid black;
	float: right;
	border-radius: 30px;
`;



class About extends React.Component {
    render() {
        return (
            <section className="test" id="AboutMeForest">
                <WrapperLeft></WrapperLeft>
                <WrapperRight></WrapperRight>
            </section>
        )
    }
};







export default About;