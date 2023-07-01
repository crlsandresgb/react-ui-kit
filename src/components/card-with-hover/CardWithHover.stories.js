import CardWithHover from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Components/CardWithHover",
    component: CardWithHover,
    tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        title: "Card Title",
        description: "Card Description",
        btnText: "Button Text",
        btnFunction: () => console.log("Button Clicked"),
        bgimage: "https://i.pravatar.cc/500",
        width: "320px",
        height: "480px",
    },
};
