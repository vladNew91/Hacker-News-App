import ReactHtmlParser from 'react-html-parser';
import { ResponseData } from "../../types";
import { getTimeFromNow } from "../../helpers";
import { Link, styled, Typography } from "@mui/material";

const Box = styled('div')(({ theme }) => ({
    margin: theme.spacing(2),
    color: theme.palette.mode === "dark" ? "#ffe0b2" : "inherit",
}));

interface SelectedItemComponentProps {
    item?: ResponseData;
}

export const SelectedItemComponent: React.FC<SelectedItemComponentProps> = ({
    item,
}: SelectedItemComponentProps): JSX.Element | null => {
    if (!item) return null;

    return (
        <Box>
            <Link
                style={{ cursor: "pointer"}}
                color="secondary"
                href={item.data.url}
                underline="hover"
                target={"_blank"}
                variant="h6"
            >
                {item.data.title}
            </Link>

            <Typography variant="subtitle2">
                <>{item.data.score} </>
                <>point from {item.data.by} </>
                <>{getTimeFromNow(item.data.time)}</>
            </Typography>

            {item.data.text
                &&
                (<Typography variant="subtitle1" m={2}>
                    {ReactHtmlParser(item.data.text)}
                </Typography>
                )}
        </Box>
    );
};
