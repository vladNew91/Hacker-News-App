import { AxiosError } from "axios";
import { Story } from "../../types";
import { useQuery } from "react-query";
import { styled } from "@mui/material";
import { loadItemCommentsRequest } from "../../api";
import { CommentComponent, ErrorAlertComponent, LoadingComponent } from "../../components";

const Container = styled("div")(({ theme }) => ({
    padding: "0 16px",
    fontSize: "small",
}));

interface ItemCommentsContainerProps {
    comments: number[];
}

export const ItemCommentsContainer: React.FC<ItemCommentsContainerProps> = ({
    comments,
}: ItemCommentsContainerProps): JSX.Element => {
    const { data, error } = useQuery(
        ["comments", comments],
        loadItemCommentsRequest,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    if (!data) return <LoadingComponent />;

    return (
        <Container>
            {data.map((comment: Story, i: number) => (
                <CommentComponent
                    key={i}
                    comment={comment}
                />
            ))}

            {(error as AxiosError) && <ErrorAlertComponent />}
        </Container>
    );
};
