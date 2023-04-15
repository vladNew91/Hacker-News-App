import { Card, CardContent, Grid, Skeleton, Stack } from "@mui/material";

export const WeatherSkeletonComponent: React.FC = (): JSX.Element => {
    return (
        <Card>
            <CardContent>
                <Grid container alignItems="center" spacing={1} wrap="nowrap">
                    <Grid item xs="auto">
                        <Skeleton variant="circular" width={80} height={80} />
                    </Grid>

                    <Grid item xs={7}>
                        <Stack>
                            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                    </Grid>

                    <Grid item xs={4} display="flex" justifyContent="end">
                        <Skeleton variant="text" sx={{ fontSize: '4rem' }} width={40} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
