import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetMachinesQuery } from "../state/api";
import Header from "./Header";

const EquipmentStatus = () => {
    return (  
        <div>
            <Header title={"Machines"} subtitle={"MNT and HLC gym equipment list"}/>
        </div>
    );
}
 
export default EquipmentStatus;