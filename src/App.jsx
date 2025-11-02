import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const API_URL = "http://localhost:3000/api/feedback"; // change after deploy

  useEffect(() => {
    axios.get(API_URL).then((res) => setFeedbacks(res.data));
  }, []);

  const addFeedback = async (feedback) => {
    const res = await axios.post(API_URL, feedback);
    setFeedbacks([res.data, ...feedbacks]);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Feedback Collector</h1>
      <FeedbackForm onAdd={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;
