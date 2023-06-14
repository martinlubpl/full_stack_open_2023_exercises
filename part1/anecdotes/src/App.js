import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState({})
  
  // Returns a random integer from 0 to 9:
  // Math.floor(Math.random() * 10);
  const selectAnecdote = () => {
    const randIndex = Math.floor(Math.random() * anecdotes.length)
    console.log(randIndex)
    setSelected(randIndex)
  }
  
  // console.log(points)

  const addVote = () => {
    const copy = {...points}
    copy[selected] = (copy[selected] || 0) + 1;
    setPoints(copy)
    console.log(points)
  }

  const getTop = () => {
    console.log("a")
    if (Object.keys(points).length === 0 && points.constructor === Object) {
      return "no votes"
    }
    const topIndex = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b)
    return <><div>{anecdotes[topIndex]}</div><div>has {points[topIndex]} votes</div></>
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected] || 0} votes</div>
      <button onClick={addVote}>vote</button>
      <button onClick={selectAnecdote}>next anecdote</button>
      <h1>Top anecdote</h1>
      <div>{getTop()}</div>
    </div>
  )
}

export default App