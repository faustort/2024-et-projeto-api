import { Box, Typography } from "@mui/material";
import WeatherComponent from "../../components/WeatherComponent";

export default function Inicial() {
  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
      >
        Home
        <WeatherComponent />
      </Typography>
    </Box>
  );
}
