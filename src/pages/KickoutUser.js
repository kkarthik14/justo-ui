import { useState } from "react";

const KickoutUser = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleKickout = async () => {
    setMessage(""); 

    if (!username) {
      setMessage("Please enter a username.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/kickout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("User successfully kicked out.");
        sessionStorage.removeItem("token");
      } else {
        setMessage(data.message || "Failed to kick out user.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Kickout User (Admin)</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleKickout}>Kickout User</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default KickoutUser;
