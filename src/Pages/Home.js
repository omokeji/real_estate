import React, {useState} from 'react'
import Hero from '../Components/Hero';
import {SliderImage} from '../Data/SliderImage';
import InfoSection from '../Components/InfoSection';
import CardData from '../Components/CardData';
import FourthCard from '../Components/FourthCard';
import FifthCard from '../Components/FifthCard';
import { InfoData } from '../Data/InfoData';
import styled from 'styled-components'

const Home = () => {
    return (
        <div>
            <Hero slides = {SliderImage}/>
            <InfoSection {...InfoData}/>
            <CardData {...InfoData}/>
            <FourthCard {...InfoData}/>
            <FifthCard {...InfoData}/>
        </div>
    )
}

export default Home;




