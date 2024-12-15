// Cart Logic
const quantityInput = document.getElementById('quantity');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const cartCount = document.getElementById('cartCount');
const sizeButtons = document.querySelectorAll('.size-btn');
const addToCartBtn = document.getElementById('addToCart');

let quantity = 1;
let selectedSize = 'M';
let cartItems = 0;

incrementBtn.addEventListener('click', () =>
{
    quantity++;
    quantityInput.value = quantity;
});

decrementBtn.addEventListener('click', () =>
{
    if (quantity > 1)
    {
        quantity--;
        quantityInput.value = quantity;
    }
});

sizeButtons.forEach(button =>
{
    button.addEventListener('click', () =>
    {
        sizeButtons.forEach(btn => btn.classList.remove('border-blue-600', 'text-blue-600'));
        button.classList.add('border-blue-600', 'text-blue-600');
        selectedSize = button.dataset.price;
    });
});

addToCartBtn.addEventListener('click', () =>
{
    cartItems += quantity;
    cartCount.textContent = cartItems;
    alert(`Added ${quantity} item(s) of size ${selectedSize} to cart!`);
});
