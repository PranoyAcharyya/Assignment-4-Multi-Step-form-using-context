import { Box, Typography, Grow } from "@mui/material";

export default function Success() {
  return (
    <Grow in timeout={500}>
      <Box textAlign="center" py={6}>
        <Typography variant="h5">
          Form Submitted Successfully 🎉
        </Typography>
        <Typography color="text.secondary">
          Thank you for your time
        </Typography>
      </Box>
    </Grow>
  );
}
