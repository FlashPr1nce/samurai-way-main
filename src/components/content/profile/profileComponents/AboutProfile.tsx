import React from 'react';
import styled from "styled-components";

export const AboutProfile = () => {
    return (
        <AboutPerson>
            <PhotoProfile src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt=""/>
            <InfoProfile>
                <Name>Artur Z</Name>
                <City>City: Tiraspol</City>
                <Education>Education: UTM</Education>
                <WebSite>
                    WebSite:
                    <a href="">https://vk.com/masakhiros</a>
                </WebSite>
            </InfoProfile>
        </AboutPerson>
    );
};

const AboutPerson = styled.div`
    display: flex;
    
    padding: 10px;
`
const PhotoProfile = styled.img`
    border-radius: 50%;
    width: 100px;
`

const InfoProfile = styled.div`
    
    padding-left: 20px;
    
    span {
        display: block;
    }
`

const Name = styled.span``

const City = styled.span``

const Education = styled.span``

const WebSite = styled.span``

