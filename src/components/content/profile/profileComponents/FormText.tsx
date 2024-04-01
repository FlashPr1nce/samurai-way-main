import React from 'react';
import styled from "styled-components";

export const FormText = () => {
    return (
        <FormTextarea>
            <h3>My posts</h3>
            <BtnWrapper>
                <textarea></textarea>
                <button>Send</button>
            </BtnWrapper>
        </FormTextarea>
    );
};

const FormTextarea = styled.div`
    
`

const BtnWrapper = styled.div`
    textarea {
        width: 100%;
        height: 100px;
    }
`

