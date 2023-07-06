import axios from 'axios'
// const dbUrl = 'http://localhost:3001/api/persons'
const dbUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(dbUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(dbUrl, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${dbUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const delPerson = (id) => {
  const request = axios.delete(`${dbUrl}/${id}`)
  return request.then((response) => response.data)
}

export default { getAll, create, update, delPerson }
