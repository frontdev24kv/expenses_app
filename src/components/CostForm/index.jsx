import { useState } from "react";
import "./index.css";

const CostForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: title,
      amount: price,
      date: new Date(date),
    };
    props.onSaveInputData(costData);
    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            value={price}
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
            required
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2021-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="new-cost__actions">
          <button>Add a new expense</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
