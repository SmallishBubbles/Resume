import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
	float: center;
	clear: both;
	margin: auto;
	padding: 2px;

	height: auto;
	width: 50%;

	text-align: center;
	font-size: 3em;
	text-shadow: 1px 1px 10px white;
`;

const Education = styled.div`
    float: left;
    clear: left;
	height: 10em;
	width: 30%;
    background-color: rgb(161, 171, 175, 0.75);
    border: 2px solid black;
    margin: 5em 2em;
    border-radius: 5px 30px;
    text-align: center;
`;

const Job = styled.div`
	float: right;
	clear: right;
	height: 10em;
	width: 30%;
	background-color: rgb(161, 171, 175, 0.75);
	border: 2px solid black;
	margin-right: 2em;
    border-radius: 30px 5px;
    text-align: center;
`;

const Resume = styled.div`
	float: left;
	clear: left;
	height: 5em;
	width: 30%;
	background-color: rgb(161, 171, 175, 0.75);
	border: 2px solid black;
	margin: 2em;
    border-radius: 5px 30px;
    text-align: center;
`;

class Experience extends React.Component {
    render() {
        return (
            <section className="test" id="PastExperienceRiver">
                <Title> Experience </Title>
                <Education> SkillSpire </Education>
                <Job> Arrow Emblems </Job>
                <Education> BBA / Art Minor </Education>
                <Job> State Street Corp. </Job>
                <Resume> Paper Resume </Resume>
                <Job> Freelance Art </Job>
            </section>
        )
    }
};




export default Experience;