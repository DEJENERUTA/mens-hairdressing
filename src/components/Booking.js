import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    hairdresser: "",
    phone: "",
  });

  const [useExternalBooking, setUseExternalBooking] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const hairdresser = params.get("hairdresser");
    if (hairdresser) {
      setFormData((prevState) => ({
        ...prevState,
        hairdresser,
      }));
    }
  }, [location]);

  const hairdressers = ["Awet Ab", "Tomas", "Abriham"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isWithinOpeningHours = (date, time) => {
    const day = new Date(date).getDay();
    const [hour, minute] = time.split(":").map(Number);

    const timeInMinutes = hour * 60 + minute;

    switch (day) {
      case 0: // Sunday
        return false;
      case 1: // Monday
        return timeInMinutes >= 660 && timeInMinutes <= 1110; // 11:00 - 18:30
      case 2: // Tuesday
        return timeInMinutes >= 690 && timeInMinutes <= 1110; // 11:30 - 18:30
      case 3: // Wednesday
      case 4: // Thursday
      case 5: // Friday
      case 6: // Saturday
        return timeInMinutes >= 690 && timeInMinutes <= 1110; // 11:30 - 18:30
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { date, time } = formData;
    if (!isWithinOpeningHours(date, time)) {
      toast.error("Selected time is outside of opening hours.");
      return;
    }

    toast.success("Booking confirmed!"); // Or handle the form submission logic
  };

  return (
    <div className="booking-container">
      <h1>Book an Appointment</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Service:
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="haircut">Klip</option>
            <option value="shave">Klip og skæge</option>
            <option value="beard-trim">Line og skæg</option>
            <option value="coloring">Sort farve</option>
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Hairdresser:
          <select
            name="hairdresser"
            value={formData.hairdresser}
            onChange={handleChange}
            required
          >
            <option value="">Select a hairdresser</option>
            {hairdressers.map((hd) => (
              <option key={hd} value={hd}>
                {hd}
              </option>
            ))}
          </select>
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <div className="booking-actions">
          <button type="submit">Confirm Booking</button>
          <a
            href="https://aafrobarber7365.setmore.com/awetabraha"
            target="_blank"
            rel="noopener noreferrer"
            className="external-booking-link"
          >
            Book with Setmore App
          </a>
        </div>
      </form>
    </div>
  );
};

export default Booking;
