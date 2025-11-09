import { Box, TextField, Button } from "@mui/material";
import {
  useGetTodayTrafficByGymQuery,
  useAddTrafficCountMutation,
} from "../state/api";
import Header from "./Header";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const TrafficCount = ({ selectedGym }) => {
  const { data, isLoading } = useGetTodayTrafficByGymQuery(selectedGym);
  const [trafficValue, setTrafficValue] = useState("");

  // mutation hook for adding traffic entry
  const [addTrafficEntry, { isLoading: isAdding }] =
    useAddTrafficCountMutation();

  const handleSubmit = async () => {
    if (trafficValue.trim() === "") {
      alert("Please enter a number first.");
      return;
    }

    const num = Number(trafficValue);

    if (isNaN(num)) {
      alert("Only numeric values are allowed.");
      return;
    }

    if (num < 0) {
      alert("Traffic count cannot be negative.");
      return;
    }

    try {
      await addTrafficEntry({
        gym_id: selectedGym,
        traffic_count: num,
      }).unwrap();

      console.log("Traffic count logged successfully!");
      setTrafficValue(""); // clear after submit
    } catch (error) {
      console.error("Failed to log traffic count:", error);
      alert("Failed to log traffic count. Please try again.");
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gym_id",
      headerName: "Gym",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
      renderCell: (params) =>
        params.value === 4
          ? "HLC"
          : params.value === 3
            ? "MNT"
            : String(params.value),
    },
    {
      field: "recorded_at",
      headerName: "Recorded At",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const value = params.row.recorded_at;
        if (!value) return "";
        return new Date(value).toLocaleString();
      },
    },
    {
      field: "traffic_count",
      headerName: "Traffic Count",
      flex: 0.7,
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <Box m="0rem 2.5rem">
      <Header
        title="TRAFFIC COUNT"
        subtitle={`Traffic count of ${
          selectedGym === 4 ? "HLC" : selectedGym === 3 ? "MNT" : ""
        } gym`}
      />

      {/* Input + Submit */}
      <Box display="flex" alignItems="center" gap="1rem" mt="1rem" mb="1.5rem">
        <TextField
          type="number"
          label="Enter traffic count"
          variant="outlined"
          size="small"
          value={trafficValue}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "" || /^[0-9]+$/.test(val)) {
              setTrafficValue(val);
            }
          }}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 0 }}
          sx={{ width: "200px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isAdding}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "0.5rem",
            px: "1.5rem",
            py: "0.6rem",
          }}
        >
          {isAdding ? "Submitting..." : "Submit"}
        </Button>
      </Box>

      {/* Data Table */}
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row.id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default TrafficCount;
