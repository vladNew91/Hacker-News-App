import { Stack } from "@mui/material";
import {
    ChatGPTContainer,
    CharstContainer,
    WeatherContainer,
} from "../../containers";
import { Container, Section } from "./styled";

export const HomePage: React.FC = (): JSX.Element => {
    return (
        <Container>
            <Section>
                <ChatGPTContainer />
            </Section>

            <Section>
                <Stack spacing={2}>
                    <WeatherContainer />
                    <CharstContainer />
                </Stack>
            </Section>
        </Container>
    );
};
