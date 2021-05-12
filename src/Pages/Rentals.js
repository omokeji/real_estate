import React, { Component, useState } from 'react'
import Hero from '../Components/Hero';
import {SliderImage} from '../Data/SliderImage';
import styled from 'styled-components'

const FirstComponent = styled.div``;
const SecondComponent = styled.div``;
const ThirdComponent = styled.div``;
const FourthComponent = styled.div``;

const Rentals = () => {

    return (
        <>
            <Hero slides = {SliderImage}/>
            <FirstComponent>First Component</FirstComponent>
            <SecondComponent>Second Component</SecondComponent>
            <ThirdComponent>Third Component</ThirdComponent>
            <FourthComponent>Fourth Component</FourthComponent>
        </>
    )
}

export default Rentals;

