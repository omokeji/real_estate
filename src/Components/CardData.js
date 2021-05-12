import React from 'react'
import styled from 'styled-components'

const GeneralBody = styled.section`
     width: 100%;
     height: 100%;
     padding: 4rem 0rem;
`;

const Comtainer2 = styled.div`
    display: grid;
    padding: 3rem((100vw - 1300px) / 2);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Overheadtext = styled.div`

`;

const FirstCard = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.4;
        padding: 1rem 2rem;
        order: ${({reverse}) => (reverse ? '2' : '1')};

        h4 {
            margin-bottom: 1rem;
            font-size: clamp(1.5rem, 6vw, 2rem);
        }

        p {
            margin-bottom: 20px;
        }
        img {
        height: 90%;
        width: 90%;
        object-fit: cover;
        margin-bottom: 150px;

        @media screen and (max-width: 768px) {
            height: 50%;
            width: 90%
        }
        @media screen and (max-width: 768px) {
            order: ${({reverse}) => (reverse ? '2' : '1')};
        }
    }
`;

const SecondCard = styled.div`
        justify-content: center;
        align-items: center;   
        display: flex;
        line-height: 1.4;
        flex-direction: column;
        padding: 1rem 2rem;
        order: ${({reverse}) => (reverse ? '1' : '2')};

        p {
            margin-bottom: 2rem;
            top: 20px;
        }
        img {
            height: 80%;
            width: 90%;
            object-fit: cover;
            margin-top: 150px;

            @media screen and (max-width: 768px) {
                height: 90%;
                width: 90%
            }
        }

        @media screen and (max-width: 768px) {
            order: ${({reverse}) => (reverse ? '2' : '1')};
        }
`;


const CardData = ({heading,paragraph1,paragraph2,buttonLabels,image,reverse}) => {
    return (
        <GeneralBody>
            <Comtainer2>
              
                <FirstCard>
                <Overheadtext>
                   <h4>View Our newest homes</h4> 
                </Overheadtext>
                <img src={image} alt='homes'/>
                <p>{paragraph1}</p>
                </FirstCard>
                <SecondCard reverse = {reverse}>
                <img src={image} alt='homes'/>
                <p>{paragraph2}</p>
                </SecondCard>
            </Comtainer2>
        </GeneralBody>
    )
}

export default CardData
