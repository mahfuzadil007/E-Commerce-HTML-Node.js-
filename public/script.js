$(document).ready(function () {
    // Sample products data
    const products = [
        { name: 'Product 1', price: 100 },
        { name: 'Product 2', price: 150 },
        // Add more products here
    ];

    const cart = [];

    // Function to display products
    function displayProducts() {
        const productsContainer = $('main');
        productsContainer.empty();

        products.forEach(product => {
            const productHTML = `
                <section class="product">
                    <img src="product1.jpg" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Description of ${product.name}.</p>
                    <span class="price">$${product.price}</span>
                    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                </section>
            `;
            productsContainer.append(productHTML);
        });
    }

    // Function to update the cart
    function updateCart() {
        const cartList = $('#cart-items');
        cartList.empty();

        let totalPrice = 0;

        cart.forEach(item => {
            const cartItemHTML = `
                <li>
                    <span>${item.name}</span>
                    <span>$${item.price}</span>
                </li>
            `;
            cartList.append(cartItemHTML);
            totalPrice += item.price;
        });

        $('#cart-total').text('$' + totalPrice);
    }

    // Add to cart button click event
    $('main').on('click', '.add-to-cart', function () {
        const productName = $(this).data('name');
        const productPrice = $(this).data('price');
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });

    // Checkout button click event
    $('#checkout').on('click', function () {
        alert('Checkout is not implemented in this example.');
    });

    // Initial setup
    displayProducts();
    updateCart();
});
