import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
        
          <li onClick={() => setPage('Basket')}>Корзина</li>
          
        </>
      )
    }
  }

  return (
    <div className="Header">
      <ul>
       <img width="50px" src="https://cdn.icon-icons.com/icons2/2845/PNG/512/adidas_logo_icon_181260.png"></img>
        <li onClick={() => setPage('Main')}>Главная</li>
        <BasketLink />
      </ul>
      <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />
      
    </div>

  );
}

export default Header;