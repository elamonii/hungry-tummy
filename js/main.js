
// const loadMeal = () =>{
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
//     fetch(url)
//     .then(response => response.json())
//     .then(data => loadMealsIntoDiv(data.meals[0]));
// }


const loadMeal = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
    fetch(url)
    .then(res => res.json())
    .then(data => loadMealsIntoDiv(data.meals))
}



const loadMealsIntoDiv = mealAll =>{
    const getContainer = document.getElementById('food-container');
    getContainer.innerHTML = '';
    console.log(mealAll);
    mealAll.forEach(meal =>{
        const makeCard = document.createElement('div');
        makeCard.classList.add('col');
        makeCard.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        getContainer.appendChild(makeCard);
    })


}

loadMeal();