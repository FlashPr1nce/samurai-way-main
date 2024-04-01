import React from 'react';
import styled from "styled-components";

type CommentsPropsType = {
    text: string
    count: number
}

export const Comments = ({text, count}: CommentsPropsType) => {
    return (
        <Comment>
            <img src="https://pixlr.com/images/index/ai-image-generator-two.webp" alt=""/>
            <p>{text}</p>
            <button>like{count}</button>
        </Comment>
    );
};

const Comment = styled.div`
    
    display: flex;
    
    margin-top: 30px;
    img {
        width: 40px;
        border-radius: 50%;
    }
    p {
        margin-left: 30px; /* Добавляем небольшой отступ между текстом и изображением */
    }
    button {
        margin-left: 15px;
        align-self: center; /* Выравниваем кнопку по вертикали */
    }
`

