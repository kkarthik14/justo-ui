import React, { useState } from "react";

function OneTimeLink() {
  const [username, setUsername] = useState("");
  const [link, setLink] = useState("");
  const [token, setToken] = useState("");

  const generateLink = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/one-time-link`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    setLink(data.link);
  };

  const verifyLink = async () => {
    const response = await fetch(`${link}`, {
      method: "GET",
    });
    const data = await response.json();
    if (data.token) {
      setToken(data.token);
      sessionStorage.setItem("token", data.token);
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h2>One-Time Link</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <button onClick={generateLink}>Generate Link</button>
      {link && <p style={{width:'200px'}} >{link && `Link Generated: ${link}`}</p>}
      <button onClick={verifyLink} disabled={!link}>Verify Link</button>
      {token && <p>Token: {token && 'Token Verified successfully, you can check the time now...'}</p>}
    </div>
  );
}

export default OneTimeLink;
