import { useState } from "react";
import Button from "./components/Button";
import produce from "immer";

function App() {
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  //   address: {
  //     city: "London",
  //     postCode: "NG2 5FQ",
  //   },
  // });

  // const handleClickSetDrink = () => {
  //   setDrink({
  //     ...drink,
  //     address: { ...drink.address, postCode: "W13 5QF" },
  //   });
  // };

  // const [tags, setTags] = useState(["happy", "sad"]);

  // function handleClickTags() {
  //   // setTags([...tags, "mad"]);
  //   // setTags(tags.filter((tag) => tag != "sad"));
  //   setTags(tags.map((tag) => (tag === "sad" ? "moody" : tag)));
  // }

  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  function handleClick() {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  }

  return (
    <div>
      <li>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "true" : "false"}
          </p>
        ))}
      </li>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
