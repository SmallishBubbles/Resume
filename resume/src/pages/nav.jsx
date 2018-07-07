import React from 'react';
import styled from 'styled-components';



const NavWrapper = styled.nav`
	position: fixed;
	right: 0.5em;
	background-color: rgb(17, 135, 206, 0.8);
	padding: 1vh 0;
    border-radius: 5px;
    vertical-align: middle;
`;

const Element = styled.div`
	text-align: center;
	padding: 1em;
	// border-radius: 5px 15px 5px;
`;

const Link = styled.a`
	color: black;
	text-decoration: none;
`;





class Nav extends React.Component {
    render() {
        return (
			<NavWrapper>
				<Link href="#OverviewMountains"><Element> HOME </Element></Link>
				<Link href="#AboutMeForest"><Element> ABOUT ME </Element></Link>
				<Element>BLOG</Element>
				<Link href="#PastExperienceRiver"><Element> RESUME </Element></Link>
				<Link href="#ImaginationOcean"><Element> PORTFOLIO </Element></Link>
			</NavWrapper>
		);
    }
};





export default Nav;