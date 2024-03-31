import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContent>
            <a href="">
                <LogoImg src="https://img.freepik.com/premium-photo/colored-paper-cut-logo-representing-a-message-white-background_1053-14372.jpg?size=626&ext=jpg&ga=GA1.1.297215441.1711883609&semt=ais" alt=""/>
            </a>
        </HeaderContent>
    );
};

export default Header;

const HeaderContent = styled.div`
    grid-area: h;
    
    background-color: #61dafb;
`

const LogoImg = styled.img`
    width: 50px;
    height: 100%;
    
`