const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];

const renderProducts = (list = []) => {

    const productList = list.map((good) => {
        return `<div class="product-item">
        <h3>${good.title}</h3>
        <p>${good.price}</p>
        <button class="by-btn">Добавить</button>
        </div>`;
    });

    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);