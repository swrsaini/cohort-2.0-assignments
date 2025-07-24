/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0) return [];

  let result = {};

  // Accumulate total spent per category
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];

    if (result[category]) {
      result[category] += price;
    } else {
      result[category] = price;
    }
  }

  // Convert to desired output format
  const finalResult = [];
  for (let category in result) {
    finalResult.push({ category: category, totalSpent: result[category] });
  }

  return finalResult;
}

module.exports = calculateTotalSpentByCategory;

