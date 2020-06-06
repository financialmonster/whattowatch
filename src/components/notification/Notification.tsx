import React, { FC, memo } from 'react';
import styled, { keyframes } from 'styled-components';

type TNotificationProps = {
    children: string;
}

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

const NotificationWrapper = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    min-height: 50px;
    width: 300px;
    outline: 1px solid red;
    padding: 10px 20px;
    background-color: black;
    opacity: 0;
    animation: ${fadeInOut} linear 5s;
`;

export const Notification: FC<TNotificationProps> = memo(({ children }) => {
    return (
        <NotificationWrapper>
            {children}
        </NotificationWrapper>
    );
});
