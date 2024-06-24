import styled from "styled-components";

type ContainerPropsType =  {
    maxWidth?: string
    minHeight?: string
    borderTop?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || '1060px'};
    min-height: ${props => props.minHeight || '0'};
    margin: 0 auto;
    padding: 0 15px;
    border-top: ${props => props.borderTop || '0'};
`