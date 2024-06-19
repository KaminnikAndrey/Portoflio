import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#"></a>home</li>
                <li><a href="#"></a>works</li>
                <li><a href="#"></a>about-me</li>
                <li><a href="#"></a>contacts</li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        
    }
`