
// const loadMeal = () =>{
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
//     fetch(url)
//     .then(response => response.json())
//     .then(data => loadMealsIntoDiv(data.meals[0]));
// }



function searchFood(){
    const searchText = document.getElementById('search-text');
    const searchTextString = searchText.value;
    console.log(searchTextString);
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?f='${searchTextString}'`
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTextString}`
    // console.log(url);

    loadMeal(url);
}

const loadMeal = url => {
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
    fetch(url)
    .then(res => res.json())
    .then(data => loadMealsIntoDiv(data.meals))
    // .then(data => console.log(data.meals))
    // .then(data => loadMealsIntoDiv(data.meals[0]))
}



const loadMealsIntoDiv = mealAll =>{
    const getContainer = document.getElementById('food-container');
    getContainer.innerHTML = '';

    // ================DESCRIPTION HIDE INITIALLY
    const getContainerDiv = document.getElementById('detail-container');
    getContainerDiv.innerHTML = '';


    // console.log(mealAll);
    mealAll.forEach(meal =>{
        const makeCard = document.createElement('div');
        makeCard.classList.add('col');
        makeCard.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
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


function loadMealDetail(mealId){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => viewDetailDescription(data.meals[0]))
}

function viewDetailDescription(getMeal){

    console.log(getMeal);
    const getContainerDiv = document.getElementById('detail-container');
    console.log(getContainerDiv);

    getContainerDiv.innerHTML = '';

    const makeCardDetail = document.createElement('div');
    makeCardDetail.classList.add('card');
    makeCardDetail.classList.add('mb-3');
    makeCardDetail.classList.add('border');
    makeCardDetail.classList.add('border-0');
    makeCardDetail.innerHTML = `
        <div class="row g-0">
            <h3 class="text-danger text-center text-decoration-underline pt-5 pb-3 bg-dark">Cooking Instruction</h3>


            <div class="col-md-4">
                <img src="${getMeal.strMealThumb}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${getMeal.strMeal}</h5>
                    <p class="card-text">${getMeal.strInstructions}</p>
                </div>
            </div>
        </div>
    `;
    getContainerDiv.appendChild(makeCardDetail);

}

loadMeal('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')