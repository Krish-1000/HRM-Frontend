import React, { useState, useEffect } from 'react';
import { Typography, Box, useTheme } from '@mui/material';
// import { tokens } from '../theme';
import './Header.css';
import moment from 'moment-timezone';
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

interface HeaderProps {
  checkInTime: moment.Moment | null;
  checkOutTime: moment.Moment | null;
  onCheckIn: () => void;
  onCheckOut: () => void;
  // onLogTime: () => void;
}

const Header: React.FC<HeaderProps> = ({ checkInTime,checkOutTime, onCheckIn, onCheckOut }) => {
  const [time, setTime] = useState('00:00:00 Hrs');
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  moment.tz.setDefault('Asia/Kolkata');//IST
  const [currentTime, setCurrentTime] = useState(moment());

  
  useEffect(() => {
    // Update current time every second
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const handleCheckIn = () => {
  //   setCheckInTime(moment());
  // };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  return (
  <div className="header">

<button className="check-in-button" onClick={checkInTime ? onCheckOut : onCheckIn}>
        {checkInTime ? (checkOutTime ? "Checked Out: " : "Check Out: ") : "Check-In"} 
        <span>{checkInTime ? checkInTime.format('hh:mm:ss a') : ''}</span>
        {/* <span>{checkOutTime ? checkOutTime.format('hh:mm:ss a') : ''}</span> */}
      </button>

       <div className="right-buttons">
       <button className="apply-leave-btn">Apply Leave</button> 
        <button className="log-time-btn">Log Time</button> 
      <span onClick={handleRefresh} className="refresh-button">
      <RefreshOutlinedIcon />
        </span>
        </div>
        
        </div>    
  );
};

export default Header;


