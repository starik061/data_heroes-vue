import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

export async function getCharacters() {
  const response = await axios.get('character')

  console.log(response)
  return response.data
}
