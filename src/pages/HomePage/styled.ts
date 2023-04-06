import { styled } from "@mui/material";

export const Container = styled("div")(({
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    height: "100%",
}));

export const Section = styled("div")(({
    flex: "33.33%",
    minWidth: "300px",
}));
