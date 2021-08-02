'use strict';
class GoodsItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="product-item">
                 <h3>${this.id}</h3>
                <h3>${this.title}</h3>
                <p><b>${this.price}</b></p>
                <button class="by-btn">Добавить</button>
              </div>`;
    }
}
class GoodsList { //список всех товаров
    constructor() {
        this.goods = []; //изначально пустой массив со списком всех товаров
    }
    fetchGoods() { //для заполнения списка товаров. позжу будем получать с сервера
        this.goods = [
            {id: 1, title: 'Notebook', price: 1000},
            {id: 2, title: 'Mouse', price: 100},
            {id: 3, title: 'Keyboard', price: 250},
            {id: 4, title: 'Gamepad', price: 150},
        ];
    }
    render() { //вывод списка товаров
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
    
    sum() { 
        return this._goods.reduce(function (sum, good) {
            return sum + good.price;
        }, 0);
    };
}

const list = new GoodsList();
list.fetchGoods();
list.render();


// const products = [
//     {id: 1, title: 'Notebook', price: 1000},
//     {id: 2, title: 'Mouse', price: 100},
//     {id: 3, title: 'Keyboard', price: 250},
//     {id: 4, title: 'Gamepad', price: 150},
// ];

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="by-btn">Добавить</button>
//               </div>`;
// }

// const renderProducts = list => {
//     document.querySelector('.products').innerHTML = (list.map(item => renderProduct(item.title, item.price)).join(''));
//     };
// renderProducts(products);


