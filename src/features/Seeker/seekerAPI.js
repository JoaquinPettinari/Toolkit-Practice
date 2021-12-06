import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY

export async function fetchGetNews (query = "") {    
    return await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
}