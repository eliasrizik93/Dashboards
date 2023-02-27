import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import "./SideBar.css";
import React from "react";
const Item = ({ icon, title }) => {
  return (
    <MenuItem className="MenuItem2" icon={icon}>
      <Typography sx={{ mx: 3 }}>{title}</Typography>
    </MenuItem>
  );
};

function SideBar() {
  const img = "../../assets/user.png";
  return (
    <div className="SideBar">
      <div className="Header">
        <div className="Header-Menu">
          <Typography>ADMINIS</Typography>
          <MenuIcon />
        </div>
        <div className="Profile">
          <div className="Header-Img">
            <img src={img} width="100" height="100"></img>
          </div>
          <div className="Profile-Name">
            <Typography
              color="#e0e0e0"
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              Ed Roh
            </Typography>
            <Typography>VP Fancy Admin</Typography>
          </div>
        </div>
      </div>
      <ProSidebar className="SideBarMenu">
        <Menu iconShape="square" className="Menu">
          <Item icon={<HomeOutlinedIcon />} title="Dashboard" />
          <Typography variant="h6" color="gray" sx={{ m: "15px 0 5px 20px" }}>
            Data
          </Typography>
          <Item icon={<PeopleOutlinedIcon />} title="Manage Team" />
          <Item icon={<ContactsOutlinedIcon />} title="Contacts Information" />
          <Item icon={<ReceiptOutlinedIcon />} title="Invoices Balances" />
          <Typography variant="h6" color="gray" sx={{ m: "15px 0 5px 20px" }}>
            Pages
          </Typography>
          <Item icon={<PersonOutlinedIcon />} title="Profile Form" />
          <Item icon={<CalendarTodayOutlinedIcon />} title="Calendar" />
          <Item icon={<HelpOutlineOutlinedIcon />} title="FAQ Page" />
          <Typography variant="h6" color="gray" sx={{ m: "15px 0 5px 20px" }}>
            Charts
          </Typography>
          <Item icon={<BarChartOutlinedIcon />} title="Bar Chart" />
          <Item icon={<PieChartOutlineOutlinedIcon />} title="Pie Chart" />
          <Item icon={<TimelineOutlinedIcon />} title="Line Chart" />
          <Item icon={<MapOutlinedIcon />} title="Geography Chart" />
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default SideBar;
