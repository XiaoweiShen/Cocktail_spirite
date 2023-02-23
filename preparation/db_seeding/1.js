const {ingredients_array,letters, glass_id,ingredientsIdObj} = require("./objects"); 

const fs = require("fs");
const request = require("request");

const urlTemplate = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}";
const filePath = "./seed_drink.json";
const filePath2 = "./seed_drinkingredients.json";

//let obj_test ={};
let ingredient_id = '';
function transform(input){
  let seed_ingre ='';
  for (let i = 1; i <= 15; i++) {
  const ingredient_name = input[`strIngredient${i}`] ;
    //if(!obj_test[ingredient_name]){obj_test[ingredient_name]=0}
  const measure = input[`strMeasure${i}`];
    if (ingredient_name) {
      //ingredient_id = ingredientsIdObj[encodeURIComponent(ingredient_name)];
      //console.log('---------------',ingredient_name,ingredient_id);
      seed_ingre += `{'drink_id': '${input.idDrink}',\n 'ingredient_name': '${ingredient_name}',\n 'measure': '${measure}'},\n`;
  }
}
//console.log("start------------",seed_ingre)
return seed_ingre;
}

let tags = ['Sweet','Sour','Bitter','Spicy','Fruity','Creamy','Herbaceous','Smoky','Floral','Nutty','Citric']
let tags2 = ['Spring','Autumn','Winter','Summer','Breezily','Happy','Memory','Missing','Chill down','Lonely','Party','Relax','Raining','Sunshine','Friends']

let tag = '';
let rand = 0;
let rand2 = 0;

let seedData = "";
let seedingr ="";

async function fetchDataForLetter(letter) {
  const url = urlTemplate.replace("${letter}", letter);
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const data = JSON.parse(body).drinks;
        if (data) {
          data.forEach(function (drink) {
            seedingr += transform(drink);
            rand = Math.floor(Math.random() * tags.length)
            rand2 = Math.floor(Math.random()* tags2.length)
            tag = drink.strTags||(tags[rand]+','+tags2[rand2])
            seedData += `{ 'id':'${drink.idDrink}',\n 'name': "${drink.strDrink.replaceAll(`"`,`'`)}",\n 'image': '${drink.strDrinkThumb}',\n 'tags': '${tag}',\n 'glass_id':'${glass_id[drink.strGlass]}',\n instruction': "${drink.strInstructions.replaceAll(`"`,`'`)}"},\n`;
          });
        } else {
          console.error(`No data found for letter "${letter}"`);
        }
        resolve();
      } else {
        console.error(`Failed to fetch data for letter "${letter}":`, error);
        reject();
      }
    });
  });
}

async function main() {
  for (const letter of letters) {
    await fetchDataForLetter(letter);
  }

  fs.writeFile(filePath, seedData, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("The file was saved!");
    }
  });
   
  

  fs.writeFile(filePath2, seedingr, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("The file2 was saved!");
    }
  })
  ;
  //console.log(obj_test);
}


main();
