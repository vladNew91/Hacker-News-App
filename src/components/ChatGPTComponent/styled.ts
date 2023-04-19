import { Paper, styled } from '@mui/material';

export const Container = styled("div")(({
    height: "700px",
}));

export const TextInput = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    position: "sticky",
    top: 0,
}));

export const Answer = styled(Paper)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(2),
    height: "calc(100% - 45px - 24px)",
}));
