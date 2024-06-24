import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

export const Quote = () => {
    return (
        <QuoteSection>
            <Container maxWidth={'745px'} >
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

    &:after {
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/main/src/assets/images/quoteBg.svg");
        position: absolute;
        display: block;
        width: 92px;
        height: 92px;
        right: -10px;
        top: calc(110px + 15px);
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

    & + & {
        font-weight: 400;
    }

    &::before {
        content: url('https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/main/src/assets/images/quotes.svg');
        width: 40px;
        height: 30px;
        position: absolute;
        display: block;
        top: -15px;
        transform: translateX(-15px);
    }

    & + &:before {
        right: 15px;
        transform: translateX(0px);
    }

`
