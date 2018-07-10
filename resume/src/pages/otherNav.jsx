import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
    width: 95%;
    height: auto:
    background-color: rgb(17, 135, 206, 0.8);
    padding: 1%;
    border-radius: 5px;
`

const NavStuff = styled.nav`
    font-family: 'Sacramento', cursive;
    font-size: 1.5em;
`;

const Element = styled.div`
	text-align: center;
    padding: 2%;
    display: inline-block;
    float: right;
`;

const Link = styled.a`
	color: black;
	text-decoration: none;
`;





class OtherNav extends React.Component {
    render() {
        return (
            <NavWrapper>
                <NavStuff>
                    <Link><Element> Blog </Element></Link>
                    <Link href="#ImaginationOcean"><Element> Portfolio </Element></Link>
                    <Link href="#PastExperienceRiver"><Element>Resume</Element></Link>
                    <Link href="#Overviewmountains"><Element> About </Element></Link>
                </NavStuff>
            </NavWrapper>
        );
    }
};





export default OtherNav;