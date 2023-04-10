import HtmlParser from "react-html-parser";
import { ResponseData } from "../../types";
import { getTimeFromNow } from "../../helpers";
import { Card, Typography, styled } from "@mui/material";
import { NestedCommentsContainer } from "../../containers";

const CommentCard = styled(Card)(({ theme }) => ({
    margin: "8px 0",
    padding: theme.spacing(2),
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
            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                <>{comment.data.by} </>
                <>{getTimeFromNow(comment.data.time)}</>
            </Typography>

            <Typography variant="body2">
                {HtmlParser(comment.data.text ? comment.data.text : "")}
            </Typography>

            {!comment.data.kids ? null : <NestedCommentsContainer comments={comment.data.kids} />}
        </CommentCard>
    );
};
