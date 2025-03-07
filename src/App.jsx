import CostItem from "./components/CostItem";

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
      <CostItem
      date={costs[0].date}
      description={costs[0].description}
      amount={costs[0].amount}
      />
      <CostItem
      date={costs[1].date}
      description={costs[1].description}
      amount={costs[1].amount}
      />
      <CostItem
      date={costs[2].date}
      description={costs[2].description}
      amount={costs[2].amount}
      />
    </>
  );
}

export default App;
