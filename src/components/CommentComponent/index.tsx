import HtmlParser from "react-html-parser";
import { ResponseData } from "../../types";
import { getTimeFromNow } from "../../helpers";
import { Card, Typography, styled } from "@mui/material";
import { NestedCommentsContainer } from "../../containers";

const CommentCard = styled(Card)(({ theme }) => ({
    margin: "8px 0 4px",
    padding: "8px 0 0 8px",
    background: theme.palette.mode === "dark" ? "#482d00" : "",
}));

interface CommentComponentProps {
    comment: ResponseData;
}

export const CommentComponent: React.FC<CommentComponentProps> = ({
    comment,
}: CommentComponentProps): JSX.Element => {
    return (
        <CommentCard>
            <Typography
                gutterBottom
                fontSize={12}
                color="text.secondary"
            >
                <>{comment.data.by} </>
                <>{getTimeFromNow(comment.data.time)}</>
            </Typography>

            <Typography
                pr={1}
                overflow="auto"
                variant="body2"
            >
                {HtmlParser(comment.data.text ? comment.data.text : "")}
            </Typography>

            {!comment.data.kids ? null : <NestedCommentsContainer comments={comment.data.kids} />}
        </CommentCard>
    );
};
