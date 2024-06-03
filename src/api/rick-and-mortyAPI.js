import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

export async function getCharacters() {
  const response = await axios.get('character/')

  console.log(response)
  return response.data
}

export async function getFilteredCharacters({ name, status }) {
  const response = await axios.get(`character/?name=${name.value}&status=${status.value}`)

  console.log(response)
  return response.data
}
