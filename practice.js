/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = findRecipe(pieType, recipes);
  numOfPies(recipe, pieType, pieQuantity);
  console.log(`Cost per pie: ${costOfPie(recipe)}`);
  totalCost(recipe, pieQuantity);
  console.log(`Sold ${pieQuantity} pies for $${revenue(recipe, pieQuantity, profitMargin).toFixed(2)}!`);
};

const findRecipe = function(pieType, recipes) {
  return recipes[pieType];
};

const numOfPies = (recipe, pieType, pieQuantity) => {
  for (let i = 0; i < pieQuantity; i++) {
    console.log(printIngredients(recipe, pieType));
    console.log(nthPie(i));
  }
};

const printIngredients = (recipe, pieType) => {
  let combiningMsg = `Combining ingredients for ${pieType}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    return combiningMsg;
};

const nthPie = (i) => {
  return `Baked pie ${i + 1}!`;
};

const costOfPie = (recipe) => {
  return recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
};

const totalCost = (recipe, pieQuantity) => {
  return costOfPie(recipe) * pieQuantity;
};

const revenue = (recipe, pieQuantity, profitMargin) => {
  return totalCost(recipe, pieQuantity) * (profitMargin || 1.2);
};

// function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
//   // Find the recipe for the pieType specified
//   const recipe = findRecipe(pieType, recipes);
//   // Bake the number of pies specified by the pieQuantity
//   numOfPies(recipe, pieType, pieQuantity);
//   // Print the cost of each pie based on the cost of each ingredient
//   console.log(`Cost per pie: ${costOfPie(recipe)}`);
//   // Calculate the total cost of all the pies
//   totalCost(recipe, pieQuantity);
//   // Print the total revenue calculated using the given profitMargin
//   console.log(`Sold ${pieQuantity} pies for $${revenue(recipe, pieQuantity, profitMargin).toFixed(2)}!`);
// };

// const findRecipe = function(pieType, recipes) {
//   return recipes[pieType];
// };

// const numOfPies = (recipe, pieType, pieQuantity) => {
//   for (let i = 0; i < pieQuantity; i++) {
//     // Print the ingredients for each ingredient in the recipe
//     console.log(printIngredients(recipe, pieType));
//     // Print the nth pie that was baked
//     console.log(nthPie(i));
//   }
// };

// const printIngredients = (recipe, pieType) => {
//   let combiningMsg = `Combining ingredients for ${pieType}: `
//     combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
//     return combiningMsg;
// };

// const nthPie = (i) => {
//   return `Baked pie ${i + 1}!`;
// };

// const costOfPie = (recipe) => {
//   return recipe.reduce((prev, current) => {
//     return prev + current.cost;
//   }, recipe[0].cost);
// };

// const totalCost = (recipe, pieQuantity) => {
//   return costOfPie(recipe) * pieQuantity;
// };

// const revenue = (recipe, pieQuantity, profitMargin) => {
//   return totalCost(recipe, pieQuantity) * (profitMargin || 1.2);
// };

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
