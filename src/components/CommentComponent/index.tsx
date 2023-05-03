import { Story } from "../../types";
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
    comment: Story;
}

export const CommentComponent: React.FC<CommentComponentProps> = ({
    comment,
}: CommentComponentProps): JSX.Element | null => {
    if (!comment.text) return null;
    if (comment.text === "[dead]") return null;

    return (
        <CommentCard>
            <Typography
                gutterBottom
                fontSize={12}
                color="text.secondary"
                component="span"
            >
                <>{comment.by} </>
                <>{getTimeFromNow(comment.time)}</>
            </Typography>

            <Typography
                pr={1}
                overflow="auto"
                variant="body2"
                component="div"
            >
                {ReactHtmlParser(comment.text)}
            </Typography>

            {!comment.kids ? null : <NestedCommentsContainer comments={comment.kids} />}
        </CommentCard>
    );
};
