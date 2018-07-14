import React from 'react';
import styled from 'styled-components';
import {
    NavLink,
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

const NavWrapper = styled.div`
    width: 98%;
    height: auto:
    background-color: rgb(17, 135, 206, 0.8);
    padding: 1%;
`

const NavStuff = styled.nav`
    font-family: 'Sacramento', cursive;
    font-size: 1.5em;
`;

const Element = styled.div`
	text-align: center;
    padding: 0.5% 0% 0% 3%;
    display: inline-block;
    float: right;
`;

const Linky = styled.a`
	color: black;
	text-decoration: none;
`;





class OtherNav extends React.Component {
    render() {
        return <NavWrapper>
				{/* <NavStuff>
					<Linky to="/feed">
						<Element> Blog </Element>
					</Linky>
					<Linky href="#ImaginationOcean">
						<Element> Portfolio </Element>
					</Linky>
					<Linky href="#PastExperienceRiver">
						<Element>Resume</Element>
					</Linky>
					<Linky to="/">
						<Element> About </Element>
					</Linky>
				</NavStuff> */}

				<NavStuff>

					<NavLink className="linky" activeClassName="gray" exact={true} to="/drafts" title="Drafts">
						<Element>Drafts</Element>
					</NavLink>

					<Link className="linky" to="/feed" title="Feed">
						<Element>Blog</Element>
					</Link>

                    <NavLink className="linky" activeClassName="gray" exact={true} to="/" title="Home">
                        <Element>About</Element>
                    </NavLink>


					<Link to="/create" className="f6 link dim ba ph3 pv2 mb2 dib black">
						+ Create Draft
					</Link>
				</NavStuff>
			</NavWrapper>;
    }
};





export default OtherNav;