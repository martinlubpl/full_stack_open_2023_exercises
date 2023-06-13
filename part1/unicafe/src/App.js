import { useState } from 'react'

const Button = ({handle, text}) => <button onClick={handle}> {text} </button>

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
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neitral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App