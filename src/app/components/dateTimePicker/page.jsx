import { useState } from "react";

export default function DateTimePicker({placeholder}) {
  const [dateTime, setDateTime] = useState("");

  const handleChange = (e) => {
    setDateTime(e.target.value);
  };

  return (
    <>
      <label htmlFor="datetime" className="label" style={{color:"#808080",fontSize:'0.9rem',fontWeight:'400'}}>
        {placeholder}
      </label>
      <input
        type="datetime-local"
        id="datetime"
        name="datetime"
        value={dateTime}
        onChange={handleChange}
        className="inputDateTime"
      />

      <style jsx>{`
        .label {
          display: block;
          margin-bottom: 8px;
          font-weight: 400;
          font-size: 1.1rem;
        }
        .inputDateTime {
          padding: 8px 12px;
          font-size: 0.9rem;
          border: 1.5px solid #333;
          border-radius: 6px;
          transition: border-color 0.2s ease;
          width: 300px;
        }
        .inputDateTime:focus {
          outline: none;
          border-color: #03bd64;
          box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
        }
      `}</style>
    </>
  );
}
