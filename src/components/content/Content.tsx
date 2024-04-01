import React from 'react';
import styled from "styled-components";
import {Profile} from "./profile/Profile";
import {Messages} from "./messages/Messages";

const Content = () => {
    return (
        <WholeContent>
            {/*<Profile />*/}
            <Messages />
        </WholeContent>
    );
};

export default Content;

const WholeContent = styled.div`
    grid-area: c;
    
    background-color: bisque;
`








