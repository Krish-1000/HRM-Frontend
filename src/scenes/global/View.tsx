import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import {
  Box,
  Typography,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const Calendar = () => {
  const theme = useTheme();
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  const [eventTitle, setEventTitle] = useState("");

  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEventTitle("");
  };

  const handleAddEvent = () => {
    if (eventTitle && selectedDate) {
      const calendarApi = selectedDate.view.calendar;
      try {
        calendarApi.addEvent({
          id: `${selectedDate.startStr}-${eventTitle}`,
          title: eventTitle,
          start: selectedDate.startStr,
          end: selectedDate.endStr,
          allDay: selectedDate.allDay,
        });
        handleDialogClose();
      } catch (error) {
        console.error("Error adding event:", error);
        // Optionally, show an error message to the user
      }
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          {/* Event list code here */}
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            height="75vh"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>

      {/* Dialog for adding events */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="eventTitle"
            label="Event Title"
            type="text"
            fullWidth
            variant="standard"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddEvent}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;

// import { useState } from "react";
// import FullCalendar, { formatDate } from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";

// const Calendar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [currentEvents, setCurrentEvents] = useState([]);

//   const handleDateClick = (selected) => {
//     const title = prompt("Please enter a new title for your event");
//     const calendarApi = selected.view.calendar;
//     calendarApi.unselect();

//     if (title) {
//       calendarApi.addEvent({
//         id: `${selected.dateStr}-${title}`,
//         title,
//         start: selected.startStr,
//         end: selected.endStr,
//         allDay: selected.allDay,
//       });
//     }
//   };

//   const handleEventClick = (selected) => {
//     if (
//       window.confirm(
//         `Are you sure you want to delete the event '${selected.event.title}'`
//       )
//     ) {
//       selected.event.remove();
//     }
//   };

//   return (
//     <Box m="20px">
//       <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

//       <Box display="flex" justifyContent="space-between">
//         {/* CALENDAR SIDEBAR */}
//         <Box
//           flex="1 1 20%"
//           backgroundColor={colors.primary[400]}
//           p="15px"
//           borderRadius="4px"
//         >
//           <Typography variant="h5">Events</Typography>
//           <List>
//             {currentEvents.map((event) => (
//               <ListItem
//                 key={event.id}
//                 sx={{
//                   backgroundColor: colors.greenAccent[500],
//                   margin: "10px 0",
//                   borderRadius: "2px",
//                 }}
//               >
//                 <ListItemText
//                   primary={event.title}
//                   secondary={
//                     <Typography>
//                       {formatDate(event.start, {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         {/* CALENDAR */}
//         <Box flex="1 1 100%" ml="15px">
//           <FullCalendar
//             height="75vh"
//             plugins={[
//               dayGridPlugin,
//               timeGridPlugin,
//               interactionPlugin,
//               listPlugin,
//             ]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
//             }}
//             initialView="dayGridMonth"
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             select={handleDateClick}
//             eventClick={handleEventClick}
//             eventsSet={(events) => setCurrentEvents(events)}
//             initialEvents={[
//               {
//                 id: "12315",
//                 title: "All-day event",
//                 date: "2022-09-14",
//               },
//               {
//                 id: "5123",
//                 title: "Timed event",
//                 date: "2022-09-28",
//               },
//             ]}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Calendar;
