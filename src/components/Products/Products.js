import React, { useState } from "react";
import css from "./Products.module.css";
import Logo from "../../assets/logo.png";
import { imagesData } from "../../data/realProducts";

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(imagesData);

  const filter = (typeWePut) => {
    console.log(typeWePut, imagesData);
    if (typeWePut) {
      setMenuProducts(
        imagesData.filter((product) => {
          console.log(product.type, product.type === typeWePut);
          return product.type === typeWePut;
        })
      );
    } else {
      setMenuProducts(imagesData);
    }
  };

  return (
    <div className={css.container}>
      <div className="firstLine">
        <img src={Logo} alt="" />
        <h1>Our Memories</h1>
        <img src={Logo} alt="" />
      </div>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => filter()}>All</li>
          <li onClick={() => filter("beforeEnlisting")}>Before Enlisting</li>
          <li onClick={() => filter("vacation")}>Vacation</li>
          <li onClick={() => filter("dayPass")}>Day Pass</li>
          <li onClick={() => filter("myFav")}>Cute Photos</li>
        </ul>

        <div className={css.list}>
          {MenuProducts.map((product, i) => (
            <div className={css.products}>
              <div className={css.location}>{product.location}</div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
