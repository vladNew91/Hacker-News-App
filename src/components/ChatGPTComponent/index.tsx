import ReactHtmlParser from 'react-html-parser';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, IconButton } from '@mui/material';
import { Answer, Container, TextInput } from './styled';

interface ChatGPTComponentProps {
    answer?: string;
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
    handleGetAnswer: () => void;
}

export const ChatGPTComponent: React.FC<ChatGPTComponentProps> = ({
    answer,
    inputRef,
    handleGetAnswer,
}: ChatGPTComponentProps): JSX.Element => {
    return (
        <Container>
            <TextInput>
                <InputBase
                    inputRef={inputRef}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Ask ChatGPT"
                />

                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    onClick={handleGetAnswer}
                >
                    <SearchIcon color="secondary" />
                </IconButton>
            </TextInput>

            <Answer>
                {answer && ReactHtmlParser(answer)}
            </Answer>
        </Container>
    );
};
