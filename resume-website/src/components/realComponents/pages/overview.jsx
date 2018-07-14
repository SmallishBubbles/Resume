import React from 'react';
import styled from 'styled-components';

const Photo = styled.div`
	width: 10em;
	height: 10em;
	border-radius: 50%;
	margin: auto;
	margin-top: 20vh;
	box-shadow: 0px 0px 10px;
`;

const Name = styled.h1`
    font-family: 'Sacramento', cursive;
    font-size: 3em;
    padding: 0px;
    margin: 2% 0% 0%;
`

class Overview extends React.Component {
    render() {
        return <section className="test center" id="OverviewMountains">
				<Photo id="selfperson" />
				<Name>Marisha Hoza</Name>
				<h1>Full Stack Web Developer - Artist</h1>
				<p>Skip to <a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">my paper resume</a></p>
			</section>;
    }
};







export default Overview;