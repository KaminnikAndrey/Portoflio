import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type ContainerPropsType = {
    maxWidth?: string
    minHeight?: string
    borderTop?: string
    isAdaptoveWidthMD?: boolean
}

export const Container = styled.div<ContainerPropsType>`
    min-height: ${props => props.minHeight || '0'};
    margin: 0 auto;
    padding: 0 15px;
    border-top: ${props => props.borderTop || '0'};
    max-width: ${props => props.isAdaptoveWidthMD ? 'fit-content' : props.maxWidth || '1060px'};
`