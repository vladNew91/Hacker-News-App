import { ChatGPTContainer } from "../../containers";

export const HomePage: React.FC = (): JSX.Element => {
    return (
        <>
            <div>Weather</div>
            <div>Charts</div>
            <ChatGPTContainer />
        </>
    );
};
