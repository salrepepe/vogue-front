import { Drawer } from "@mui/material";
import React from "react";
import Filter from "./Filter";

const SideBar = ({ setOpen, t, open }) => {
  return (
    <Drawer
      anchor="left"
      sx={{ "& .MuiPaper-root": { width: "90%", padding: "20px" } }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Filter t={t} />
    </Drawer>
  );
};

export default SideBar;
