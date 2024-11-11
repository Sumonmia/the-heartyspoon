// console.log("hello !!!!!! there");
// Potato menu show
const loadPotato = () =>{
    let searchFood = document.getElementById("search-potato").value;
    console.log('Search food is: ', searchFood);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPotatoMenus(data.meals))
        .catch(error => console.log('Error is: ', error));
}
loadPotato();

const showPotatoMenus = (meals) =>{
    console.log('Meals are: ', meals);
    let container = document.getElementById("food-container");
    container.innerHTML = "";
    meals.forEach(food => {
        foodCard = document.createElement('div');
        foodCard.classList = 'card card-compact bg-base-100  shadow-xl';
        foodCard.innerHTML = `
                    <figure>
                      <img
                        src="${food.strMealThumb}"
                        alt="Image of ${food.strMealThumb}"/>
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${food.strMeal}</h2>
                      <p title="${food.strInstructions}">${food.strInstructions.slice(0,100)}...</p>
                      <div class="card-actions justify-end">
                        <button class="btn bg-orange-300 border-0 hover:bg-transparent hover:text-orange-500 hover:border-2">Show Details</button>
                      </div>
                    </div>
        `;
    container.appendChild(foodCard);
    });
}

// Soup menu show
const loadSoup = () =>{
    let searchFood = document.getElementById("search-soup").value;
    console.log('Search food is: ', searchFood);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => showSoupMenus(data.meals))
        .catch(error => console.log('Error is: ', error));
}
// loadSoup();

const showSoupMenus = (meals) =>{
    console.log('Meals are: ', meals);
    let container = document.getElementById("food-container");
    container.innerHTML = "";
    meals.forEach(food => {
        foodCard = document.createElement('div');
        foodCard.classList = 'card card-compact bg-base-100  shadow-xl';
        foodCard.innerHTML = `
                    <figure>
                      <img
                        src="${food.strMealThumb}"
                        alt="Image of ${food.strMealThumb}"/>
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${food.strMeal}</h2>
                      <p title="${food.strInstructions}">${food.strInstructions.slice(0,100)}...</p>
                      <div class="card-actions justify-end">
                        <button class="btn bg-orange-300 border-0 hover:bg-transparent hover:text-orange-500 hover:border-2">Show Details</button>
                      </div>
                    </div>
        `;
    container.appendChild(foodCard);
    });
}

// Chicken menu show
const loadChicken = () =>{
    let searchFood = document.getElementById("search-chicken").value;
    console.log('Search food is: ', searchFood);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => showChickenMenus(data.meals))
        .catch(error => console.log('Error is: ', error));
}
// loadChicken();

const showChickenMenus = (meals) =>{
    console.log('Meals are: ', meals);
    let container = document.getElementById("food-container");
    container.innerHTML = "";
    meals.forEach(food => {
        foodCard = document.createElement('div');
        foodCard.classList = 'card card-compact bg-base-100  shadow-xl';
        foodCard.innerHTML = `
                    <figure>
                      <img
                        src="${food.strMealThumb}"
                        alt="Image of ${food.strMealThumb}"/>
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${food.strMeal}</h2>
                      <p title="${food.strInstructions}">${food.strInstructions.slice(0,100)}...</p>
                      <div class="card-actions justify-end">
                        <button class="btn bg-orange-300 border-0 hover:bg-transparent hover:text-orange-500 hover:border-2">Show Details</button>
                      </div>
                    </div>
        `;
    container.appendChild(foodCard);
    });
}

// Beef menu show
const loadBeef = () =>{
    let searchFood = document.getElementById("search-beef").value;
    console.log('Search food is: ', searchFood);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => showBeefMenus(data.meals))
        .catch(error => console.log('Error is: ', error));
}
// loadBeef();

const showBeefMenus = (meals) =>{
    console.log('Meals are: ', meals);
    let container = document.getElementById("food-container");
    container.innerHTML = "";
    meals.forEach(food => {
        foodCard = document.createElement('div');
        foodCard.classList = 'card card-compact bg-base-100  shadow-xl';
        foodCard.innerHTML = `
                    <figure>
                      <img
                        src="${food.strMealThumb}"
                        alt="Image of ${food.strMealThumb}"/>
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${food.strMeal}</h2>
                      <p title="${food.strInstructions}">${food.strInstructions.slice(0,100)}...</p>
                      <div class="card-actions justify-end">
                        <button class="btn bg-orange-300 border-0 hover:bg-transparent hover:text-orange-500 hover:border-2">View Details</button>
                      </div>
                    </div>
        `;
    container.appendChild(foodCard);
    });
}