import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

export const Quote = () => {
    return (
        <Container maxWidth={'745px'} paddingTop={'110px'} paddingBottom={'75px'} as={'section'}>
            <FlexWrapper direction={'column'} align={'flex-end'}>
                <Q>
                    With great power comes great electricity bill
                </Q>
                <Q>
                    - Dr. Who
                </Q>
            </FlexWrapper>
        </Container>
    );
};

const Q = styled.p`
    padding: 32px;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 500;
    color: ${myTheme.colors.white};
    border: 1px solid ${myTheme.colors.grey};
    //font-family: ;
    &:last-child{
        padding: 16px;
    }
    
`
