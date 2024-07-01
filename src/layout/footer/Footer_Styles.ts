import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    transition: 0.2s;

    &:hover {
        color: ${myTheme.colors.white};
    }
`

const Title = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.white};
    @media ${myTheme.media.xs} {
        margin-bottom: 20px;
    }
`

const BigTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: ${myTheme.colors.white};
    
    @media ${myTheme.media.xs} {
        text-align: center;
    }
    
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    text-align: center;
    padding-top: 10px;
`

const Footer = styled.footer`
    border-top: 1px solid ${myTheme.colors.grey};
    padding: 30px 0;
    
    @media ${myTheme.media.xs} {
        padding: 20px 0;
    }
`

export const S = {
    Link,
    Title,
    BigTitle,
    Text,
    Footer
}