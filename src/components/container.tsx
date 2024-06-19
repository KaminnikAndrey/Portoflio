import React from 'react';
import styled from "styled-components";

type ContainerPropsType =  {
    maxWidth?: string
    minHeight?: string
    paddingTop?: string
    paddingBottom?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || '1030px'};
    min-height: ${props => props.minHeight || '0'};
    margin: 0 auto;
    padding-top: ${props => props.paddingTop || '0'};
    padding-bottom: ${props => props.paddingBottom || '0'};
`