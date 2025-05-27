import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
        onClick={onClose} 
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            minWidth: "300px",
            maxWidth: "90%",
            position: "relative",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"

          }}
          onClick={(e) => e.stopPropagation()} 
        >
          {children}
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}
