import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

export const Quote = () => {
    return (
        <QuoteSection>
            <Container maxWidth={'745px'}>
                <FlexWrapper direction={'column'} align={'flex-end'}>
                    <Q>
                        With great power comes great electricity bill
                    </Q>
                    <Q>
                        - Dr. Who
                    </Q>
                </FlexWrapper>
            </Container>
        </QuoteSection>
    );
};

const QuoteSection = styled.section`
    padding-top: 110px;
    padding-bottom: 75px;
    position: relative;

    &::after {
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/1ca626a6970d22f807ddb943caf7b5287a825334/src/assets/images/quoteBg.svg");
        display: block;
        position: absolute;
        width: 92px;
        height: 92px;
        top: calc(110px + 15px);
        right: -10px;
    }
`

const Q = styled.blockquote`
    padding: 32px;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 500;
    color: ${myTheme.colors.white};
    border: 1px solid ${myTheme.colors.grey};
    position: relative;

    &:last-child {
        padding: 16px;
    }

    &::after{
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/1ca626a6970d22f807ddb943caf7b5287a825334/src/assets/images/quotes.svg");
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        top: -15px;
    }

    &::after {
        transform: translateX(-20px);
    }

    & + &::after {
        transform: translateX(0);
        right: 15px;
    }
`
