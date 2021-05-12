import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const FooterMain = styled.section`
    background: #000D1A;
    height: 300px;
    width: 100%;

    @media screen and (max-width: 768px) {
        height: 300px;
        width: 100%;
    }
`;

const BigDiv = styled.div`
    color: #fff;
    padding: 9%;
    display: grid;
    grid-template-columns: 5fr 0.5fr 0.5fr;
    grid-template-rows: 10px;

    div {
        right: 30px;
    }
    h1 {
        font-size: 35px;
    }
`;

const DownDiv = styled.div`
    
`;

const Footer = () => {
    return (
        <FooterMain>
            <BigDiv>
                <h1>Let's find your Dream Home</h1>
                <div>
                    <p>First</p>
                    <p>Second</p>
                    <p>Third</p>
                    <p>Fourth</p>
                </div>
                <div>
                    <p>Fifth</p>
                    <p>Sixth</p>
                    <p>Seventh</p>
                    <p>Eight</p>
                </div>
            </BigDiv>
            <DownDiv>
                <Button>Contact Us</Button>
            </DownDiv>
        </FooterMain>
    )
}

export default Footer
