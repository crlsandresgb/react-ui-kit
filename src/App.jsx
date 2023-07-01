import "./App.css";
import { CardWithHover } from "./components";

function App() {
    return (
        <>
            <div>
                <CardWithHover
                    title="John Doe"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempore harum dicta provident ipsam quisquam accusantium? Incidunt commodi, officiis ex minima accusamus rem debitis blanditiis non? Voluptatem commodi iusto quae?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempore harum dicta provident ipsam quisquam accusantium? Incidunt commodi, officiis ex minima accusamus rem debitis blanditiis non? Voluptatem commodi iusto quae?"
                    btnText="Learn More"
                    btnFunction={() => console.log("Button Clicked")}
                    bgimage="https://i.pravatar.cc/500"
                    width="320px"
                    height="480px"
                />
            </div>
        </>
    );
}

export default App;
