import CustomList from "./assets/components/CustomList";
import "./App.css";

function App() {
  const listaOrdinata = ["alessio", "laura", "maks"];
  const listaNonOrdinata = ["Alex", "laura", "maks"];
  return (
    <>
      <CustomList type="ol" list={listaOrdinata} />
      <CustomList type="ul" list={listaNonOrdinata} />
    </>
  );
}

export default App;
