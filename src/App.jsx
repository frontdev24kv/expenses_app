import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Fridge',
      amount: 999.99
    },
    {
      date: new Date(2022, 10, 2),
      description: 'TV',
      amount: 799.39
    },
    {
      date: new Date(2021, 6, 11),
      description: 'McBook',
      amount: 21429.16
    },
  ]

  return (
    <>
      <h1>Expenses App</h1>
      <Costs costs={costs}/>
    </>
  );
}

export default App;
