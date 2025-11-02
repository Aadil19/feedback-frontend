export default function FeedbackList({ feedbacks }) {
  return (
    <div>
      <h2>All Feedback</h2>
      {feedbacks.map((fb) => (
        <div
          key={fb._id}
          style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}
        >
          <strong>{fb.name}</strong>{" "}
          <em>{new Date(fb.date).toLocaleString()}</em>
          <p>{fb.message}</p>
        </div>
      ))}
    </div>
  );
}
