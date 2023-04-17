import { styled } from "@mui/material";

export const Container = styled("div")(({
    display: "flex",
    flexFlow: "row wrap",
    height: "100%",
}));

export const Section = styled("div")(({ theme }) => ({
    flex: "33.3%",
    minWidth: "300px",
    margin: theme.spacing(3),
}));
