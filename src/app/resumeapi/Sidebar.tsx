import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "./theme";
import InfoIcon from "@mui/icons-material/Info";
import HttpIcon from "@mui/icons-material/Http";
import TerminalIcon from "@mui/icons-material/Terminal";
import MailIcon from "@mui/icons-material/Mail";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import CommentIcon from "@mui/icons-material/Comment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ApiIcon from "@mui/icons-material/Api";

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
              icon={<InfoIcon />}
              selected={selected}
              onSelect={onSelect}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Start
            </Typography>
            <Item
              mode={mode}
              title="API Clients"
              to="APIClients"
              icon={<HttpIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="cURL"
              to="cURL"
              icon={<TerminalIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Postman"
              to="Postman"
              icon={<MailIcon />}
              selected={selected}
              onSelect={onSelect}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              GET
            </Typography>
            <Item
              mode={mode}
              title="Endpoints"
              to="Endpoints"
              icon={<ApiIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Education"
              to="Education"
              icon={<SchoolIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Experience"
              to="Experience"
              icon={<WorkIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Skills"
              to="Skills"
              icon={<BuildIcon />}
              selected={selected}
              onSelect={onSelect}
            />
            <Item
              mode={mode}
              title="Projects"
              to="Projects"
              icon={<AssignmentIcon />}
              selected={selected}
              onSelect={onSelect}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              POST
            </Typography>
            <Item
              mode={mode}
              title="Comment"
              to="Comment"
              icon={<CommentIcon />}
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
