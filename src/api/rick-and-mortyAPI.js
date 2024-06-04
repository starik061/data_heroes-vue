import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

export async function getCharacters(name = '', status = '', page = 1) {
  const response = await axios.get(`character/?name=${name}&status=${status}&page=${page}`)
  return response.data
}
