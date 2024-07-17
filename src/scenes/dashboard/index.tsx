import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import DashboardCards from "./Card1";
import moment from 'moment-timezone';


const Dashboard = () => {
  moment.tz.setDefault('Asia/Kolkata'); // IST
  const [checkInTime, setCheckInTime] = useState<moment.Moment | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<moment.Moment | null>(null);

  const handleCheckIn = () => {
    setCheckInTime(moment());
    setCheckOutTime(null);
  };

  const handleCheckOut = () => {
    setCheckOutTime(moment());
  }


  return (
    <Box m="20px">

<Header checkInTime={checkInTime} checkOutTime={checkOutTime} onCheckIn={handleCheckIn} onCheckOut={handleCheckOut} />
<DashboardCards checkInTime={checkInTime} checkOutTime={checkOutTime} onCheckIn={handleCheckIn} onCheckOut={handleCheckOut}/>

    </Box>
  );
};

export default Dashboard;
