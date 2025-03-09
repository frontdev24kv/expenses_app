import Card from "../Card";
import CostsFilter from "../CostsFilter";
import CostList from "../CostList";
import CostsDiagram from "../CostsDiagram";

import { useState } from "react";

import "./index.css";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
