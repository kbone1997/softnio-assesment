// Cart Logic
const quantityInput = document.getElementById('quantity');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const cartCount = document.getElementById('cartCount');
const sizeButtons = document.querySelectorAll('.size-btn');
const addToCartBtn = document.getElementById('addToCart');
const bandColor = document.querySelectorAll(".band");
const productImage = document.getElementById("productImage");
const checkoutDiv = document.getElementById("checkoutDiv");

let quantity = 1;
let selectedSize = 'S';
let selectedColor = 'purple';
let selectedPrice = 69.0;

let cartItemsNumber = 0;
let cartItems = [];
let totalQuantity = 0;
let totalCost = 0;

function checkoutStatus()
{
    if (totalQuantity < 1)
    {
        checkoutDiv.classList.add("hidden")
    }
    else
    {
        checkoutDiv.classList.remove("hidden")
    }
}

checkoutStatus();

function cartBody()
{
    const tableBody = document.getElementById("cart-body");
    tableBody.innerHTML = "";
    if (totalQuantity > 0)
    {
        cartItems.forEach((item) =>
        {
            const row = `
                    <tr class="border-b text-[14px]">
                        <td class="py-3 flex items-center">
                            <img src=${item.image} alt="watch" class="mr-3 rounded w-7 h-7 object-contain" />
                            <span class="font-[400]">Classy Modern Smart Watch</span>
                        </td>
                        <td class="py-3 text-center">${item.bandColor}</td>
                        <td class="py-3 text-center font-[700]">${item.size}</td>
                        <td class="py-3 text-center font-[700]">${item.quantity}</td>
                        <td class="py-3 font-[700] text-right">$${Number(item.price).toFixed(1)}</td>
                    </tr>
                `
            tableBody.insertAdjacentHTML("beforeend", row);
        })
        const totalRow = `
                    <tr class="text-[14px]">
                        <td class="py-3 flex items-center">
                            <span class="font-[700] text-[16px]">Total</span>
                        </td>
                        <td class="py-3 text-center"></td>
                        <td class="py-3 text-center font-[700]"></td>
                        <td class="py-3 text-center font-[700]">${totalQuantity}</td>
                        <td class="py-3 font-[700] text-[18px] text-right">$${Number(totalCost).toFixed(1)}</td>
                    </tr>
                `
        tableBody.insertAdjacentHTML("beforeend", totalRow);
    }
}

cartBody();

function changeTemplate(imageUrl)
{
    productImage.src = imageUrl;
}

function selectButton(selected)
{
    selectedPrice = selected.dataset.price
    selectedSize = selected.dataset.size
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
        selectedColor = singleBand.id;
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
    cartItemsNumber += quantity;
    cartCount.textContent = cartItemsNumber;

    const product = {
        name: "Classy Modern Smart Watch",
        image: productImage.src,
        price: selectedPrice,
        size: selectedSize,
        bandColor: selectedColor,
        quantity: quantity
    };
    cartItems.push(product)
    totalCost = 0;
    totalQuantity = 0;
    cartItems.forEach(items =>
    {
        console.log(items.price);
        totalCost = totalCost + parseInt(items.price)
        totalQuantity = totalQuantity + parseInt(items.quantity)
    })
    // console.log(cartItems);
    // console.log(totalCost);
    // console.log(totalQuantity);
    cartBody();
    checkoutStatus();
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

// Close Modal when clicking outside content
window.addEventListener('click', (e) =>
{
    if (e.target === modal) closeModal();
});
