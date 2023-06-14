const Course = ({course}) => {
  return (
    <>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </>
  )
}



const Content = ({parts}) => {
  // console.log(parts)
  return (
    parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}/>)
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>{name} {exercises}</div>
  )
}



const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Total = ({parts}) => {
  return (
    <b>total of {parts.reduce((sum,current) => sum + current.exercises, 0)} exercises</b>
  )
}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: '4th part',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App