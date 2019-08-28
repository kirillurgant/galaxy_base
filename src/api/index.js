import axios from 'axios';

class Api {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  getStarships() {
    return this.axiosInstance.get('/starships');
  }

  getStarshipById(id) {
    return this.axiosInstance.get(`/starships/${id}`);
  }
}

export default new Api('https://swapi.co/api');
