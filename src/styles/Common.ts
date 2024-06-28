import {myTheme} from "./Theme.styled";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fMin?: number
    fMax?: number
}

export const font = ({family, weight, color,lineHeight, fMin, fMax} : FontPropsType) => `
    font-family: ${family || "Fira Code"};
    font-weight: ${weight || 400};
    color: ${color || myTheme.colors.grey};
    font-weight: ${lineHeight || 1.3};
    font-size: calc( (100vw - 360px)/(1366 - 360) * (${fMax} - ${fMin}) + ${fMin}px);
`