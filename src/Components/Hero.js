import React , {useState, useRef, useEffect} from 'react'
//import { FaSlideshare } from 'react-icons/fa';
import styled, {css} from 'styled-components/macro'
import {SliderImage} from '../Data/SliderImage';
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroSectionWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%,
        )
    }
`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    color: #fff;
    width: cal(100% - 100px);

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const ArrowPrev = styled(IoArrowBack)`
    ${arrowButtons}
`;

const ArrowNext = styled(IoArrowForward)`
    ${arrowButtons}
`;

const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 3000)
        return () => {
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current)
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(current)
    }

    if (!Array.isArray(slides) || slides.length <= 0){
        return null
    }
   
    return (
        <HeroSection>
            <HeroSectionWrapper>
                {SliderImage.map((slide, index) => {
                    return(
                        <HeroSlide key = {index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage src = {slide.image} alt ={slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to = {slide.path} primary = 'true' css = {`max-width: 160px`}>
                                        {slide.label}
                                        <Arrow/>
                                    </Button>

                                </HeroContent>
                                </HeroSlider>
                            )}
                           
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <ArrowPrev onClick={prevSlide}/>
                    <ArrowNext onClick={nextSlide}/>              
                </SliderButtons>
            </HeroSectionWrapper>
        </HeroSection>
    )
}

export default Hero
