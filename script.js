// Function to add selected items to the cart
function addToCart() {
    const componentType = document.getElementById('componentType').value;
    const quantity = document.getElementById('quantity').value;
  
    // Create a new list item for the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${quantity} ${componentType}(s) added to cart`;
  
    // Append the new item to the cart
    document.getElementById('cartItems').appendChild(listItem);
  }
  