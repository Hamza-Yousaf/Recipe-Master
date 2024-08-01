const searchBox = document.getElementById('search-input')
const submitButton = document.getElementById('search-submit')
const resultsContainerElement = document.getElementById('results-container')

submitButton.addEventListener('click', getInput)

function getInput() {
    searchBoxValue = searchBox.value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchBoxValue}`)
        .then(res => res.json())
        .then(data => {
            resultsContainerElement.innerHTML = ``
            console.log(data)
            data.meals.forEach((meal, i) => displayMeal(data, i))
         })
         .catch(error => {
            resultsContainerElement.innerHTML = 
            `
            <h1 class="errorMessage">Sorry! we dont have that ingredient...</h1>
            `
         })
}

function displayMeal(data, i) {
    const resultItem = document.createElement('div')
    resultItem.innerHTML = 
    `
    <img src="${data.meals[i].strMealThumb}" alt="">
    <p>${data.meals[i].strMeal}</p>
    `

    resultItem.classList.add('result-item')
    resultsContainerElement.appendChild(resultItem)
}