import { Story } from "../../types";
import { getTimeFromNow } from "../../helpers";
import ReactHtmlParser from 'react-html-parser';
import { Link, styled, Typography } from "@mui/material";

const Box = styled('div')(({ theme }) => ({
    margin: theme.spacing(2),
    color: theme.palette.mode === "dark" ? "#ffe0b2" : "inherit",
}));

interface ItemInfoComponentProps {
    item: Story;
}

export const ItemInfoComponent: React.FC<ItemInfoComponentProps> = ({
    item,
}: ItemInfoComponentProps): JSX.Element => {
    return (
        <Box>
            <Link
                style={{ cursor: "pointer" }}
                color="secondary"
                href={item.url}
                underline="hover"
                target={"_blank"}
                variant="h6"
            >
                <>{item.title}</>
            </Link>

            <Typography variant="subtitle2">
                <>{item.score} </>
                <>point from {item.by} </>
                <>{getTimeFromNow(item.time)}</>
            </Typography>

            {item.text && (
                <Typography variant="subtitle1" mt={2} component="span">
                    <>{ReactHtmlParser(item.text)}</>
                </Typography>
            )}
        </Box>
    );
};
