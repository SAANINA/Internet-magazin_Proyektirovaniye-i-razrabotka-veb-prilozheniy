import React, { useState } from 'react';
import './ProductBasket.css';

function ProductBasket({ id, image, title, price, setBasket, setBasketPrice, setBasketQty }) {

  const [qty, setQty] = useState(1)

  function deleteBasket() {
    setBasket(current => current.filter(product => product.id !== id))
    setBasketPrice(current => current - (price * qty))
    setBasketQty(current => current - qty)
  }

  function plus() {
    setQty(current => current + 1)
    setBasketPrice(current => current + price)
    setBasketQty(current => current + 1)
  }

  function minus() {
    if (qty > 1) {
      setQty(current => current - 1)
      setBasketPrice(current => current - price)
      setBasketQty(current => current - 1)
    }
  }

  return (
    <div className="ProductBasket">
      <img src="https://stdin.ru/upload/iblock/72f/2ff0f680_0d9f_11ed_80e7_002590a245fc_844975e1_129d_11ed_80e7_002590a245fc.jpeg" alt='Изображение товара' />
      <h1>{title}</h1>
      <p>{price} рублей</p>
      
      <div className='basketQty'>
        <button className='minus' onClick={() => minus()}>-</button>
        <p className='qty'>{qty}</p>
        <button className='plus' onClick={() => plus()}>+</button>
      </div>
      <button className='del' onClick={() => deleteBasket()}>Удалить</button>
    </div>
  );
}

export default ProductBasket;