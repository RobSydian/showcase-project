import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.rawg.io/api/games?key=c15bee4f9ff443d0846785252b353b7e",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "application/json",
    // key: "c15bee4f9ff443d0846785252b353b7e",
    // "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  },
};

export const getAllGames = async () => {
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data.results);
  //     return response.data.results.json();
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  return await axios.get(
    "https://api.rawg.io/api/games?key=c15bee4f9ff443d0846785252b353b7e"
  );
};

// export default class GamesApi {
//   constructor() {
//     this.api_token = null;
//     this.client = null;
//     this.api_url = process.env.REACT_APP_BASE_URL_API_GAMES;
//     this.options = {
//       method: "GET",
//       url: "https://rawg-video-games-database.p.rapidapi.com/games",
//       headers: {
//         "X-RapidAPI-Key": "50ebe6e989mshaa959b0920d6e7fp1bd70ajsndc7b64e288b9",
//         "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
//         // Authorization: `${process.env.REACT_APP_RAPID_API_KEY}`,
//       },
//     };
//   }

//   //   init = () => {
//   //     this.api_token = process.env.REACT_APP_RAPID_API_KEY;
//   //     let headers = {
//   //       Accept: "application/json",
//   //       Host: process.env.REACT_APP_RAPID_API_HOST,
//   //     };
//   //     if (this.api_token) {
//   //       headers.Authorization = `Bearer ${this.api_token}`;
//   //     }

//   //     this.client = axios.create({
//   //       baseURL: this.api_url,
//   //       timeout: 31000,
//   //       headers: headers,
//   //     });
//   //     return this.client;
//   //   };

//   getAllGames = () => {
//     axios
//       .request(this.options)
//       .then(function (response) {
//         response.data.json();
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//     // return this.init().get("/games");
//   };
// }
