import axios from "axios";

const apiDeputados = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
   
})

export default apiDeputados

