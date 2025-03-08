import CostForm from "../CostForm";
import "./index.css";

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData)
  };
  return (
    <div className="new-cost">
      <CostForm onSaveInputData={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;
