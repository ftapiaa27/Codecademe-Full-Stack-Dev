import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker.js"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} />
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        type="text" 
        placeholder="Title"
      />
      <input 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        type="date" 
        placeholder="Date"
      />
      <input 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        type="time" 
        placeholder=""
        min={getTodayString()}
      />
      <input 
        value="Add Appointment" 
        type="submit"
      />
    </form>
  );
};
