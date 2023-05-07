import {
    useCallback,
    useRef,
    useState,
} from "react";
import {
    ChatGPTComponent,
    ErrorAlertComponent,
} from "../../components";
import { requestGpt } from "../../api";

export const ChatGPTContainer: React.FC = (): JSX.Element => {
    const [answer, setAnswer] = useState<string>();
    const [error, setError] = useState<string>();

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleGetAnswer = useCallback(() => {
        requestGpt(inputRef?.current?.value)
            .then(res => setAnswer(res?.choices[0].text))
            .catch(err => setError(err.response.data.error.message));
    }, []);

    return (
        <>
            <ChatGPTComponent
                answer={answer}
                inputRef={inputRef}
                handleGetAnswer={handleGetAnswer}
            />

            {error && <ErrorAlertComponent error={error} />}
        </>
    );
};
