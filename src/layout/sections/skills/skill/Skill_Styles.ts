import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";

const Title = styled.span`
    font-weight: 600;
    font-size: 16px;
    color: ${myTheme.colors.white};
    padding: 8px;
    border: 1px solid ${myTheme.colors.grey};
`

const Text = styled.p`
    font-size: 16px;
    color: ${myTheme.colors.grey};
    width: fit-content;
`

export const S = {
    Title,
    Text
}