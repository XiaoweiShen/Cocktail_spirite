
//let  dest ={};

const fs = require("fs");
const request = require("request");

const {ingredients_array,ingredientsIdObj} = require("./objects"); 


let seedData = "";
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=`;
const filePath = "./seed_ingredients.json";

function doubleQuoteSingle(string){
  if(string) return string.replaceAll(`"`,`'`);
  return string;
}


async function fetchDataForLetter(name) {
  const urlName = url+`${encodeURIComponent(name)}`;
  return new Promise(function (resolve, reject) {
    request(urlName, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const data = JSON.parse(body).ingredients[0];
        if (data) {
          console.log("start......>",data.idIngredient,data.strIngredient,
          ingredientsIdObj[data.strIngredient]==data.idIngredient);
          seedData += `{'id': ${data.idIngredient},\n 'name':'${data.strIngredient}',\n 'image':'www.thecocktaildb.com/images/ingredients/${data.strIngredient}.png',\n 'image_s':'www.thecocktaildb.com/images/ingredients/${data.strIngredient}-Small.png',\n 'image_m':'www.thecocktaildb.com/images/ingredients/${data.strIngredient}-Medium.png',\n 'description': "${doubleQuoteSingle(data.strDescription)}"};\n`
           
        } else {
          console.error(`No data found for letter "${name}"`);
        }
        resolve();
      } else {
        console.error(`Failed to fetch data for letter "${name}":`, error);
        reject();
      }
    });
  });
}


async function main() {
  
  for (const name of Object.keys(ingredientsIdObj)) {
    await fetchDataForLetter(name);
  }
  
  fs.writeFile(filePath, seedData, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("The file was saved!");
    }
  });

}
 main();








