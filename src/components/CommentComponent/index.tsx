import { ResponseData } from "../../types";
import { getTimeFromNow } from "../../helpers";
import ReactHtmlParser from "react-html-parser";
import { Card, Typography, styled } from "@mui/material";
import { NestedCommentsContainer } from "../../containers";

const CommentCard = styled(Card)(({ theme }) => ({
    margin: "8px 0 4px",
    padding: "8px 0 0 8px",
    background: "background.paper",
}));

interface CommentComponentProps {
    comment: ResponseData;
}

export const CommentComponent: React.FC<CommentComponentProps> = ({
    comment,
}: CommentComponentProps): JSX.Element | null => {
    if (!comment.data.text) return null;
    if (comment.data.text === "[dead]") return null;

    return (
        <CommentCard>
            <Typography
                gutterBottom
                fontSize={12}
                color="text.secondary"
                component="span"
            >
                <>{comment.data.by} </>
                <>{getTimeFromNow(comment.data.time)}</>
            </Typography>

            <Typography
                pr={1}
                overflow="auto"
                variant="body2"
                component="div"
            >
                {ReactHtmlParser(comment.data.text)}
            </Typography>

            {!comment.data.kids ? null : <NestedCommentsContainer comments={comment.data.kids} />}
        </CommentCard>
    );
};
