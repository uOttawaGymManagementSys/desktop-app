import { Box, Card, Typography } from "@mui/material";
import Header from "./Header";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGetTrafficStatsByGymQuery } from "../state/api";

const Dashboard = ({ selectedGym }) => {
  // Last week – daily peak traffic
  const {
    data: weeklyPeaks,
    isLoading: isLoadingWeek,
    isError: isErrorWeek,
  } = useGetTrafficStatsByGymQuery({
    gymId: selectedGym,
    range: "week",
    agg: "daily_max",
  });

  // Last month – daily peak traffic
  const {
    data: monthlyPeaks,
    isLoading: isLoadingMonth,
    isError: isErrorMonth,
  } = useGetTrafficStatsByGymQuery({
    gymId: selectedGym,
    range: "month",
    agg: "daily_max",
  });

  // Last 6 months – peak traffic per period
  const {
    data: sixMonthPeaks,
    isLoading: isLoadingSix,
    isError: isErrorSix,
  } = useGetTrafficStatsByGymQuery({
    gymId: selectedGym,
    range: "6months",
    agg: "monthly_max",
  });

  // ===== Transform backend rows into chart-friendly data =====

  const weeklyChartData =
    weeklyPeaks?.map((item) => {
      const date = new Date(item.day);
      return {
        label: date.toLocaleDateString(undefined, {
          weekday: "short", // Mon, Tue, ...
        }),
        maxTraffic: item.peak_traffic,
      };
    }) || [];

  const monthlyChartData =
    monthlyPeaks?.map((item) => {
      const date = new Date(item.day);
      return {
        label: date.toLocaleDateString(undefined, {
          month: "short", // Nov
          day: "numeric", // 27
        }),
        maxTraffic: item.peak_traffic,
      };
    }) || [];

  const sixMonthChartData =
    sixMonthPeaks?.map((item) => {
      const date = new Date(item.day);
      return {
        label: date.toLocaleDateString(undefined, {
          month: "short", // Nov
          year: "2-digit", // 25
        }),
        maxTraffic: item.peak_traffic,
      };
    }) || [];

  return (
    <Box>
      <Header
        title="DASHBOARD"
        subtitle={`Dashboard of ${
          selectedGym === 4 ? "HLC" : selectedGym === 3 ? "MNT" : ""
        } gym`}
      />

      {/* ===== Graph 1: Last Week ===== */}
      <Card sx={{ mt: "2rem", p: "1.5rem", height: 450, boxShadow: 8 }}>
        <Typography variant="h6" fontWeight={600} mb="0.5rem">
          Highest Traffic per Day — Last 7 Days
        </Typography>
        <Typography variant="body2" color="text.secondary" mb="1rem">
          Each point shows the busiest moment of that day and its traffic count.
        </Typography>

        {isLoadingWeek ? (
          <Typography>Loading...</Typography>
        ) : isErrorWeek ? (
          <Typography color="error">Failed to load weekly traffic.</Typography>
        ) : weeklyChartData.length === 0 ? (
          <Typography>No data available for the last 7 days.</Typography>
        ) : (
          <ResponsiveContainer width="100%" height="70%">
            <LineChart data={weeklyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip
                formatter={(value, name) =>
                  name === "maxTraffic" ? [value, "Max Traffic"] : [value, name]
                }
              />
              <Line
                type="monotone"
                dataKey="maxTraffic"
                stroke="#8884d8"
                strokeWidth={3}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Card>

      {/* ===== Graph 2: Last Month ===== */}
      <Card sx={{ mt: "2rem", p: "1.5rem", height: 450, boxShadow: 8 }}>
        <Typography variant="h6" fontWeight={600} mb="0.5rem">
          Highest Traffic per Day — Last 30 Days
        </Typography>
        <Typography variant="body2" color="text.secondary" mb="1rem">
          Shows peak daily traffic over the past month.
        </Typography>

        {isLoadingMonth ? (
          <Typography>Loading...</Typography>
        ) : isErrorMonth ? (
          <Typography color="error">Failed to load monthly traffic.</Typography>
        ) : monthlyChartData.length === 0 ? (
          <Typography>No data available for the last 30 days.</Typography>
        ) : (
          <ResponsiveContainer width="100%" height="70%">
            <LineChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip
                formatter={(value, name) =>
                  name === "maxTraffic" ? [value, "Max Traffic"] : [value, name]
                }
              />
              <Line
                type="monotone"
                dataKey="maxTraffic"
                stroke="#82ca9d"
                strokeWidth={3}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Card>

      {/* ===== Graph 3: Last 6 Months ===== */}
      <Card
        sx={{ mt: "2rem", p: "1.5rem", height: 450, boxShadow: 8, mb: "2rem" }}
      >
        <Typography variant="h6" fontWeight={600} mb="0.5rem">
          Highest Traffic — Last 6 Months
        </Typography>
        <Typography variant="body2" color="text.secondary" mb="1rem">
          Aggregated peak traffic over the past six months.
        </Typography>

        {isLoadingSix ? (
          <Typography>Loading...</Typography>
        ) : isErrorSix ? (
          <Typography color="error">Failed to load 6-month traffic.</Typography>
        ) : sixMonthChartData.length === 0 ? (
          <Typography>No data available for the last 6 months.</Typography>
        ) : (
          <ResponsiveContainer width="100%" height="70%">
            <LineChart data={sixMonthChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip
                formatter={(value, name) =>
                  name === "maxTraffic" ? [value, "Max Traffic"] : [value, name]
                }
              />
              <Line
                type="monotone"
                dataKey="maxTraffic"
                stroke="#ff7300"
                strokeWidth={3}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Card>
    </Box>
  );
};

export default Dashboard;
