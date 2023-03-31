import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTimeFromNow } from "../../helpers";
import { selectNews } from "../../modules/selectors";
import { Link, styled, Typography } from "@mui/material";

const Box = styled('div')(({ theme }) => ({
  margin: theme.spacing(2),
}));

export const NewsContainer: React.FC = (): JSX.Element | null => {
  const navigate = useNavigate();
  const newStory = useSelector(selectNews);

  useEffect(() => {
    if (!newStory) navigate("/");
  }, [newStory, navigate]);

  if (!newStory) return null;

  return (
    <Box>
      <Link
        href={newStory.data.url}
        underline="hover"
        target={"_blank"}
        variant="h6"
      >
        {newStory.data.title}
      </Link>

      <Typography variant="subtitle2">
        {newStory.data.score} point from {newStory.data.by} {getTimeFromNow(newStory.data.time)}
      </Typography>
    </Box>
  );
};
