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
                    <Link><Element> BLOG </Element></Link>
                    <Link href="#ImaginationOcean"><Element> PORTFOLIO </Element></Link>
                    <Link href="#PastExperienceRiver"><Element>RESUME</Element></Link>
                    <Link href="#Overviewmountains"><Element> ABOUT </Element></Link>
                </NavStuff>
            </NavWrapper>
        );
    }
};





export default OtherNav;