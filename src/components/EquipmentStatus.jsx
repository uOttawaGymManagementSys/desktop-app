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
import { useGetMachinesByGymQuery } from "../state/api";
import Header from "./Header";

const Machine = ({ gym_id, id, name, number, status, status_changed_at }) => {
  const [isBroken, setIsBroken] = useState(false);
  return (
    <Card
      sx={{
        backgroundColor: "#CCCCCC", // Light gray (Tailwind's gray-50)
        borderRadius: "0.75rem",
        padding: "1.25rem",
        boxShadow: "0px 4px 16px rgba(0,0,0,0.15)", // 3D shadow
        transition: "all 0.2s ease-in-out",

        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0,0,0,0.25)", // pop on hover
          transform: "translateY(-4px)", // lift card
        },
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        color: "#111827", // Very dark gray text
      }}
    >
      <CardContent sx={{ paddingBottom: "0 !important" }}>
        {/* MACHINE NAME */}
        <Typography variant="h6" sx={{ fontWeight: "600", color: "#111827" }}>
          {name}
        </Typography>

        {/* MACHINE NUMBER */}
        <Typography sx={{ fontSize: 14, color: "#374151" }}>
          Machine #{number}
        </Typography>

        {/* LAST UPDATED */}
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
          Last updated: {new Date(status_changed_at).toLocaleString()}
        </Typography>

        {/* GYM */}
        <Typography sx={{ fontSize: 13, color: "#6B7280" }}>
          Gym: {gym_id === 4 ? "HLC" : "MNT"}
        </Typography>
      </CardContent>

      <CardActions sx={{ padding: 0, paddingTop: "0.5rem" }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "0.5rem",
            padding: "0.5rem",
            backgroundColor: isBroken ? "#DC2626" : "#16A34A",
            "&:hover": {
              backgroundColor: isBroken ? "#B91C1C" : "#15803D",
            },
          }}
          onClick={() => setIsBroken(!isBroken)}
        >
          {isBroken ? "Not Available" : "Available"}
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
