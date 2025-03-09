import Costs from "./components/Costs";
import NewCost from "./components/NewCost";
import { useState } from "react";

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

  const [expenses, setExpenses] = useState(costs)
  const addCost = (cost) => {
    setExpenses((previousState) => [cost, ...previousState,])
  };
  return (
    <>
      <h1 className="main-title">Expenses App</h1>
      <NewCost onAddCost={addCost} />
      <Costs costs={expenses} />
    </>
  );
}

export default App;
