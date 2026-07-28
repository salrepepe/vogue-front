import { Box, List, ListItemButton, ListItemText, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    path: "/admin",
  },
  {
    title: "Заказы",
    path: "/admin/orders",
  },
  {
    title: "Товары",
    path: "/admin/products",
  },
  {
    title: "Категории",
    path: "/admin/categories",
  },
  {
    title: "Бренды",
    path: "/admin/brands",
  },
];

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem("adminToken");

    window.location.href = "/admin/login";
  };

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#111",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            end={item.path === "/admin"}
            sx={{
              color: "#fff",

              "&.active": {
                bgcolor: "#333",
              },
            }}
          >
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>

      <Box
        sx={{
          p: 2,
        }}
      >
        <Button fullWidth variant="outlined" color="error" onClick={logout}>
          Выйти
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
