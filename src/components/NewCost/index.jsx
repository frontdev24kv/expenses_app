import CostForm from "../CostForm";

import { useState } from "react";

import "./index.css";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    setIsFormVisible(false);
    props.onAddCost(costData);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const canselCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Add a new expense</button>
      )}

      {isFormVisible && (
        <CostForm
          onSaveInputData={saveCostDataHandler}
          onCansel={canselCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
