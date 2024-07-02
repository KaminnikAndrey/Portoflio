import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../FlexWrapper";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <StyledLogo onClick={() => {scroll.scrollToTop()}}>
            <FlexWrapper gap={'10px'} align={'center'}>
                <Icon iconId={'logo'} width={'16px'} height={'16px'}/>
                <span>Elias</span>
            </FlexWrapper>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    color: ${myTheme.colors.white};
    transition: 0.2s;
    cursor: pointer;

    span {
        font-weight: 700;
        font-size: 16px;
        line-height: 1.3;
        transition: 0.2s;

        color: ${myTheme.colors.white};
    }

    &:hover {
        color: ${myTheme.colors.purple}
    }

    &:hover span {
        color: ${myTheme.colors.purple}
    }
}
`