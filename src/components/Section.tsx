import styled from "styled-components";

type StyledSectionProps = {
    paddingTop?: string
    paddingBottom?: string
    position?: string
}

export const Section = styled.section<StyledSectionProps>`
    position: ${props => props.position ? props.position : 'static'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0'}
`