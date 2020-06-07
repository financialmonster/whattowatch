import React, { FC } from 'react';
import styled from 'styled-components';

type TMessageProps = {
    children: string;
}

const MessageWrapper = styled.div`
    min-height: 330px;
    padding-top: 180px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    font-size: 32px;
    width: 1140px;
    margin: 0 auto;
    line-height: 40px;
`;

export const Message: FC<TMessageProps> = ({children}) => {
    return (
        <MessageWrapper>
            { children }
        </MessageWrapper>
    );
}
