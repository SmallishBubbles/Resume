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

const Link = styled.div`
	text-align: center;
	padding: 1em;
	// border-radius: 5px 15px 5px;
`;


class Nav extends React.Component {
    render() {
        return <NavWrapper>
					<Link>HOME</Link>
					<Link>ABOUT ME</Link>
					<Link>BLOG</Link>
					<Link>RESUME</Link>
					<Link>PORTFOLIO</Link>
				</NavWrapper>
    }
};





export default Nav;