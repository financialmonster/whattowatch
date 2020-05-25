import React, { FC, Children } from 'react';
import styled, { keyframes } from 'styled-components';

type TPetalProps = {
    rotate: string;
    delay: string;
};

const rotation = keyframes`
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
`;

const SpinnerWrapper = styled.div`
    width: 327px;
    height: 327px;
    display: block;
    overflow: hidden;
    background: transparent;
    margin: 0 auto;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
`;

const Petal = styled.div<TPetalProps>`
    left: 153px;
    top: 78px;
    position: absolute;
    animation: ${rotation} linear 1s infinite;
    background: #831a19;
    width: 19px;
    height: 39px;
    border-radius: 9px / 19px;
    transform-origin: 9px 85px;
    box-sizing: content-box;
    transform: ${({rotate}) => rotate};
    animation-delay: ${({delay}) => delay};
`;

const transformDegs: number[] = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const animationDelays: number[] = [-0.9166666666666666, -0.8333333333333334, -0.75, -0.6666666666666666,
    -0.583333333333333, -0.5, -0.4166666666666667, -0.3333333333333333, -0.25, -0.16666666666666666,
    -0.08333333333333333, 0
];

export const Spinner: FC = () => (
    <SpinnerWrapper>   
        {
            Children.toArray(new Array(12).fill(``).map((_, idx) => (
                <Petal rotate={`rotate(${transformDegs[idx]}deg)`}
                    delay={`${animationDelays[idx]}s`}
                />
            )))
        }
    </SpinnerWrapper>
);
