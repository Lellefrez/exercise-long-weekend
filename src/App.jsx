import CustomList from "./assets/components/CustomList";
import "./App.css";

function App() {
  const allLists = [
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
  ];
  const list = ["Gianni", "Mario", "Arturo"];
  return (
    <>
      <h2>Esercizio 1</h2>
      <CustomList type={"ul"} list={list} />
      <h2>Esercizio 2</h2>
    </>
  );
}

export default App;
