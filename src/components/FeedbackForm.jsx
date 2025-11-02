import React, { useState } from "react";

export default function FeedbackForm({ onAdd }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    onAdd({ name, message });
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Your feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
