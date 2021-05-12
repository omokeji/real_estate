import React, { Component, useState } from 'react'
import styled from 'styled-components';
import Hero from '../Components/Hero';
import {SliderImage} from '../Data/SliderImage';
import { Button } from '../Components/Button';
import { InfoData } from '../Data/InfoData';

const FirstComponent = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 25px 25px 75px 50px;
    width: 400px; 
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
    border-radius: 5px;
    display: flex;
`;
const GeneralFirstComponent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 100px;
`;
const UserInfoHeader = styled.h1`
    text-align: center;
`;
const ImageDiv = styled.div`
    padding: 20px;
    justify-content: center;
    align-items: center;
    width: 70px;

    img {
        border-radius: 50px;
        height: 90px;
        width: 90px;
    }
    
`;
const UserDetailDiv = styled.div`
    margin-top: 30px;
    margin-left: 50px;
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
    /* display: flex;
    flex-direction: column;*/
    justify-content: center;
    align-items: center; 
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        text-align: center;
        margin-top: 10%;
    }

    p {
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div`
    justify-content: center;
    align-items: center;   
    display: flex;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            height: 100%;
            width: 100%
        }
    }

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '1' : '2')};
    }
`;
const SecondComponent = styled.div`
     width: 100%;
     height: 100%;
     padding: 4rem 0rem;
`;
const ThirdComponent = styled.div`
    padding: 10px;
`;
const FourthComponent = styled.div`
    padding: 10px;
`;

const About = () => {

    return (
        <>
        <Hero slides = {SliderImage}/> 
            <SecondComponent>
                <Comtainer>
                    <ColumnLeft>
                    <h1>{InfoData.aboutCompany}</h1>
                    <p>{InfoData.loremtext}</p>
                    <Button to='/home' primary='true'>
                    {InfoData.buttonLabels}
                    </Button>
                    </ColumnLeft>
                    <ColumnRight reverse = {InfoData.reverse}>
                    <img src={InfoData.image} alt='homes'/>
                    </ColumnRight>
                </Comtainer>
            </SecondComponent>
            <UserInfoHeader>{InfoData.contactInfo}</UserInfoHeader>
            <GeneralFirstComponent>
            <FirstComponent>
                <ImageDiv>
                    <img src={InfoData.imageUser2} alt=""/>
                </ImageDiv>
                <UserDetailDiv>
                    Name: Ayinla Muritadah
                </UserDetailDiv>
            </FirstComponent>
            <FirstComponent>
                <ImageDiv>
                    <img src={InfoData.imageUser3} alt=""/>
                </ImageDiv>
                <UserDetailDiv>
                    Name: Ayinla Muritadah
                </UserDetailDiv>
            </FirstComponent>
            <FirstComponent>
                <ImageDiv>
                    <img src={InfoData.imageUser1} alt=""/>
                </ImageDiv>
                <UserDetailDiv>
                    Name: Ayinla Muritadah
                </UserDetailDiv>   
            </FirstComponent>
            </GeneralFirstComponent>       
            <ThirdComponent>
                Third Component
            </ThirdComponent>
            <FourthComponent>
                Fourth Component
            </FourthComponent>
        </>
    );
}

export default About
