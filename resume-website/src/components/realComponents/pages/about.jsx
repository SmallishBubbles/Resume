import React from 'react';
import styled from 'styled-components';
import './temporaryCSS.css';


// --------------------- main wrappers ---------------------------
const WrapperLeft = styled.div`
	width: 47%;
	// background-color: #344f76;
	height: 83%;
	margin-left: 2%;
	margin-top: 12%;
	float: left;
	border-radius: 30px 400px 30px 30px;
`;

const WrapperRight = styled.div`
	width: 47%;
	background-color: #344f76;
	height: auto;
	margin-right: 2%;
	margin-top: 27%;
	float: right;
	border-radius: 400px 30px 30px 30px;
	padding: 2vh 0% 1vh;
`;

const Skill = styled.div`
	width: 90%;
	height: auto;
	border-radius: 20px;
	margin: 2% 2%;
	padding: 1% 1%;
	background-color: #344f76;
	font-size: 1.5vw;
`;

const Blurb = styled.div`
	width: 85%;
	height: auto;
	border-radius: 20px 350px 20px 20px;
	margin: 10% 2% 4%;
	background-color: #344f76;
	padding: 5%;
	font-size: 2.5vw;
`;

// --------------------- skill bars and info ---------------------------

const TriangleUp = styled.div`
	width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 20px solid #686c4f;
	display: inline-block;
	float: right;
`;

const TriangleDown = styled.div`
	width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 20px solid #686c4f;
	display: inline-block;
	float: right;
`;

const Right = styled.div`
	text-align: right;
	margin-top: 3%;
	font-style: italic;
`


// --------------------- about me nonsense ---------------------------


const Test = styled.div`
	height: 8.5vw;
	width: 50%;
	display: block;
	float: right;
	clear: right;
	margin: 1em 1em 0em 0em;
	padding: 0%
`

const Test2 = styled.div`
	height: 20vw;
	width: 38%;
	display: block;
	float: left;
	clear: left;
	margin: 3% 0% 0% 3%;
`

const Test3 = styled.div`
	height: 48%;
	width: 38%;
	display: block;
	float: left;
	clear: left;
	margin: 3% 0% 0% 3%;
	text-align: center;
	font-size: 2.5vw;
	color: #686c4f;
`;

const AboutPic = styled.div`
	height: 90%;
	width: 35%;
	display: inline-block;
	margin: 1%;
`

const SliderBox = styled.div`
	height: 90%;
	width: 24%;
	display: inline-block;
	margin: 1%;
`

const SliderLine = styled.div`
	width: 100%;
	height: 2px;
	background-color: darkgrey;
	margin: 70% auto;
`

const Slider = styled.div`
	width: 20%;
	height: 20%;
	border-radius: 5px;
	background-color: grey;
	position: relative;
	top: -63%;
	left: 40%;
`



class About extends React.Component {
    render() {
        return <section className="test" id="AboutMeForest">
				<WrapperLeft>
					<Blurb>
						<div>
							"Capability is not based on 
							<br/> 
							age or experience, but on how much you're willing to learn." 
							<br/>
						</div>
						<Right>
							- Stacey Abrams
						</Right>
					</Blurb>
					
					<Skill><div className="skillBar" id="skillHTML">HTML</div></Skill>
					<Skill><div className="skillBar" id="skillCSS">CSS</div></Skill>
					<Skill><div className="skillBar" id="skillJavaScript">JavaScript</div></Skill>
					<Skill><div className="skillBar" id="skillReact">React</div></Skill>
					<Skill><div className="skillBar" id="skillGraphQL">GraphQL with Prisma</div></Skill>
					<Skill><div className="skillBar" id="skillNode">Node / Express</div></Skill>
					<Skill><div className="skillBar" id="skillNPM">NPM & Yarn</div></Skill>
					<Skill><div className="skillBar" id="skillGitHub">GitHub</div></Skill>
				</WrapperLeft>

				<WrapperRight> 
					<Test2 />

					<Test> 
						<AboutPic id="city"/>  
						<SliderBox>
							<SliderLine/>
							<Slider id="inOut"/>
						</SliderBox>
						<AboutPic id="mountains"/> 
					</Test>
					<Test> 
						<AboutPic id="unicorn"/>  
						<SliderBox>
							<SliderLine />
							<Slider id="magics"/>
						</SliderBox>
						<AboutPic id="mermaid"/> 
					</Test>

					<Test3>
						Motto:<br/>
						Be uncommon.
						<br/>
						<br/>
						Hometown:<br/>
						North Pole, AK
						<br/>
						<br/>
						Visit <a href="/feed">my blog</a>
					</Test3>

					<Test> 
						<AboutPic id="dog"/>  
						<SliderBox>
							<SliderLine />
							<Slider id="pets"/>
						</SliderBox>
						<AboutPic id="cat"/> 
					</Test>
					<Test> 
						<AboutPic id="tea"/>  
						<SliderBox>
							<SliderLine />
							<Slider id="drinky"/>
						</SliderBox>
						<AboutPic id="coffee"/> 
					</Test>
					
				</WrapperRight>
			</section>;
    }
};







export default About;