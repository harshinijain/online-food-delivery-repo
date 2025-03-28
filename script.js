let cart = [];
let totalPrice = 0;

// Initialize the cart when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all "ADD TO CART" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission
            const foodItem = this.getAttribute('value');
            const quantityInput = this.closest('.food-item').querySelector('.quantity-input');
            const quantity = parseInt(quantityInput ? quantityInput.value : 1);
            
            // Extract price from the food item value (e.g., "VADA-RS.2" -> 2)
            const priceMatch = foodItem.match(/RS\.(\d+)/);
            if (priceMatch) {
                const price = parseFloat(priceMatch[1]);
                addToCart(foodItem, price, quantity);
            }
        });
    });
    
    // Fix the IDLI button which has a different format
    const idliButton = document.querySelector('button[onclick="add-to-cart(\'IDLI\',3.50)"]');
    if (idliButton) {
        idliButton.setAttribute('onclick', ''); // Remove the invalid onclick attribute
        idliButton.addEventListener('click', function(event) {
            event.preventDefault();
            addToCart('IDLI', 3.50, 1);
        });
    }
    
    // Set up the order form
    const orderForm = document.querySelector('form[onsubmit="submitOrder(event)"]');
    if (orderForm) {
        orderForm.addEventListener('submit', submitOrder);
    }
});

function addToCart(item, price, quantity = 1) {
    if (typeof item !== 'string' || !item) {
        console.error("Invalid item name.");
        return;
    }

    const parsedPrice = parseFloat(price); // Ensure price is a number
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
        console.error("Invalid price.");
        return;
    }
    
    if (quantity <= 0) {
        console.error("Invalid quantity.");
        return;
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.item === item);
    
    if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        cart[existingItemIndex].quantity += quantity;
        cart[existingItemIndex].totalItemPrice = cart[existingItemIndex].price * cart[existingItemIndex].quantity;
    } else {
        // Add new item to cart
        const totalItemPrice = parsedPrice * quantity;
        cart.push({ 
            item, 
            price: parsedPrice, 
            quantity, 
            totalItemPrice,
            currency: item.includes('RS.') ? 'RS.' : '$'
        });
    }
    
    // Recalculate total price
    calculateTotalPrice();
    updateCart();
    
    // Show confirmation to user
    alert(`Added ${quantity} ${item} to cart!`);
}

function calculateTotalPrice() {
    // Reset total price
    totalPrice = 0;
    
    // Sum up all items
    cart.forEach(item => {
        totalPrice += item.totalItemPrice;
    });
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const finalPriceElement = document.getElementById("final-price");

    if (!cartItems) {
        console.error("Cart items element not found in the DOM.");
        return;
    }

    cartItems.innerHTML = ""; // Clear existing items
    
    // Add each item to the cart display
    cart.forEach((cartItem, index) => {
        const li = document.createElement("li");
        const currencySymbol = cartItem.currency || '$';
        li.textContent = `${cartItem.item} x ${cartItem.quantity} - ${currencySymbol}${cartItem.totalItemPrice.toFixed(2)}`;
        
        // Add remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.addEventListener("click", () => removeFromCart(index));
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);
    });

    // Update total price displays
    if (totalPriceElement) {
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
    
    if (finalPriceElement) {
        finalPriceElement.textContent = `RS.${totalPrice.toFixed(0)}`;
    }
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        calculateTotalPrice();
        updateCart();
    }
}

function submitOrder(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get customer information
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    
    // Validate form
    if (!name || !address || !phone) {
        alert("Please fill in all required fields.");
        return;
    }
    
    // Check if cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
        return;
    }
    
    // Order success message
    alert(`Thank you for your order, ${name}!\nYour food will be delivered to ${address}.\nTotal: RS.${totalPrice.toFixed(0)}`);

    // Clear the cart after submission
    cart = [];
    totalPrice = 0;
    updateCart();
    
    // Reset the form
    event.target.reset();
}