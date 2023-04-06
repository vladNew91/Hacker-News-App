import { ChatGPTContainer } from "../../containers";
import { Container, Section } from "./styled";

export const HomePage: React.FC = (): JSX.Element => {
    return (
        <Container>
            <Section>Weather</Section>

            <Section>
                <ChatGPTContainer />
            </Section>

            <Section>Charts</Section>
        </Container >
    );
};
