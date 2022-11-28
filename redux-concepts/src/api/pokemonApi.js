import axios from 'axios';


export const pokemonApi = axios.create({ //Axios.create permite crear una configuracion estandar para no llamar el codigo una y otra vez. 
    baseURL: 'https://pokeapi.co/api/v2' // Le pasamos la base Url para crear la variable que contiene el URL. 
});