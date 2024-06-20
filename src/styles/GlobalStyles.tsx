import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled";

export const GlobalStyles  = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${myTheme.colors.dark};
        line-height: 1.3;
    }

    ul,
    ol {
        padding: 0;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul {
        list-style: none;
    }

    li {
        list-style: none;
    }

    img {
        max-width: 100%;
        display: block;
        object-fit: cover;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button,
    input {
        border: none;
        padding: 0;
    }

    button {
        background-color: transparent;
        cursor: pointer;
    }

    a,
    button,
    input,
    textarea {
        outline: 0;
    }

    address {
        font-style: normal;
    }

    ul,
    ol {
        padding: 0;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul {
        list-style: none;
    }

    li {
        list-style: none;
    }

    img {
        max-width: 100%;
        display: block;
        object-fit: cover;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button,
    input {
        border: none;
        padding: 0;
    }

    button {
        background-color: transparent;
        cursor: pointer;
    }

    a,
    button,
    input,
    textarea {
        outline: 0;
    }

    address {
        font-style: normal;
    }
`