import React from 'react';
import styled from 'styled-components';
import Git from '../images/icons/GitHub-Mark-32px.png'
import LinkedIn from '../images/icons/linkedin.png'
import Etsy from '../images/icons/etsy-icon_lccmlq.png'


const Decorate = styled.footer`
	width: 100%;
	height: 4em;
	background-color: #686c4f;
    border: 0px solid transparent;
    padding: 2%
    font-family: 'Sacramento', cursive;
`;

const SocialLink = styled.img`
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: -0.5% 2% 0%;
    float: right;
`

const Contact = styled.div`
    width: 20%;
    height: 30px;
    display: inline-block;
    margin: 0% 2% 0% 1%;
    float: left;
    font-size: 1.5em;
`

const Email = styled.a`
    text-decoration: none;
    color: black;
`



class Footy extends React.Component {
    render() {
        return (
            <Decorate>
                <Contact> <Email href="mailto:marisha.hoza@gmail.com"> Contact me </Email> </Contact>
                <a 
                    href="https://www.etsy.com/shop/SpicyEskimoArt" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SocialLink src={Etsy}/>
                </a>
                <a
                    href="https://github.com/MarishaHoza"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SocialLink src={Git}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/marishahoza/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SocialLink src={LinkedIn}/>
                </a>
            </Decorate>
        )
    }
};



export default Footy;