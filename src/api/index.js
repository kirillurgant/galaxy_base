import axios from 'axios';

class Api {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
    });
  }

  getStarships({ url }) {
    const resultUrl = url || '/starships';
    return this.axiosInstance.get(resultUrl);
  }

  getStarshipById({ url, id }) {
    const resultUrl = url || `/starships/${id}`;
    return this.axiosInstance.get(resultUrl);
  }
}

export default new Api('https://swapi.co/api');
