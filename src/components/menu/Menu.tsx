import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link href={"#"}><span>#</span>home</Link>
                </li>
                <li>
                    <Link href={"#"}><span>#</span>works</Link>
                </li>
                <li>
                    <Link href={"#"}><span>#</span>about-me</Link>
                </li>
                <li>
                    <Link href={"#"}><span>#</span>contacts</Link>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
    
    @media ${myTheme.media.xs} {
        display: none;
    }
`
const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    text-align: center;
    transition: 0.3s;

    span {
        font-weight: 500;
        color: ${myTheme.colors.purple}
    }
    
    &:hover{
        color: ${myTheme.colors.white}
    }
`