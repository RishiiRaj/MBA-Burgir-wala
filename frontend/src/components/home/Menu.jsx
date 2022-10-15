import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/cheeseburger.jpg";
import burger2 from "../../assets/chicken_cheese_burger.jpg";
import burger3 from "../../assets/burger_combo.jpg";

const menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Chicken Cheese Burger"
          handler={addToCartHandler}
          delay={0.3}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={800}
          title="Chicken Cheese Burger combo"
          handler={addToCartHandler}
          delay={0.5}
        />
      </div>
    </section>
  );
};

export default menu;
