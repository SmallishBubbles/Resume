import React from 'react';
import styled from 'styled-components';

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
	height: 56%;
	margin-right: 2%;
	margin-top: 27%;
	float: right;
	border-radius: 400px 30px 30px 30px;
`;

const Skill = styled.div`
	width: 90%;
	height: auto;
	border-radius: 20px;
	margin: 2% 2%;
	padding: 2% 2.5%;
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
`


// --------------------- about me nonsense ---------------------------


const Test = styled.div`
	height: 20%;
	width: 50%;
	display: block;
	float: right;
	clear: right;
	margin: 3% 3% 0% 0%;
	padding: 0%
`

const Test2 = styled.div`
	height: 40%;
	width: 40%;
	display: block;
	float: left;
	clear: left;
	margin: 3% 0% 0% 3%;
`

const Test3 = styled.div`
	height: 48%;
	width: 40%;
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
	background-color: black;
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
					<Skill>
						HTML
						<TriangleUp />
						<TriangleDown />
						<TriangleUp />
						<TriangleDown />
						<TriangleUp />
						<TriangleDown />
						<TriangleUp />
						<TriangleDown />
						<TriangleUp />
						<TriangleDown />
						<TriangleUp />
						<TriangleDown />
						<TriangleUp />
						<TriangleDown />
						<TriangleUp />
						<TriangleDown />
					</Skill>
					<Skill>CSS</Skill>
					<Skill>JavaScript</Skill>
					<Skill>React</Skill>
					<Skill>GraphQL with Prisma</Skill>
					<Skill>Node / Express</Skill>
					<Skill>NPM & Yarn</Skill>
				</WrapperLeft>

				<WrapperRight> 
					<Test2 />

					<Test> 
						<AboutPic id="city"/>  
						<SliderBox>
							<SliderLine/>
							<Slider/>
						</SliderBox>
						<AboutPic id="mountains"/> 
					</Test>
					<Test> 
						<AboutPic id="unicorn"/>  
						<SliderBox>
							<SliderLine />
							<Slider />
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



					</Test3>

					<Test> 
						<AboutPic id="dog"/>  
						<SliderBox>
							<SliderLine />
							<Slider />
						</SliderBox>
						<AboutPic id="cat"/> 
					</Test>
					<Test> 
						<AboutPic id="tea"/>  
						<SliderBox>
							<SliderLine />
							<Slider />
						</SliderBox>
						<AboutPic id="coffee"/> 
					</Test>
					
				</WrapperRight>
			</section>;
    }
};







export default About;