const fs = require("fs");
const request = require("request");

const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
const filePath = "./seed_category.sql";

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body).drinks;
    let seedData = "";
    data.forEach(function (drink, index) {
      seedData += `INSERT INTO categories (id, name) VALUES (${index + 1}, '${drink.strCategory}');\n`;
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
