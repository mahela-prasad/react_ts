import { useState } from "react";
import ExpandebleText from "./components/ExpandebleText";

function App() {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClickGame = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const handleClickPizza = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "Cheese"] });
  };
  const handleClickCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <ExpandebleText maxChar={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste
        atque, adipisci, incidunt dicta velit illo vel eligendi facere sed,
        voluptas ducimus assumenda fuga quos qui. Ullam corrupti iure delectus,
        libero nobis blanditiis maiores voluptatibus saepe eligendi nam
        temporibus? Cum, necessitatibus incidunt aliquid sunt quos doloribus
        nemo eos ex alias esse rem ab reiciendis autem consequatur. Ut hic omnis
        quam eligendi nam fugit, saepe, minus rerum earum eaque ab totam odit
        tenetur. Odit voluptate officia ad error iure explicabo earum expedita
        laudantium, inventore alias rerum quam. Optio porro vel asperiores
        ratione autem architecto doloribus, quia a? Aut adipisci velit quasi!
      </ExpandebleText>
    </div>
  );
}

export default App;
