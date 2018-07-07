import React from 'react';
import styled from 'styled-components';

const Photo = styled.div`
	width: 10em;
	height: 10em;
	border-radius: 50%;
	margin: auto;
	margin-top: 15%;
	box-shadow: 0px 0px 10px;
`;

const Name = styled.h1`
`

class Overview extends React.Component {
    render() {
        return (
            <section className="test center" id="OverviewMountains">

                <Photo id="selfperson"></Photo>

                {/* this is where I will put my image of said self person */}
                <Name>Marisha Hoza</Name>
                <Name>Full Stack Web Developer - Artist</Name>

                <p>Be uncommon.</p>
                <p>Skip to my resume: link</p> 
                {/* lol I don't have a link for that yet! */}
            </section>
        )
    }
};







export default Overview;