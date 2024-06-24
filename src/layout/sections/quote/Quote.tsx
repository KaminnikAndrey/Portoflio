import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";
import {Section} from "../../../components/section/Section";

export const Quote = () => {
    return (
        <Section>
            <Icon iconId={'quoteBg'} width={'92px'} height={'92px'} position={'absolute'} right={'-10px'}
                  top={'calc(110px + 15px)'}/>
            <Container maxWidth={'745px'} paddingTop={'110px'} paddingBottom={'75px'}>
                <FlexWrapper direction={'column'} align={'flex-end'}>
                    <Q>
                        <Icon iconId={'quotes'} width={'40px'} height={'30px'} position={'absolute'} left={'15px'}
                              top={'-15px'}/>
                        With great power comes great electricity bill
                    </Q>
                    <Q>
                        <Icon iconId={'quotes'} width={'40px'} height={'30px'} position={'absolute'} right={'15px'}
                              top={'-15px'}/>
                        - Dr. Who
                    </Q>
                </FlexWrapper>
            </Container>
        </Section>
    );
};

const Q = styled.p`
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
`
