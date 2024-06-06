import React, { useState, useEffect } from "react";
import "./CopyToClipboard.css";

export default function CopyToClipboard({ hexCode }) {
  const [copyConfirmation, setCopyConfirmation] = useState(false);

  /*const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hexCode);
      setCopyConfirmation(true);
      setTimeout(() => {
        setCopyConfirmation(false);
      }, 3000);
    } catch (error) {
      console.log("Failed to copy:", error);
    }
  };*/

  useEffect(() => {
    let timer;
    if (copyConfirmation) {
      timer = setTimeout(() => {
        setCopyConfirmation(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [copyConfirmation]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hexCode);
      setCopyConfirmation(true);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div>
      {copyConfirmation ? (
        <button className="color-card-clipboard">SUCCESFULLY COPIED!</button>
      ) : (
        <button className="color-card-clipboard" onClick={handleCopy}>
          COPY
        </button>
      )}
    </div>
  );
}
