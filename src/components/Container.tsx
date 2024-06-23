import styled from "styled-components";

type ContainerPropsType =  {
    maxWidth?: string
    minHeight?: string
    paddingTop?: string
    paddingBottom?: string
    borderTop?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || '1060px'};
    min-height: ${props => props.minHeight || '0'};
    margin: 0 auto;
    padding: 0 15px;
    padding-top: ${props => props.paddingTop || '0'};
    padding-bottom: ${props => props.paddingBottom || '0'};
    border-top: ${props => props.borderTop || '0'};
`