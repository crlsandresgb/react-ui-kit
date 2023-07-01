import styled, { css } from "styled-components";

const clr_neutral_900 = "hsl(207, 19%, 9%)";
const clr_neutral_100 = "hsl(0, 0%, 100%)";
const clr_neutral_400 = "hsl(142, 90%, 61%)";
const card_content_padding = "1.5rem";
const default_time = "500ms";

export const CardWrapper = styled.div`
    color: ${clr_neutral_100};
    background-image: url(${(props) => props?.$bgimage || ""});
    background-size: cover;
    max-width: ${(props) => props?.$width || "320px"};
    max-height: ${(props) => props?.$height || "480px"};
    width: ${(props) => props?.$width || "320px"};
    height: ${(props) => props?.$height || "480px"};
    text-align: left;
    overflow: hidden;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    transition: transform ${default_time} ease;
    position: relative;
    display: grid;
    align-items: end;
    @media (hover) {
        &:hover,
        &:focus-within {
            transform: scale(1.05);
        }
    }
`;

const cardContnetAnimation = css`
    transition-delay: ${default_time};
    transform: translateY(0);
    & > *:not(:first-child) {
        opacity: 1;
        transition-delay: 900ms;
    }
`;

export const CardContent = styled.div`
    padding: ${card_content_padding};
    background: linear-gradient(
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 0.3) 20%,
        hsl(0 0% 0% / 1)
    );
    max-height: calc(290px - ${card_content_padding});
    width: calc(100% - (${card_content_padding}*2) + 4px);
    margin: -1px;
    ${CardWrapper}:hover & {
        ${cardContnetAnimation}
    }
    ${CardWrapper}:focus-within & {
        ${cardContnetAnimation}
        transition-duration: 0ms;
    }

    position: absolute;
    @media (hover) {
        & > *:not(:first-child) {
            opacity: 0;
            transition: opacity ${default_time} linear;
        }
        transform: translateY(
            calc(
                ${(props) => props?.$height}px -
                    (${(props) => props?.$titleHeight}px + 2rem) - 1.5rem
            )
        );
        transition: transform ${default_time} ease-in-out;
    }
`;

export const CardTitle = styled.h2`
    position: relative;
    max-width: max-content;
    margin: 1rem 1rem 1rem 0;
    &:after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        height: 4px;
        left: calc(${card_content_padding} * -1);
        bottom: 0;
        background: ${clr_neutral_400};
        width: calc(100% + ${card_content_padding});
        transform-origin: left;
        transition: transform ${default_time} ease-in-out;
        bottom: -4px;
        @media (hover) {
            transform: scaleX(0);
        }
    }
    ${CardWrapper}:hover & {
        &:after {
            transform: scaleX(1);
        }
    }

    ${CardWrapper}:focus-within & {
        &:after {
            transform: scaleX(1);
        }
    }
`;

export const CardBody = styled.p`
    color: rgba(255, 255, 255, 0.85);
    max-height: calc(${(props) => props?.$height || "480px"} / 2);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
`;

export const CardCta = styled.button`
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: ${clr_neutral_900};
    background: ${clr_neutral_400};
    border: none;
    padding: 0.5em 2.5em;
    border-radius: 0.25em;
    &:hover,
    &:focus {
        background: ${clr_neutral_100};
    }
`;
