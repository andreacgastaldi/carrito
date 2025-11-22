import "./Count.css";
import { useState } from "react";

export const Count = ({ btnText = "Agregar", onConfirm }) => {
  const [count, setCount] = useState(1); // inicia en 1 para permitir agregar por defecto

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1)); // mínimo 1
  };
  const confirm = () => {
    console.log("Count.confirm -> count:", count);
    if (count > 0 && typeof onConfirm === "function") {
      onConfirm(count);
    }
  };

  return (
    <div className="count-container">
      <div className="count-buttons">
        <button type="button" className="btn" onClick={decrement} disabled={count === 1}>
          -
        </button>
        <span>{count}</span>
        <button type="button" className="btn" onClick={increment}>
          +
        </button>
      </div>

      <button type="button" className="btn btn-addon" onClick={confirm} disabled={count === 0}>
        {btnText}
      </button>
    </div>
  );
};