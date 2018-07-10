import React from 'react';
import styled from 'styled-components';
import StateStreet from '../images/logos/StateStreet.png';
import Arrow from '../images/logos/Arrow.png';
import SkillSpire from '../images/logos/SkillSpire.png';
import Paper from '../images/logos/paperboat.png';
import OCLogo from '../images/logos/OC.png';
import SpicyEskimo from '../images/logos/SpicyEskimoArt.png';


const Title = styled.div`
	float: center;
	clear: both;
	margin: auto;
	padding: 2px;
	height: auto;
	width: 50%;
	text-align: center;
	font-size: 3em;
`;

const Education = styled.div`
	float: left;
	clear: left;
	height: 15%;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin: 5em 2em;
	border-radius: 5px 30px;
	text-align: center;
    //box-shadow: -2px -2px 5px inset #2d4465;
    padding: 1%;
`;

const Job = styled.div`
	float: right;
	clear: right;
	height: 15%;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin-right: 2em;
	border-radius: 30px 5px;
	text-align: center;
    //box-shadow: 2px -2px 5px inset #2d4465;
    padding: 1%;
`;

const Resume = styled.div`
	float: left;
	clear: left;
	height: auto;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin: 2em;
	border-radius: 5px 30px;
	text-align: center;
    //box-shadow: -2px -2px 5px inset #2d4465;
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

const Line1 = styled.div`
	position: relative;
	top: -73%;
	height: auto;
	border-bottom: 5px solid darkgrey;
	width: 50%;
	padding: 0%;
	text-align: center;
`

const Line2 = styled.div`
	position: relative;
	top: -83%;
	left: 50%;
	height: auto;
	border-bottom: 5px solid darkgrey;
	width: 50%;
	padding: 0%;
	text-align: center;
`;




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
					<img src={Paper} width="35%" height="auto" alt="Origami Paper Boat"/>
					<p> Prefer to see my resume in paper format? </p>
				</Resume>
				<Job> 
					<img src={SpicyEskimo} width="50%" height="auto" alt="Spicy Eskimo Art Logo"/>
					<p> Freelance Art </p>
				</Job>

				<TimelineBox>
					<Timeline/>
					<Line1>March-July 2018</Line1>
					<Line2>Current</Line2>
				</TimelineBox>
			</section>;
    }
};




export default Experience;