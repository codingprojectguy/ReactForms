import React, { useState } from "react";

const Authenticate = ({ token, setToken }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      // Handle the response as needed
      console.log("Authentication response:", result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
};

export default Authenticate;
