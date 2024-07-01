import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";

const Item = styled.div`
    border: 1px solid ${myTheme.colors.grey};
    width: 330px;
    height: fit-content;
`

const Image = styled.img`
    width: 330px;
    height: 200px;
    object-fit: cover;
`

const Title = styled.h3`
    font-weight: 400;
    color: ${myTheme.colors.grey};
    font-size: 16px;
    display: block;
    border: 1px solid ${myTheme.colors.grey};
    padding: 8px;
    width: 100%;
`

const Name = styled.span`
    display: block;
    font-size: 24px;
    font-weight: 500;
    color: ${myTheme.colors.white};
`

const Text = styled.h3`
    font-weight: 400;
    color: ${myTheme.colors.grey};
    font-size: 16px;
    display: block;
`

export const S = {
    Item,
    Image,
    Title,
    Name,
    Text
}