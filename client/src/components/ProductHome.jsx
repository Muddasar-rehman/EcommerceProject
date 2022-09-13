import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalState from "../global/GlobalState";

const ProductHome = () => {
  const { data, addItem } = useContext(GlobalState);
  const dataKeys = Object.keys(data);

  const handleChange = (e) => {
    e.preventDefault();
    const selectedItem = e.target[0].id;
    const selectedData = data[selectedItem];
    addItem({
      id: Math.random(),
      name: selectedData.name,
      price: selectedData.price,
      img: selectedData.img,
    });
  };

  return (
    <section className="container">
      <div className="product-home">
        <div className="product-wrapper">
          <h1 className="product-home-title">Products Home</h1>
          <div className="card-list">
            {dataKeys.map((dataItem) => (
              <div key={dataItem} className="card">
                <img src={data[dataItem].img} alt={data[dataItem].name} />
                <div className="card-content">
                  <p>{data[dataItem].name}</p>
                  <p>{`$ ${data[dataItem].price}`}</p>
                  <form onSubmit={handleChange}>
                    <button
                      id={dataItem}
                      type="submit"
                      className="btn-small"
                      value=""
                    >
                      Add to Cart
                    </button>{" "}
                  </form>
                  <Link to={dataItem}>
                    <button className="btn">Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHome;
