import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../FlexWrapper";

export const Logo = () => {
    return (
        <StyledLogo href={'#'}>
            <FlexWrapper gap={'10px'} align={'center'}>
                <Icon iconId={'logo'} width={'16px'} height={'16px'}/>
                <span>Elias</span>
            </FlexWrapper>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    span {
        font-weight: 700;
        font-size: 16px;
        line-height: 1.3;
        color: ${myTheme.colors.white};
    }
`