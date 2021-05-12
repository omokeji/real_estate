import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const MainDiv = styled.section`
    background: #000D1A;
    height: 600px;
    width: 100%;

    @media screen and (max-width: 768px) {
        height: 1000px;
        width: 100%;
    }
`;

const InnerDiv = styled.div`
    background: #fff;
    height: 400px;
    width: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
    padding: 3rem((100vw - 1300px) / 2);
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        height: 100%;
        width: 100%;
        margin-bottom: 60px;
        justify-content: center;
        align-items: center;
    }
`;

const TextBox = styled.div`
    justify-content center;
    align-items: center;
    line-height: 1.4;
    padding: 5rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
        top: 20px;
    }
    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }
`;
const ImageBox = styled.div`
    justify-content: center;
    align-items: center; 
    order: ${({reverse}) => (reverse ? '1' : '2')};

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        margin-top: 20px;

        @media screen and (max-width: 768px) {
            height: 50%;
            width: 80%;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 40px;
            bottom: 30px;
        }
    }

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '1' : '2')};
    }
`;

const FourthCard = ({heading,paragraph1,paragraph2,buttonLabels,image,reverse}) => {
    return (
        <MainDiv>
            <InnerDiv>
                <TextBox reverse = {reverse}>
                <h1>{heading}</h1>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <Button to='/home' primary='true'>
                {buttonLabels}
                </Button>
                </TextBox>
                <ImageBox reverse = {reverse}>
                <img src={image} alt='homes'/>
                </ImageBox>
            </InnerDiv>            
        </MainDiv>
    )
}

export default FourthCard


