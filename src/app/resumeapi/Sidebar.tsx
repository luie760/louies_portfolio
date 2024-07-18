import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "./theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
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
import Link from "next/link";

//Replication of sidebar from https://codesandbox.io/examples/package/react-pro-sidebar

type ItemProps = {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  onSelect(arg: string): void;
  mode: colorModes;
}

type colorModes = "light" | "dark";

const Item = ({ title, to, icon, selected, onSelect, mode}: ItemProps) => {
  const theme = useTheme();
  const colors = tokens({mode});
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => onSelect(to)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

type SideBarProps = {
  active: string,
  onSelect(arg: string): void;
  mode: colorModes;
}

const Sidebar = ({onSelect, mode}: SideBarProps) => {
  const theme = useTheme();
  const colors = tokens({mode});
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Introduction");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="body1" color={colors.grey[100]}>
                  API
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              mode={mode}
              title="Introduction"
              to="Introduction"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Getting Started
            </Typography>
            <Item
              mode={mode}
              title="API Clients"
              to="APIClients"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="cURL"
              to="cURL"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Postman"
              to="Postman"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              mode={mode}
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              mode={mode}
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              onSelect={onSelect}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
