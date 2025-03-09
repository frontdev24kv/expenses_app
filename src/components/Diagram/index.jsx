import DiagramBar from "../DiagramBar";

import "./index.css";

const Diagram = (props) => {
  const maxCostsValue = Math.max(
    ...props.dataSets.map((dataSet) => dataSet.value)
  );

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxCostsValue}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
