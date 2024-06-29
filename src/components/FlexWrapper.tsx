import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

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
    isAdaptiveColumnMD?: boolean
    isAdaptiveColumnReverseMD?: boolean
    isAdaptiveColumnSM?: boolean
    isAdaptiveColumnXS?: boolean
    isAdaptiveWidthFitContentMD?: boolean
    isAdaptiveWidthFitContentXS?: boolean
    isAdaptiveWidthXS?: string
    isAdaptiveWrapXS?: boolean
    marginXs?: string
    marginMD?: string
    paddingMd?: string
    paddingSm?: string
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

    @media ${myTheme.media.md} {
        flex-direction: ${props => props.isAdaptiveColumnMD ? 'column' : props.isAdaptiveColumnReverseMD ? 'column-reverse' : props.direction || 'row'};
        width: ${props => props.isAdaptiveWidthFitContentMD ? 'fit-content' : '100%'};
        margin: ${props => props.marginMD ? props.marginMD : props.margin || '0'};
        padding: ${props => props.paddingMd ? props.paddingMd : props.padding || '0'};
    }

    @media ${myTheme.media.sm} {
        flex-direction: ${props => props.isAdaptiveColumnSM ? ' column' : props.isAdaptiveColumnMD ? 'column' : props.isAdaptiveColumnReverseMD ? 'column-reverse' : props.direction || 'row'};
        align-items: ${props => props.isAdaptiveColumnSM ? ' center' : props.direction || 'stretch'};
        padding: ${props => props.paddingSm ? props.paddingSm : props.paddingMd ? props.paddingMd : props.padding || '0'};

    }

    @media ${myTheme.media.xs} {
        flex-direction: ${props => props.isAdaptiveColumnXS ? 'column' : props.isAdaptiveColumnSM ? ' column' : props.isAdaptiveColumnMD ? 'column' : props.isAdaptiveColumnReverseMD ? 'column-reverse' : props.direction || 'row'};
        width: ${props => props.isAdaptiveWidthFitContentXS ? 'fit-content' : props.isAdaptiveWidthXS ? props.isAdaptiveWidthXS : '100%'};
        flex-wrap: ${props => props.isAdaptiveWrapXS ? 'wrap' : 'nowrap'};
        margin: ${props => props.marginXs ? props.marginXs : props.marginMD ? props.marginMD : props.margin || '0'};
    }
`