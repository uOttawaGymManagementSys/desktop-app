import { Box, Typography, Switch } from "@mui/material";
import Header from "./Header";

const SettingsPage = ({ mode, setMode }) => {
  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box>
      <Header title="Settings" subtitle="   " />

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
