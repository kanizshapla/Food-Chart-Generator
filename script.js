// script.js
function generateFoodChart() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const gender = document.getElementById("gender").value;

  // Food chart generation logic based on input values
  let foodChart = "";
  // Example logic: Just a placeholder, actual logic can be more complex
  if (age < 30 && gender === "male") {
    foodChart = `${name}, your food chart: Protein-rich diet with fruits and vegetables.`;
  } else if (age >= 30 && gender === "female") {
    foodChart = `${name}, your food chart: Balanced diet with whole grains and lean proteins.`;
  } else {
    foodChart = `${name}, your food chart: Consult a nutritionist for a personalized diet plan.`;
  }

  document.getElementById("foodChart").innerText = foodChart;
}
