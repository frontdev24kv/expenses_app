import "./index.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.onChangeYear(e.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Select by year</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
