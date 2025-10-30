import { Box } from "@mui/material";
import { useGetTrafficByGymQuery } from "../state/api";
import Header from "./Header";
import { DataGrid } from "@mui/x-data-grid";

const TrafficCount = ({ selectedGym }) => {
  const { data, isLoading } = useGetTrafficByGymQuery(selectedGym);
  console.log(data);

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
      renderCell: (params) => {
        return params.value === 4
          ? "HLC"
          : params.value === 3
            ? "MNT"
            : String(params.value);
      },
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
    <Box m="1.5rem 2.5rem">
      <Header
        title="TRAFFIC COUNT"
        subtitle={`Traffic count of ${selectedGym === 4 ? "HLC" : selectedGym === 3 ? "MNT" : ""} gym`}
      />

      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .MuiDataGrid-columnHeaders": {
            "& .MuiDataGrid-columnHeader": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              justifyContent: "center !important",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              textAlign: "center",
              width: "100%",
            },
          },
          "& .MuiDataGrid-columnHeader--recorded_at": {
            justifyContent: "center !important",
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row.id}
          rows={data || []}
          columns={columns}
          sx={{
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TrafficCount;
