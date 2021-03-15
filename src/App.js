import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien(["Kalatea", "Monstera", "Difembaquia", "Sansevieria", "Lucky Bamboo"]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;