import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Switch, Route, Link} from 'react-router-dom'
import { menuData } from '../Data/MenuData';
import { Button } from './Button';
//import Bars from '../Images/menu.svg'
import {FaBars} from 'react-icons/fa'

const StyleNav = styled.nav`
    height: 60px;
    padding: 1rem 2rem;
    justify-content: space-between;
    z-index: 100;
    position: fixed;
    width: 100%;
    display: flex;
`;

const NavLink = css`
    color: #71778B;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    cursor: pointer;
    height: 100%;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        bacground-size: contain;
        height: 40px;
        width: 40px;
        top: 0;
        right: 0;
        position: absolute;
        cursor: pointer;
        transform: translate(-50%, 25%)
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: ceneter;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    return (
        <>
            <StyleNav>
                <Logo >LOGO</Logo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, result) => (
                        <NavMenuLinks to={item.link} key = {result}>
                            {item.title}                      
                        </NavMenuLinks> 
                    ))}    
                </NavMenu>
                <NavBtn>
                    <Button primary = 'true' to = '/contact'>
                        Contact Us 
                    </Button>
                </NavBtn> 
            </StyleNav>
        </>
    )
}

export default Navbar

