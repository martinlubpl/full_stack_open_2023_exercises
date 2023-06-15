const Course = ({ course }) => {
    return (
      <>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

const Header = ({ title }) => {
    return (
      <h1>{title}</h1>
    )
  }

const Content = ({ parts }) => {
    // console.log(parts)
    return (
      parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)
    )
  }

const Part = ({ name, exercises }) => {
    return (
      <div>{name} {exercises}</div>
    )
  }

const Total = ({ parts }) => {
    return (
      <b>total of {parts.reduce((sum, current) => sum + current.exercises, 0)} exercises</b>
    )
  }

  export default Course