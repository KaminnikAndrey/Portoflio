import React from 'react';
import styled from "styled-components";

type ContainerPropsType =  {
    maxWidth?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || '1030px'};
    margin: 0 auto;
`