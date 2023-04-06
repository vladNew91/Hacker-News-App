import React, { useCallback, useRef, useState } from "react";
import { ChatGPTComponent } from "../../components";
import { requestGpt } from "../../api";

export const ChatGPTContainer: React.FC = (): JSX.Element => {
    const [answer, setAnswer] = useState<string>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleGetAnswer = useCallback(() => {
        requestGpt(inputRef.current?.value).then((res) => setAnswer(res.choices[0].text))
    }, []);

    return (
        <ChatGPTComponent
            answer={answer}
            inputRef={inputRef}
            handleGetAnswer={handleGetAnswer}
        />
    );
};
