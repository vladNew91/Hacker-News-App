import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTimeFromNow } from "../../helpers";
import { selectedItem } from "../../modules/selectors";
import { Link, styled, Typography } from "@mui/material";

const Box = styled('div')(({ theme }) => ({
  margin: theme.spacing(2),
}));

export const SelectedItemContainer: React.FC = (): JSX.Element | null => {
  const navigate = useNavigate();
  const item = useSelector(selectedItem);

  useEffect(() => {
    if (!item) navigate("/");
  }, [item, navigate]);

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
