import React, { useState, useEffect } from 'react';
import './Card1.css';
import moment from 'moment-timezone';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';

// import './AttendanceCard.css';
// import img from "./image/sample1.jpg";
interface DashboardCardsProps {
  checkInTime: moment.Moment | null;
  checkOutTime: moment.Moment | null;
  onCheckIn: () => void;
  onCheckOut: () => void;
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ checkInTime, onCheckIn, checkOutTime, onCheckOut }) => {
  moment.tz.setDefault('Asia/Kolkata'); // IST
  const [currentTime, setCurrentTime] = useState(moment());
  const [notes, setNotes] = useState('');
  const [elapsedTime , setElapsedTime] = useState('00:00:00 Hrs');

  useEffect(() => {
   if(!checkOutTime){
     const interval = setInterval(() => {
      setCurrentTime(moment());
      if(checkInTime){
        const duration = moment.duration(moment().diff(checkInTime));
        setElapsedTime(`${Math.floor(duration.asHours())}:${duration.minutes()}:${duration.seconds()} Hrs`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }
  }, [checkInTime, checkOutTime]);


  useEffect(() => {
    if(checkInTime && checkOutTime){
      const duration = moment.duration(checkOutTime.diff(checkInTime));
      setElapsedTime(`${Math.floor(duration.asHours())}:${duration.minutes()}:${duration.seconds()} Hrs`);
    }
  },[checkOutTime]);

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(e.target.value);
  };

  // const getElapsedTime = () => {
  //   if (checkInTime) {
  //     const duration = moment.duration(currentTime.diff(checkInTime));
  //     return `${Math.floor(duration.asHours())}:${duration.minutes()}:${duration.seconds()} Hrs`;
  //   }
  //   return '00:00:00 Hrs';
  // };

  const getEarlyOrLateTime = () => {
    if (checkInTime) {
      const checkInDeadline = moment().startOf('day').add(11, 'hours'); // 10 AM
      const durationEarly = moment.duration(checkInDeadline.diff(checkInTime));
      const durationLate = moment.duration(checkInTime.diff(checkInDeadline));

      if (checkInTime.isBefore(checkInDeadline)) {
        return `Early by ${Math.floor(durationEarly.asHours())} Hrs ${durationEarly.minutes()} mins`;
      } else {
        return `Late by ${Math.floor(durationLate.asHours())} Hrs ${durationLate.minutes()} mins`;
      }
    }
    return null;
  };
  return (
    <div className="dashboard-cards">
      <div className="card">
        <h2>New Hires</h2>
        <hr />
        <div>
        <input
        type="text"
        placeholder="Add Notes"
        value={notes}
        onChange={handleNotesChange}
      />
        {/* <img src={"./sample1.jpg"} /> */}
          {/* <img src="src/scenes/dashboard/NewHires/image/sample1.jpg">"My Image"</img> */}
          <p>No new joiners in past 15 days</p>
        </div>
      </div>
      <div className="card">
        <h2>Birthday</h2>
        <hr />
        <div>
          {/* <img src="path-to-birthday-icon.png" alt="Birthday Icon" className="card-icon" /> */}
          <p>No birthdays today</p>
        </div>
      </div>


      <div className="card">
        <h2>Attendance</h2>
        <hr />
        <div>
        
      <button onClick={checkInTime ? onCheckOut : onCheckIn} className="check-in-button">
            <AlarmAddIcon/>
            {checkInTime ? (checkOutTime ? ("Checked Out: " + (checkOutTime.format('hh:mm:ss a'))) : ("Check out: "+checkInTime.format('hh:mm:ss a'))) : "Check In"}
            {/* <span>{checkInTime ? checkInTime.format('hh:mm:ss a') : ''}</span> */}
            {/* <span>{checkOutTime ? checkOutTime.format('hh:mm:ss a') : ''}</span> */}
          </button>
          <div className="time-display">
            <h1>{elapsedTime}</h1>
            <p>{currentTime.format('DD MMM YYYY')}</p>
            {checkInTime && (
              <p>{getEarlyOrLateTime()}</p>
            )}
      </div>
          {/* <img src="path-to-attendance-icon.png" alt="Attendance Icon" className="card-icon" />
          <p>Attendance details here</p> */}
        </div>
      </div>


      <div className="card">
        <h2>Manage</h2>
        <hr />
        <div>
          {/* <img src="path-to-attendance-icon.png" alt="Attendance Icon" className="card-icon" /> */}
          <p>Manager details here</p>
        </div>
      </div>
      <div className="card">
        <h2>Analyze</h2>
        <hr />
        <div>
          {/* <img src="path-to-attendance-icon.png" alt="Attendance Icon" className="card-icon" /> */}
          <p>Analytical details</p>
        </div>
      </div>
      <div className="card">
        <h2>Employee</h2>
        <hr />
        <div>
          {/* <img src="path-to-attendance-icon.png" alt="Attendance Icon" className="card-icon" /> */}
          <p>Employee details</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;




// import React, { useState, useEffect } from 'react';
// import moment from 'moment-timezone';
// import './AttendanceCard.css';

// const AttendanceCard: React.FC = () => {
  // moment.tz.setDefault('Asia/Kolkata');//IST
  // const [currentTime, setCurrentTime] = useState(moment());
  // const [checkInTime, setCheckInTime] = useState<moment.Moment | null>(null);
  // const [notes, setNotes] = useState('');

  // useEffect(() => {
  //   // Update current time every second
  //   const interval = setInterval(() => {
  //     setCurrentTime(moment());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const handleCheckIn = () => {
  //   setCheckInTime(moment());
  // };

  // const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNotes(e.target.value);
  // };

  // const getElapsedTime = () => {
  //   if (checkInTime) {
  //     const duration = moment.duration(currentTime.diff(checkInTime));
  //     return ${Math.floor(duration.asHours())}:${duration.minutes()}:${duration.seconds()} Hrs;
  //   }
  //   return '00:00:00 Hrs';
  // };

  // const getEarlyOrLateTime = () => {
  //   if (checkInTime) {
  //     const checkInDeadline = moment().startOf('day').add(11, 'hours'); // 10 AM
  //     const durationEarly = moment.duration(checkInDeadline.diff(checkInTime));
  //     const durationLate = moment.duration(checkInTime.diff(checkInDeadline));

  //     if (checkInTime.isBefore(checkInDeadline)) {
  //       return Early by ${Math.floor(durationEarly.asHours())} Hrs ${durationEarly.minutes()} mins;
  //     } else {
  //       return Late by ${Math.floor(durationLate.asHours())} Hrs ${durationLate.minutes()} mins;
  //     }
  //   }
  //   return null;
  // };

//   return (
//     <div className="attendance-card">
//       <h2>Attendance</h2>
//       <input
//         type="text"
//         placeholder="Add Notes"
//         value={notes}
//         onChange={handleNotesChange}
//       />
//       <button onClick={handleCheckIn} className="check-in-button">
//         Check-in
//         <span>{checkInTime ? checkInTime.format('hh:mm:ss a') : ''}</span>
//       </button>
//       <div className="time-display">
//         <h1>{getElapsedTime()}</h1>
//         <p>{currentTime.format('DD MMM YYYY')}</p>
//         {checkInTime && (
//           <p>{getEarlyOrLateTime()}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendanceCard