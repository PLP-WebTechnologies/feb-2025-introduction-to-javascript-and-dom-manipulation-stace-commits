// Array of fruits and their image URLs from Pexels.com
const fruits = [
    { name: "Mango", image: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg" },
    { name: "Apple", image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg" },
    { name: "Banana", image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg" },
    { name: "Orange", image: "https://images.pexels.com/photos/161559/pexels-photo-161559.jpeg" },
    { name: "Pineapple", image: "https://images.pexels.com/photos/137119/pexels-photo-137119.jpeg" }
];
let currentFruitIndex = 0;

// Get DOM elements
const welcomeText = document.getElementById("welcome-text");
const fruitName = document.getElementById("fruit-name");
const fruitImage = document.getElementById("fruit-image");
const fruitDisplay = document.getElementById("fruit-display");
const changeFruitBtn = document.getElementById("changeFruitBtn");
const toggleCartBtn = document.getElementById("toggleCartBtn");
const cart = document.getElementById("cart");

// Change text content and image dynamically
function updateFruit() {
    currentFruitIndex = (currentFruitIndex + 1) % fruits.length;
    fruitName.textContent = fruits[currentFruitIndex].name;
    fruitImage.src = fruits[currentFruitIndex].image;
    fruitImage.alt = fruits[currentFruitIndex].name;
    welcomeText.textContent = "Try our delicious ${fruits[currentFruitIndex].name} today!";
}

// Modify CSS styles via JavaScript
function updateStyles() {
    fruitDisplay.style.backgroundColor = currentFruitIndex % 2 === 0 ? "#e6ffe6" : "#fff3cd";
    fruitDisplay.style.borderRadius = "10px";
}

// Add or remove cart element
let isCartVisible = false;
function toggleCart() {
    isCartVisible = !isCartVisible;
    if (isCartVisible) {
        cart.style.display = "block";
        toggleCartBtn.textContent = "Remove from Cart";
    } else {
        cart.style.display = "none";
        toggleCartBtn.textContent = "Add to Cart";
    }
}

// Event listeners
changeFruitBtn.addEventListener("click", () => {
    updateFruit();
    updateStyles();
});

toggleCartBtn.addEventListener("click", toggleCart);

// Initial setup
updateStyles();