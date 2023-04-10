import { useQuery } from "react-query";
import { ResponseData } from "../../types";
import { loadItemCommentsRequest } from "../../api";
import { CommentComponent, ErrorAlertComponent } from "../../components";

interface NestedCommentsContainerProps {
    comments: number[];
}

export const NestedCommentsContainer: React.FC<NestedCommentsContainerProps> = ({
    comments,
}: NestedCommentsContainerProps): JSX.Element => {
    const { data, error } = useQuery(["nestedComments", comments], loadItemCommentsRequest, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    if (!data) return <p>Loading...</p>;

    return (
        <>
            {data.map((comment: ResponseData, i) => (
                <CommentComponent
                    key={i}
                    comment={comment}
                />
            ))}

            {error && <ErrorAlertComponent />}
        </>
    );
};
