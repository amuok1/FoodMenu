'use strict';

const categorySelect = document.querySelector('#category');
const itemsList = document.querySelector('#items');

// Map of categories and their items
const menu = {
  drinks: ['Water', 'Tea', 'Coffee', 'Soda'],
  entrees: ['Burger', 'Pizza', 'Salad', 'Sandwich'],
  desserts: ['Ice Cream', 'Cake', 'Pie', 'Pudding']
};

// Event listener for category select
categorySelect.addEventListener('change', () => {
  // Clear existing items
  itemsList.innerHTML = '';

  // Get selected category and its items
  const selectedCategory = categorySelect.value;
  const selectedItems = menu[selectedCategory];

  // Create option elements for each item
  for (const item of selectedItems) {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    itemsList.appendChild(option);
  }
});
