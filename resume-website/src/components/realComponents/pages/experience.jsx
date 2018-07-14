import React from 'react';
import styled from 'styled-components';
import StateStreet from '../images/logos/StateStreet.png';
import Arrow from '../images/logos/Arrow.png';
import SkillSpire from '../images/logos/SkillSpire.png';
import Paper from '../images/logos/paperboat.png';
import OCLogo from '../images/logos/OC.png';
import SpicyEskimo from '../images/logos/SpicyEskimoArt.png';
import './temporaryCSS.css'


const Title = styled.div`
	float: center;
	clear: both;
	margin: auto;
	padding: 2px;
	height: auto;
	width: 50%;
	text-align: center;
	font-size: 3em;
	font-family: 'Sacramento', cursive;
`;

const Education = styled.div`
	float: left;
	clear: left;
	height: auto;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin: 7vw 2vw;
	border-radius: 5px 30px;
	text-align: center;
	box-shadow: -2px -2px 5px inset #2d4465;
	padding: 1%;
`;

const Job = styled.div`
	float: right;
	clear: right;
	height: auto;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin-right: 2vw;
	border-radius: 30px 5px;
	text-align: center;
	box-shadow: 2px -2px 5px inset #2d4465;
	padding: 1%;
`;

const Resume = styled.div`
	float: left;
	clear: left;
	height: auto;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin: 2vw;
	border-radius: 5px 30px;
	text-align: center;
	box-shadow: -2px -2px 5px inset #2d4465;
	padding: 1%;
`;

const TimelineBox = styled.div`
	margin: 0% auto;
	height: 100%;
	width: 30%;
`

const Timeline = styled.div`
	height: 80%;
	width: 5px;
	border-radius: 5px;
	background-color: darkgrey;
	margin 10% auto;
`

const Line = styled.div`
	position: relative;
	top: -73%;
	height: auto;
	border-bottom: 5px solid darkgrey;
	width: 50%;
	padding: 0%;
	text-align: center;
`





class Experience extends React.Component {
    render() {
        return <section className="test" id="PastExperienceRiver">
				<Title> Experience </Title>
				
				<Education> 
					<img src={SkillSpire} width="50%" height="auto" alt="SkillSpire Logo"/>
					<p> Full Stack Web Devolopment Bootcamp </p>
				</Education>
				
				<Job> 
					<img src={Arrow} width="45%" height="auto" alt="Arrow Emblems Logo"/>
					<p> Customer Service Rep </p>
				</Job>
				<Education> 
					<img src={OCLogo} width="50%" height="auto" alt="OC Logo"/>
					<p> BBA / Art Minor </p>

				</Education>
				<Job>
					<img src={StateStreet} width="50%" height="auto" alt="State Street Logo"/>
					<p> Functional Specialist / Financial Accountant </p>
				</Job>
				<Resume>
					<a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
					<img src={Paper} width="35%" height="auto" alt="Origami Paper Boat"/>
					</a>
					<p> Prefer to see my resume in <a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">paper format?</a>
					</p>
				</Resume>
				<Job> 
					<img src={SpicyEskimo} width="50%" height="auto" alt="Spicy Eskimo Art Logo"/>
					<p> Freelance Art </p>
				</Job>

				<TimelineBox>
					<Timeline/>
					<Line>March-July 2018</Line>
					<Line id="arr">Current</Line>
					<Line id="state">Jan 2016-Aug 2017</Line>
					<Line id="OC"> 2011-2015 </Line>
					<Line id="art"> Ongoing </Line>
				</TimelineBox>
			</section>;
    }
};




export default Experience;