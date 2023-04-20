import React, { useState } from 'react';

const BookingForm = ({ blockedDates }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to check if a specific time is blocked for a specific date
  const isTimeBlocked = (date, time) => {
    const blockedDate = blockedDates.find((blockedDate) => blockedDate.date === date);
    if (blockedDate && blockedDate.times.includes(time)) {
      return true; // Time is blocked
    }
    return false; // Time is not blocked
  };

  // Function to generate time options
  const generateTimeOptions = (date) => {
    const blockedDate = blockedDates.find((blockedDate) => blockedDate.date === date);
    const allowedTimes = blockedDate ? blockedDate.times : [];
    const timeOptions = ['09:00', '10:00', '11:00']; // Add more time options as needed

    return timeOptions.map((time) => (
      <option key={time} value={time} disabled={isTimeBlocked(selectedDate, time)}>
        {time}
      </option>
    ));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // ...
    setIsSubmitting(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />
      </label>
      <label>
        Start Time:
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          <option value="">-- Select Time --</option>
          {selectedDate && generateTimeOptions(selectedDate)}
        </select>
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default BookingForm;
