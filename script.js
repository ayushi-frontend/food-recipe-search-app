async function searchfood() {
    try {
       let input = document.getElementById("input") 
       let result = input.value.trim()

       if (result === "") {
        alert("enter your fav food")
        return;
       }
       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${result}`);
       const data = await response.json();
       console.log(data);

       let container = document.getElementById("resultcon")
       container.innerHTML = ""; // clear old results

        if (data.meals === null) {
            container.innerHTML = "<h2>Food not found 😔</h2>";
            return;
        }
       data.meals.forEach(food => {
        let card = document.createElement("div")
        card.classList = "card"
        card.innerHTML = `
                <img src="${food.strMealThumb}" width="200px">
                <h2>${food.strMeal}</h2>
                <p><strong>Category:</strong> ${food.strCategory}</p>
                <p>${food.strInstructions.slice(0, 120)}...</p>
            `;

        container.appendChild(card)
       });
    } catch (error) {
        console.log("error",error)
    }
}
