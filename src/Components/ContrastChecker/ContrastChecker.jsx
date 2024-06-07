import { useEffect, useState } from "react";

export default function ContrastChecker({ color }) {
  const [contrastResult, setContrastResult] = useState(null);

  useEffect(() => {
    const fetchContrastResult = async () => {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          }
        );
        const data = await response.json();
        setContrastResult(data.overall);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchContrastResult();
  }, [color.hex, color.contrastText]);

  const overallScore = () => {
    return contrastResult === "Yup"
      ? { color: "green" }
      : contrastResult === "Nope"
      ? { color: "red" }
      : contrastResult === "Kinda"
      ? { color: "orange" }
      : {};
  };

  return <p style={overallScore()}>Overall Contrast Score: {contrastResult}</p>;
}
