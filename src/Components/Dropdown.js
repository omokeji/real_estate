import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { menuData } from '../Data/MenuData';
import { Button } from './Button';

const DropdownMenu = styled.div`
    position: fixed;
    z-index: 999;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    transition: 0.3s ease-in-out;
    background: #cd853f;
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size:2rem;
    outline: none;
    cursor: pointer;
`;
const Closeicon = styled(FaTimes)`
    color: #000d1a;
`;

const DropWrapper = styled.div`

`;

const DropdownContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px); 
    }
`;

const Dropdownlink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #000da;
    }
`;

const BtnWrapper = styled.div`
    display:flex;
    justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownMenu isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Closeicon/>
            </Icon>
            <DropWrapper>
                <DropdownContainer>
                    {menuData.map((item, index) => (
                        <Dropdownlink to={item.link} key={index}>
                            {item.title}
                        </Dropdownlink>
                   ))}
                </DropdownContainer>
                <BtnWrapper>
                    <Button primary='true' round='true' big='true' to='/contact'>
                        Contact Us
                    </Button>
                </BtnWrapper>
            </DropWrapper>
        </DropdownMenu>
    )
}

export default Dropdown
