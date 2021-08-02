'use strict';
class ProductItem {
    constructor(title, price, id, img='https://via.placeholder.com/200x150') { // img = './img/img.jpg'
        this.title = title;
        this.price = price;
        this.id = id;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

class ProductList {
    constructor(container = '.products') {
        // this.container = container;
        this.container = document.querySelector(container);
        this._goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }

    _fetchGoods() {
        this._goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    _render() {
        // const block = document.querySelector(this.container);

        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            this._allProducts.push(productObject);
            // block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}

// class ProductList {
//     #goods;
//     #allProducts;

//     constructor(container = '.products') {
//         this.container = container;
//         this.#goods = [];
//         this.#allProducts = [];

//         this.#fetchGoods();
//         this.#render();
//     }

//     get goods() {
//         return this.#goods;
//     }

//     set goods(value) {
//         this.#goods = value;
//     }

//     #fetchGoods() {
//         this._goods = [
//             {id: 1, title: 'Notebook', price: 20000},
//             {id: 2, title: 'Mouse', price: 1500},
//             {id: 3, title: 'Keyboard', price: 5000},
//             {id: 4, title: 'Gamepad', price: 4500},
//         ];
//     }

//     #render() {
//         const block = document.querySelector(this.container);

//         for (const product of this.#goods) {
//             const productObject = new ProductItem(product);
//             this.#allProducts.push(productObject);
//             block.insertAdjacentHTML('beforeend', productObject.render());
//         }
//     }
// }

const list = new ProductList();

const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];



function totalAllSum() { //так можно посчитать товары в корзине
  let totalSum = 0;  
  for (let productId in basket) {  
       totalSum += basket[productId] * products[productId].price; 
       totalValue.textContent = totalSum; 
   }
}

//попробовал сделать только так чтобы посчитать в корзине товары. не могу понять как точно она раюотает. от какого массива отталкиваться.
//в консоль выдает ошибку _goods не найден. жду помощи. не могу понять в чем дело.
function sum() { 
  return this._goods.reduce((sum, price) => sum + price, 0); 
 
};
sum();
console.log(sum) 
