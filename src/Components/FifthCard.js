import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const MainDiv = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const InnerDiv = styled.div`
    padding: 3rem((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ImageBox = styled.div`
    justify-content: center;
    align-items: center;   
    display: flex;
    padding: 3rem;
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
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }
`;
const TextBox = styled.div`
    justify-content center;
    align-items: center;
    line-height: 1.4;
    padding: 3rem;
    position: relative;
    top: 100px;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        left: 50px;
    }
`;

const FifthCard = ({heading,paragraph1,paragraph2,buttonLabels,image,reverse}) => {
    return (
        <MainDiv>
            <InnerDiv>
                <ImageBox reverse = {reverse}>
                    <img src={image} alt='homes'/>
                </ImageBox>
                <TextBox reverse = {reverse}>
                    <h1>{heading}</h1>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                <Button to='/home' primary='true'>
                      {buttonLabels}
                </Button>
                </TextBox>
               
            </InnerDiv>            
        </MainDiv>
    )
}

export default FifthCard


