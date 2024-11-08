function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to the cart.`);
}

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.productName} - $${item.price}`;
        cartContainer.appendChild(itemDiv);
        total += item.price;
    });
    const totalDiv = document.createElement('div');
    totalDiv.textContent = `Total: $${total}`;
    cartContainer.appendChild(totalDiv);
}

if (window.location.pathname.endsWith('cart.html')) {
    displayCartItems();
}