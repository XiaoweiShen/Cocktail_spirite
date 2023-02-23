const fs = require("fs");
const request = require("request");


const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";


const filePath = "./seed_glass.json";

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body).drinks;
    let seedData = "";
    let index = 0;
    data.forEach(function (drink) {
      index+=1;
      seedData += `{"id": ${index},\n "name":'${drink.strGlass}',\n "image": '${drink.strGlass}.png'};\n`;
    });
    fs.writeFile(filePath, seedData, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("The file was saved!");
      }
    });
  } else {
    console.error("Failed to fetch data:", error);
  }
});
