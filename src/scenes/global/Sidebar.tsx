import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
 import "react-pro-sidebar";
// import "./Side.scss"; // Import the SCSS file
// import { tokens } from "../../theme";
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
import './Sidebar.css';
// import colors  from "../../theme"; 
// import'./scenes/global/User.png';
// import Item from "./Item";

interface ItemProps {
    title: string;
    to: string;
    icon: React.ReactNode;
    selected: string;
    setSelected: (title: string) => void;
  }
  
  const Item: React.FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();
    
    const handleClick = () => {
        setSelected(title);
        navigate(to);
    };

    return (
      <MenuItem
        active={selected === title}
        // style={{
        //   color: colors.grey[100],  //all text
        // }}
        onClick={handleClick} className={selected === title ? 'active' : ''}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const Sidebar1 = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // console.log("hello",tokens);
  // console.log("hiii",colors);
  
  // const sidebarStyle = {
  //   backgroundColor: '#f0f0f0', // Replace with your desired color
  //   width: '250px',
  //   height: '100vh',
  // };
 
  return (
    // <div style={sidebarStyle}>
    //   {/* Sidebar content */}
    

    <Box className="Side"
    // sx={{
    //   // "& .pro-sidebar-inner": {
    //   //   background: `${colors.primary[400]} !important`,
    //   // },
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   "& .pro-inner-item": {
    //     padding: "5px 35px 5px 20px !important",
    //   },
    //   "& .pro-inner-item:hover": {
    //     color: "#868dfb !important",
    //   },
    //   "& .pro-menu-item.active": {
    //     color: "#6870fa !important",
    //   },
    // }}
  >
    <Sidebar collapsed={isCollapsed}  >
      <Menu>
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "20px 0 20px 0",
            // color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="25px"
            >
              <Typography variant="h5" >
                ADMIN
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              {/* <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={'.../User.png'}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              /> */}
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h5"
                // color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0"}}
              >
                Vividians HRM
              </Typography>
              {/* <Typography variant="h5" >
                VP Fancy Admin
              </Typography> */}
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            to="/dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            // variant="h6"
            // color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" , fontSize: '17px'}}
          >
            Data
          </Typography>
          <Item
            title="About"
            to="/dashboard/about"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/dashboard/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            to="/dashboard/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            // color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px", fontSize: '17px' }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/dashboard/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/dashboard/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ Page"
            to="/dashboard/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            // color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px", fontSize: '17px' }}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/dashboard/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            to="/dashboard/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            to="/dashboard/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/dashboard/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/dashboard/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/dashboard/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/dashboard/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/dashboard/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/dashboard/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  </Box>
  );
};

export default Sidebar1;
