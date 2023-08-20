import "./App.css";

import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td> <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return <h3>No feedback given</h3>;
  }
  return (
    <div>
      <h1>Feed Statistics</h1>
      <table>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />

        <tr>
          <td>All feedback: </td>
          <td>{good + neutral + bad}</td>
        </tr>
        <tr>
          <td>Average: </td>
          <td>{(good - bad) / (good + neutral + bad)}</td>
        </tr>
        <tr>
          <td>Positive Feedback: </td>
          <td>{good / (good + neutral + bad)}</td>
        </tr>

        <h3> </h3>
        <h3> Positive Feedback: </h3>
      </table>
    </div>
  );
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
