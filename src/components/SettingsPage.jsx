import { Box, Typography, Switch } from "@mui/material";

const SettingsPage = ({ mode, setMode }) => {
  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb="1.5rem">
        Settings
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="250px"
        p="1rem"
        borderRadius="0.5rem"
        boxShadow={3}
      >
        <Typography fontSize="1.1rem">Dark Mode</Typography>

        <Switch checked={mode === "dark"} onChange={handleToggle} />
      </Box>
    </Box>
  );
};

export default SettingsPage;
