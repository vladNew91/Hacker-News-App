import { InputBase, IconButton } from '@mui/material';
import { Answer, Container, TextInput } from './styled';
import SearchIcon from '@mui/icons-material/Search';
import HtmlParser from 'react-html-parser';

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
                    placeholder="Ask me something.."
                />

                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    onClick={handleGetAnswer}
                >
                    <SearchIcon />
                </IconButton>
            </TextInput>

            <Answer>
                {answer && HtmlParser(answer)}
            </Answer>
        </Container>
    );
};
