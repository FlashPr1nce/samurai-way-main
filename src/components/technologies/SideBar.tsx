import React from 'react';
import styled from "styled-components";

const NavList = [
    'Profile', 'Message', 'News', 'Music', 'Settings'
]

const SideBar = () => {
    return (
        <SideBarList>
            <ul>
                    {NavList.map((item, index) => (
                        <a href="">
                            <li key={index}>{item}</li>
                        </a>
                            ))}
                        </ul>
        </SideBarList>
    );
};

export default SideBar;

const SideBarList = styled.nav`
    grid-area: n;
    
    background-color: aquamarine;
    
    ul a li {
        padding-top: 5px;
    }
`