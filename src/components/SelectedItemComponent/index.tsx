import { getTimeFromNow } from "../../helpers";
import { Link, styled, Typography } from "@mui/material";
import { Job, News } from "../../types";

const Box = styled('div')(({ theme }) => ({
    margin: theme.spacing(2),
}));

interface SelectedItemComponentProps {
    item?: News | Job;
}

export const SelectedItemComponent: React.FC<SelectedItemComponentProps> = ({
    item,
}: SelectedItemComponentProps): JSX.Element | null => {
    if (!item) return null;

    return (
        <Box>
            <Link
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
        </Box>
    );
};
