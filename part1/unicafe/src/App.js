import { useState } from 'react'

const Button = ({handle, text}) => <button onClick={handle}> {text} </button>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good - bad)/all
  const positive = good*100/all

  //no votes
  if (all === 0) {
    return <><h1>statistics</h1><p>No feedback given</p></>
  }

  return (
    <>
      <h1>statistics</h1>
      <table><tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={avg}/>
      <StatisticLine text="positive" value={positive + " %"}/>
      </tbody></table>
    </>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGood = () => {
    setGood(good + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handle={handleGood} text="GOOD"/>
      <Button handle={() => setNeutral(neutral + 1)} text="NEUTRAL"/>
      <Button handle={() => setBad(bad + 1)} text="BAD"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App