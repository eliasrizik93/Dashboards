import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import "./SideBar.css";
import React from "react";

const Item = ({ icon, title }) => {
  return <MenuItem icon={icon}> {title}</MenuItem>;
};

function SideBar() {
  return (
    <div className="SideBar">
      <div className="Header">
        
        <Typography>ADMINS</Typography>
        <PeopleOutlinedIcon />
      </div>
      <ProSidebar>
        <Menu iconShape="square">
          <Item icon={<HomeOutlinedIcon />} title="Dashboard" />
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default SideBar;
