import "./App.css";

import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];
function App() {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const onVote = () => {
    const new_vote = [...vote];
    new_vote[selected] += 1;
    setVote(new_vote);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>
        <h3>Votes, this anecdote total: {vote[selected]}</h3>
      </div>
      <div>
        <button onClick={() => onVote()}>Vote</button>
        <button onClick={() => nextAnecdote()}>Next anecdote</button>
      </div>

      <div>
        <h3>The most voted anecdote</h3>
        <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
      </div>
    </>
  );
}

export default App;
