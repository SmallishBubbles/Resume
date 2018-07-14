import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
	width: 30%;
	height: 30%;
	display: inline-block;
	margin: 5% 0% 0% 2%;
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 2px 10px;
	padding-top: 10%;
	font-size: 3vw;
	background-color: #2c4364;
`;

const Title = styled.h1`
	text-align: center;
	margin: auto;
    font-family: 'Sacramento', cursive;
    font-size: 2.5em;
    padding: 3% 0% 0%;
`;



class Portfolio extends React.Component {
    render() {
        return (
            <section class="test" id="ImaginationOcean">
                <Title> Portfolio Projects </Title>
                <Project> TBA </Project>
                <Project> TBA </Project>
                <Project> TBA </Project>
                <Project> TBA </Project>


                {/* <Project> Flashcards App Tutorial </Project>
                <Project> Full-Stack Tutorial </Project>
                <Project> Etsy and/or Art Portfolio Website </Project>
                <Project> You.Me.We Community (??) </Project> */}
            </section>
        )
    }
};





export default Portfolio;