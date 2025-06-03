'use client'


export default function FloatingLabelInput({ id, placeholder, type = "text",value,handleChange, name }) {


  return (
    <>
      <div className="floating-input">
        <input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder=" " 
          autoComplete="off"
          name={name}
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>

      <style jsx>{`
        .floating-input {
          position: relative;
          margin: 1.6rem auto 0px auto;
          width: 300px;
          placeSelf:center
        }
        input {
          width: 100%;
          padding: 12px 10px;
          font-size: 1rem;
          border: 1.5px solid #333;
          border-radius: 6px;
          background: none;
          outline: none;
        }
        input:focus {
          border-color: #03bd64;
          box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
        }
        label {
          position: absolute;
          top: 50%;
          left: 3px;
          transform: translateY(-50%);
          color: #999;
          font-size: 1rem;
          pointer-events: none;
          transition: all 0.2s ease-out;
          background-color: white;
          padding: 0 4px;
        }
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.8rem;
          color: #808080;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
