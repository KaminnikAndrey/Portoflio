import {myTheme} from "./Theme.styled";

type FontPropsType = {
    weight?: number
    color?: string
    lineHeight?: number
    fMin?: number
    fMax?: number
}

export const font = ({weight, color, lineHeight, fMin, fMax}: FontPropsType) => `
    font-weight: ${weight || 400};
    color: ${color || myTheme.colors.grey};
    line-height: ${lineHeight || 1.3};
    font-size: calc( (100vw - 360px)/(1366 - 360) * (${fMax} - ${fMin}) + ${fMin}px);
`