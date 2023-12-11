import CustomList from "./assets/components/CustomList";
import "./App.css";

function App() {
  const allLists = [
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
  ];
  return (
    <>
      <div>
        {allLists.map(({ title, type, list }) => (
          <div key={`list${title}`}>
            <h3>{title}</h3>
            <CustomList type={type} list={list} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
