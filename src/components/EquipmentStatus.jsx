import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  useGetMachinesByGymQuery,
  useUpdateMachineStatusMutation,
} from "../state/api";
import Header from "./Header";

const Machine = ({ gym_id, id, name, number, status, status_changed_at }) => {
  const [updateMachineStatus, { isLoading }] = useUpdateMachineStatusMutation();

  const handleToggleStatus = async () => {
    const newStatus = !status; // database uses true = works fine
    try {
      await updateMachineStatus({ id, status: newStatus }).unwrap();
    } catch (error) {
      console.error("Failed to update machine status:", error);
      alert("Failed to update machine status. Please try again.");
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "#CCCCCC",
        borderRadius: "0.75rem",
        p: "1.25rem",
        boxShadow: "0px 4px 16px rgba(0,0,0,0.15)",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent sx={{ pb: "0 !important" }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>Machine #{number}</Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
          Last updated: {new Date(status_changed_at).toLocaleString()}
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
          Gym: {gym_id === 4 ? "HLC" : "MNT"}
        </Typography>
      </CardContent>

      <CardActions sx={{ pt: "0.5rem" }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "0.5rem",
            py: "0.5rem",
            backgroundColor: !status ? "#DC2626" : "#16A34A",
            "&:hover": {
              backgroundColor: !status ? "#B91C1C" : "#15803D",
            },
          }}
          onClick={handleToggleStatus}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : !status ? "Not Available" : "Available"}
        </Button>
      </CardActions>
    </Card>
  );
};

const EquipmentStatus = ({ selectedGym }) => {
  const { data, isLoading } = useGetMachinesByGymQuery(selectedGym);
  const isNonMobile = useMediaQuery("(min-width:1000px");
  console.log(data);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title={"Machines"}
        subtitle={`${selectedGym === 4 ? "HLC" : selectedGym === 3 ? "MNT" : ""} gym equipment list`}
      />
      {data && !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {
              gridColumn: isNonMobile ? undefined : "span 4",
            },
          }}
        >
          {data.map(
            ({ gym_id, id, name, number, status, status_changed_at }) => (
              <Machine
                key={id}
                gym_id={gym_id}
                id={id}
                name={name}
                number={number}
                status={status}
                status_changed_at={status_changed_at}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default EquipmentStatus;
