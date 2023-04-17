import { Paper, styled } from '@mui/material';

export const Container = styled("div")(({
    height: "100%",
    minHeight: "500px",
    overflow: "auto",
}));

export const TextInput = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
}));

export const Answer = styled(Paper)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(2),
    height: "calc(100% - 45px - 24px)",
}));
