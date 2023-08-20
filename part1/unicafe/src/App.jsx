import "./App.css";

import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h1>Give your feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)} text={`good ${good}`} />
        <Button
          onClick={() => setNeutral(neutral + 1)}
          text={`neutral ${neutral}`}
        />
        <Button onClick={() => setBad(bad + 1)} text={`bad ${bad}`} />
      </div>
      <div>
        <h3>Feed Statistics</h3>
        <h5>Good: {good}</h5>
        <h5>Neutral: {neutral}</h5>
        <h5>Bad: {bad}</h5>
        <h3> All feedback: {good + neutral + bad}</h3>
        <h3> Average {(good - bad) / (good + neutral + bad)}</h3>
        <h3> Positive Feedback: {good / (good + neutral + bad)}</h3>
      </div>
    </>
  );
}

export default App;
