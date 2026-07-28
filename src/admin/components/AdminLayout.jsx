import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          p: 4,
          bgcolor: "#f8f8f8",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
