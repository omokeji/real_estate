import React, { Component, useState } from 'react'
import styled from 'styled-components'
import Hero from '../Components/Hero';
import {SliderImage} from '../Data/SliderImage';
import { Button } from '../Components/Button';
import { InfoData } from '../Data/InfoData';

const FirstComponent = styled.div`
    padding: 0 0 32px;
`;
const Comtainer = styled.div`
    padding: 3rem((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        text-align: center;
        /* margin-top: 10%; */
    }

    p {
        margin-bottom: 2rem;
    }
    input {
        padding: 15px;
        margin-bottom: 20px;
    }
`;

const ColumnRight = styled.div`
    justify-content: center;
    align-items: center;   
    display: flex;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    img {
        height: 60%;
        width: 80%;
        object-fit: cover;
        border-radius: 50%;

        @media screen and (max-width: 768px) {
            height: 100%;
            width: 100%
        }
    }

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }
`;
const SecondComponent = styled.div``;
const ThirdComponent = styled.div``;
const FourthComponent = styled.div``;

const Contact = () => {

    return (
        <div>
            <Hero slides = {SliderImage}/>
            <FirstComponent>
                <Comtainer>
                    <ColumnLeft>
                        <h1>{InfoData.aboutCompany}</h1>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                    <Button to='/home' primary='true'>
                        {InfoData.buttonLabels}
                    </Button>
                        </ColumnLeft>
                    <ColumnRight reverse = {InfoData.reverse}>
                        <img src={InfoData.image} alt='homes'/>
                    </ColumnRight>
                </Comtainer>
            </FirstComponent>
            <SecondComponent>Second Component</SecondComponent>
            <ThirdComponent>Third Component</ThirdComponent>
            <FourthComponent>Fourth Component</FourthComponent>
        </div>
    )
}

export default Contact;
