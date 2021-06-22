const axios = require('axios');

const xxx = axios.get("http://150.95.26.149:3000/home")
      .then((res) => res)
      .then((json) => console.log(json));
console.log(xxx.data);