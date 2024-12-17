// Cart Logic
const quantityInput = document.getElementById('quantity');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const cartCount = document.getElementById('cartCount');
const sizeButtons = document.querySelectorAll('.size-btn');
const addToCartBtn = document.getElementById('addToCart');
const bandColor = document.querySelectorAll(".band");

let quantity = 1;
let selectedSize = 'M';
let cartItems = 0;

function changeTemplate(imageUrl)
{
    const productImage = document.getElementById("productImage");
    productImage.src = imageUrl;
}

function selectButton(selected)
{
    sizeButtons.forEach(button =>
    {
        button.classList.remove('border-priceText');
    })

    selected.classList.add("border-priceText")
    // Reset all buttons: Remove text color class from all spans
    document.querySelectorAll('.size-text').forEach(span =>
    {
        span.classList.remove('text-priceText');
        span.classList.add('text-primaryTitle');
    });

    // Add the text-blue-600 class only to the span within the clicked button
    const sizeText = selected.querySelector('.size-text');
    sizeText.classList.remove('text-primaryTitle');
    sizeText.classList.add('text-priceText');
}

bandColor.forEach(singleBand =>
{
    singleBand.addEventListener('click', () =>
    {
        bandColor.forEach(band => band.classList.remove('border-2'));
        singleBand.classList.add("border-2");
    })
})

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

addToCartBtn.addEventListener('click', () =>
{
    cartItems += quantity;
    cartCount.textContent = cartItems;
    alert(`Added ${quantity} item(s) of size ${selectedSize} to cart!`);
});

// Get Modal Elements
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const closeFooterBtn = document.getElementById('closeFooter');
const modal = document.getElementById('modal');

// Open Modal
openModalBtn.addEventListener('click', () =>
{
    modal.classList.remove('hidden');
});

// Close Modal
const closeModal = () =>
{
    modal.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
closeFooterBtn.addEventListener('click', closeModal);

// Close Modal when clicking outside content
window.addEventListener('click', (e) =>
{
    if (e.target === modal) closeModal();
});
