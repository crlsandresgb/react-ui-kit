import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
    CardBody,
    CardContent,
    CardCta,
    CardTitle,
    CardWrapper,
} from "./assets/styles";

const propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnFunction: PropTypes.func.isRequired,
    bgimage: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

const defaultProps = {
    title: "Card Title",
    description: "Card Description",
    btnText: "Button Text",
    btnFunction: () => console.log("Button Clicked"),
    bgimage: "https://i.pravatar.cc/500",
    width: "320px",
    height: "480px",
};

const CardWithHover = ({
    title,
    description,
    btnText,
    btnFunction,
    bgimage,
    width,
    height,
}) => {
    const handleBtnClick = (e) => {
        e.preventDefault();
        btnFunction();
        e.target.blur();
    };

    const cardContnetRef = useRef(null);
    const cardTitleRef = useRef(null);

    const [contentHeight, seContenttHeight] = useState(0);
    const [cardTitleHeight, seCardTitleHeight] = useState(0);

    useEffect(() => {
        if (
            !cardContnetRef?.current?.clientHeight ||
            !cardTitleRef?.current?.clientHeight
        ) {
            return;
        }

        seContenttHeight(cardContnetRef?.current?.clientHeight);
        seCardTitleHeight(cardTitleRef?.current?.clientHeight);
    }, []);

    return (
        <CardWrapper $bgimage={bgimage} $width={width} $height={height}>
            <CardContent
                ref={cardContnetRef}
                $height={contentHeight}
                $titleHeight={cardTitleHeight}
            >
                <CardTitle ref={cardTitleRef}>{title}</CardTitle>

                <CardBody $height={height}>{description}</CardBody>

                <CardCta onClick={handleBtnClick}>{btnText}</CardCta>
            </CardContent>
        </CardWrapper>
    );
};

CardWithHover.propTypes = propTypes;
CardWithHover.defaultProps = defaultProps;

export default CardWithHover;
