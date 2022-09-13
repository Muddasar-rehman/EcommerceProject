import React, { useContext, useState, useEffect } from "react";
import GlobalState from "../global/GlobalState";
import sadEmoji from "../img/sad-emoji.png";
import { Link } from "react-router-dom";
const Cart = () => {
  const { state, deleteItem } = useContext(GlobalState);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(state);
  }, [state]);

  if (data[0]) {
    return (
      <div className="container cart">
        <ul className="cart-list">
          {data.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <button onClick={(e) => deleteItem(item.id)}>x</button>
                <h1>{item.name}</h1>
                <img src={item.img} alt={item.name} />
                <p>{`$ ${parseFloat(item.price)}`}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-price">
          <div className="container price-inner">
            <h3>Total Bill:</h3>
            <p>
              {data
                .map((item) => parseFloat(item.price))
                .reduce((accu, currentVal) => accu + currentVal)}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="item-not-found container">
        <h1>Cart Is Empty</h1>
        <img src={sadEmoji} alt="" />
        <Link to="/products">
          <button className="btn">Please ADD ITEM</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
