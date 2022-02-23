//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { Country, conn } = require("./src/db.js");
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    fillDB();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});

function fillDB() {
  axios.get("https://restcountries.com/v3/all").then((response) => {
    response.data
      .map((country) => {
        return {
          ID: country.cca3,
          name: country.name.common,
          flag: country.flags[1],
          continent: country.continents[0],
          capital: country.capital ? country.capital[0] : "no tiene capital",
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        };
      })
      .forEach((element) => {
        Country.findOrCreate({
          where: {
            ID: element.ID,
          },
          defaults: {
            name: element.name,
            flag: element.flag,
            continent: element.continent,
            capital: element.capital,
            subregion: element.subregion,
            area: element.area,
            population: element.population,
          },
        });
      });
  });
}
