
let areaData = document.getElementById('area');
let categoryData = document.getElementById('category');
let mealNameData = document.getElementById('mealName');
let mealImage = document.getElementById('mealImage');
let instructionsData = document.getElementById('instructions');
let tagsData = document.getElementById('tags');
let ingr1Data = document.getElementById('ingr1');
let ingr2Data = document.getElementById('ingr2');
let ingr3Data = document.getElementById('ingr3');
let ingr4Data = document.getElementById('ingr4');
let ingr5Data = document.getElementById('ingr5');
let ingr6Data = document.getElementById('ingr6');
let ingr7Data = document.getElementById('ingr7');
let ingr8Data = document.getElementById('ingr8');
let ingr9Data = document.getElementById('ingr9');
let ingr10Data = document.getElementById('ingr10');
let ingr12Data = document.getElementById('ingr12');
let ingr13Data = document.getElementById('ingr13');

//! fatch  API data 
async function getMeal() {
    let meal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let mealData = await meal.json();
    return mealData;}

function displayMealData(data) {
    areaData.innerHTML = data.meals[0].strArea;
    categoryData.innerHTML = data.meals[0].strCategory;
    mealNameData.innerHTML = data.meals[0].strMeal;
    instructionsData.innerHTML = data.meals[0].strInstructions;
     let mealImageUrl = data.meals[0].strMealThumb;
    mealImage.src = mealImageUrl;
    tagsData.innerHTML = data.meals[0].strTags;
    ingr1Data.innerHTML = data.meals[0].strIngredient1;
    ingr2Data.innerHTML = data.meals[0].strIngredient2;
    ingr3Data.innerHTML = data.meals[0].strIngredient3;
    ingr4Data.innerHTML = data.meals[0].strIngredient4;
    ingr5Data.innerHTML = data.meals[0].strIngredient5;
    ingr6Data.innerHTML = data.meals[0].strIngredient6;
    ingr7Data.innerHTML = data.meals[0].strIngredient7;
    ingr8Data.innerHTML = data.meals[0].strIngredient8;
    ingr9Data.innerHTML = data.meals[0].strIngredient9;
    ingr10Data.innerHTML = data.meals[0].strIngredient10;
    ingr11Data.innerHTML = data.meals[0].strIngredient11;
    ingr12Data.innerHTML = data.meals[0].strIngredient12;
    ingr13Data.innerHTML = data.meals[0].strIngredient13;

   }

async function startApp() {
    let mealData = await getMeal();
    console.log(mealData);
   displayMealData(mealData);}

startApp();



//!sideNav 
const theLinksWidth = $('.theLinks').outerWidth(true);
$('#sideNav')
    .animate({ left: -theLinksWidth }, 0)

let isOpen = false;

$('#sideNav .openNav')
    .on('click', function () {
        $(this).parent()
            .animate({ left: isOpen ? -theLinksWidth : 0 }, 400)
        isOpen = !isOpen;
    })
//!end of sideNav 



import { Home } from "./home.module.js";

const home = new Home() 






























