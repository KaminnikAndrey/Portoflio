import React from 'react';
import {Container} from "../../../components/container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Quote = () => {
    return (
        <Container maxWidth={'710px'}>
            <FlexWrapper direction={'column'} align={'flex-end'}>
                <p>
                    With great power comes great electricity bill
                </p>
                <p>
                    - Dr. Who
                </p>
            </FlexWrapper>
        </Container>
    );
};

const QuoteP = styled.p`
    padding: 32px;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 500;
    //font-family: ;
    
`
