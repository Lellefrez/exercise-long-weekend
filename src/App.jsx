import CustomList from "./assets/components/CustomList";
import "./App.css";
import { useState } from "react";

function App() {
  const [allLists, setAllList] = useState([
    {
      title: "Cani",
      type: "ul",
      list: ["Ryuk", "Kira"],
    },
    {
      title: "Figli",
      type: "ol",
      list: ["Tizio", "Caio"],
    },
    {
      title: "Frutta",
      type: "ul",
      list: ["Mele", "Pere", "Banane"],
    },
  ]);
  return (
    <>
      <div>
        {allLists.map(({ title, type, list }, i) => {
          const [inputValue, setInputValue] = useState("");
          return (
            <div key={`list${title}`}>
              <h3>{title}</h3>
              <div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  onClick={() => {
                    if (!inputValue) {
                      return;
                    }
                    const newAllList = structuredClone(allLists);
                    newAllList[i].list.push(inputValue);
                    setAllList(newAllList);
                    setInputValue("");
                  }}
                >
                  Aggiungi
                </button>
              </div>
              <CustomList
                type={type}
                list={list}
                buttons={["Elimina", "Modifica"]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
