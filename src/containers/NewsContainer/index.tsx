import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTimeFromNow } from "../../helpers";
import { Link, styled, Typography } from "@mui/material";
import { selectSelectedNews } from "../../modules/selectors";

const Box = styled('div')(({ theme }) => ({
  margin: theme.spacing(2),
}));

export const NewsContainer: React.FC = (): JSX.Element | null => {
  const navigate = useNavigate();
  const newStory = useSelector(selectSelectedNews);

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

      <Typography variant="subtitle2" color="GrayText">
        {newStory.data.score} point from {newStory.data.by} {getTimeFromNow(newStory.data.time)}
      </Typography>
    </Box>
  );
};
