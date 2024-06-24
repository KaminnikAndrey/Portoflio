import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    margin?: string
    padding?: string
    border?: string
    maxWidth?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    border: ${props => props.border || 'none'};
    max-width: ${props => props.maxWidth || '100%'};

`