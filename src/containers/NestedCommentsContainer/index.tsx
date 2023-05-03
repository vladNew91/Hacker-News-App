import { AxiosError } from "axios";
import { Story } from "../../types";
import { useQuery } from "react-query";
import { loadItemCommentsRequest } from "../../api";
import { CommentComponent, ErrorAlertComponent } from "../../components";

interface NestedCommentsContainerProps {
    comments: number[];
}

export const NestedCommentsContainer: React.FC<NestedCommentsContainerProps> = ({
    comments,
}: NestedCommentsContainerProps): JSX.Element => {
    const { data, error } = useQuery([
        "nestedComments",
        comments,
    ], loadItemCommentsRequest, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            {data.map((comment: Story, i) => (
                <CommentComponent
                    key={i}
                    comment={comment}
                />
            ))}

            {error as AxiosError && <ErrorAlertComponent />}
        </div>
    );
};
