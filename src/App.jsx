import Costs from "./components/Costs";
import NewCost from "./components/NewCost";

function App() {
  const costs = [
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Fridge",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2022, 10, 2),
      description: "TV",
      amount: 799.39,
    },
    {
      id: "c3",
      date: new Date(2021, 6, 11),
      description: "McBook",
      amount: 2142.16,
    },
  ];
  const addCost = (cost) => {
    console.log(cost);
  };
  return (
    <>
      <h1 className="main-title">Expenses App</h1>
      <NewCost onAddCost={addCost} />
      <Costs costs={costs} />
    </>
  );
}

export default App;
