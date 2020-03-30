'use strict';

const cartAdd = document.getElementById('cartAdd');
const cartMinus = document.getElementById('cartMinus');
const cartInput = document.getElementById('cartInput');
const addToCart = document.getElementById('addToCart');
const cartList = document.getElementById('cartList');
const mainColorName = document.getElementById('mainColor');
const cost = document.getElementById('cost');

class ManageClass {
  constructor(num) {
    this.card = cartInput.value;
    this._id = 1;
    this.color = 'Silver';

    this.cart = [
      {
        id: 0,
        quantity: 1,
        color: 'Silver',
      },
    ];
    this._cost = 129;
    this.costOne = 129;
  }

  setColor(color) {
    this.color = color;
    mainColorName.innerHTML = this.color;
  }

  add(num) {
    this.card = num;
    this.card = +this.card + 1;
    cartInput.value = this.card;
  }

  minus(num) {
    this.card = num;

    if (+this.card > 1) {
      this.card = +this.card - 1;
    }
    cartInput.value = this.card;
  }

  close(id) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.render();
  }

  initialCartState() {
    cartInput.value = 1;
    this.color = 'Silver';
  }

  getAmount() {
    return this.cart.reduce((sum, item) => sum + +item.quantity, 0);
  }

  removeOne(id) {
    this.cart = this.cart.map(item => {
      if (item.id === id && item.quantity > 0) {
        item.quantity = +item.quantity - 1;
      }

      return item;
    });

    this.render();
  }

  addOne(id) {
    this.cart = this.cart.map(item => {
      if (item.id === id) {
        item.quantity = +item.quantity + 1;
      }

      return item;
    });

    this.render();
  }

  addToCart() {
    this._id = this._id + 1;

    const newItem = {
      id: this._id,
      quantity: cartInput.value,
      color: this.color,
    };

    this.cart = [...this.cart, newItem];

    this.render();
    this.initialCartState();
  }

  render() {
    const items = this.cart.map(
      item =>
        `<li class='basket__item'>
    <img src='./images/shop/gold.png' alt='gold luna' />
    <div class='basket__item-box'>
      <p class='basket__item-text'>
        Color: <span class='basket__item-color'>${item.color}</span>
      </p>
      <div class='basket__item-counter'>
        <i class='fas fa-minus cart__icon' 
        onclick='removeFromItem(${item.id})'></i>
        <input
          type='number'
          class='basket__input'
          min='1'
          max='10'
          value='${item.quantity}'
          disabled
        />
        <i class='fas fa-plus cart__icon' onclick='addToItem(${item.id})'></i>
      </div>
    </div>
    <i class='fas fa-times basket__item-cross' 
    onclick='closeItem(${item.id})'></i>
  </li>`
    );

    const amount = this.getAmount();
    const fullCost = amount * this.costOne;

    cost.innerHTML = fullCost;
    console.log(fullCost);
    cartList.innerHTML = items.join();
  }
}

const cardManager = new ManageClass();

cardManager.render();

cartAdd.addEventListener('click', () => {
  cardManager.add(cartInput.value);
});

cartMinus.addEventListener('click', () => {
  cardManager.minus(cartInput.value);
});

addToCart.addEventListener('click', () => {
  cardManager.addToCart(cartInput.value);
});

function closeItem(id) {
  cardManager.close(id);
}

function removeFromItem(id) {
  cardManager.removeOne(id);
}

function addToItem(id) {
  cardManager.addOne(id);
}

function getColor(elem) {
  const color = elem.value;

  cardManager.setColor(color);
}
