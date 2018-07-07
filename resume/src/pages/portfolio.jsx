import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
    width: 30%;
    height: 30%;
    display: inline-block;
    margin: 5% 0% 0% 2%;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0px 2px 10px;
`



class Portfolio extends React.Component {
    render() {
        return (
            <section class="test" id="ImaginationOcean">
                <Project> Flashcards App Tutorial </Project>
                <Project> Full-Stack Tutorial </Project>
                <Project> Etsy and/or Art Portfolio Website </Project>
                <Project> You.Me.We Community (??) </Project>
            </section>
        )
    }
};





export default Portfolio;