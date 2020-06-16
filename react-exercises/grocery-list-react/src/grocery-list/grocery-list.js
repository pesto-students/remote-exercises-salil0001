import React from "react";
import "./grocery-list.css";
export default function GroceryList() {
  const [groceryListArray, setGroceryListArray] = React.useState([
    { id: 1, name: "MAGGI", qty: 1, selected: false },
    { id: 2, name: "LEMON SODA", qty: 1, selected: false },
    { id: 3, name: "TURMERIC POWDER", qty: 1, selected: false },
  ]);
  const [name, setName] = React.useState("");

  const onChangeName = (e) => {
    setName(e.target.value.toUpperCase());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const findIndex = groceryListArray.findIndex(
      (grocery) => grocery.name === name
    );

    if (findIndex === -1) {
      setGroceryListArray([
        ...groceryListArray,
        { id: Math.random, name: name, qty: 1, selected: false },
      ]);
      setName("");
    } else {
      const tempGrocery = groceryListArray[findIndex];
      tempGrocery.qty = tempGrocery.qty+1;
      groceryListArray.splice(findIndex, 1, tempGrocery);
      setGroceryListArray([...groceryListArray]);
      setName("");
    }

    
  };
  const SelectUnSelectGrossary = (id) => {
    const findIndex = groceryListArray.findIndex(
      (grocery) => grocery.id === id
    );
    const tempGrocery = groceryListArray[findIndex];
    tempGrocery.selected = !tempGrocery.selected;
    groceryListArray.splice(findIndex, 1, tempGrocery);
    setGroceryListArray([...groceryListArray]);
  };
  return (
    <div className="grocery-list-wrapper">
      <form className="form-wrapper"onSubmit={onFormSubmit}>
        <input
          value={name}
          type="text"
          required
          name="itemName"
          onChange={onChangeName}
        />

        <button type="submit">Click Me</button>
      </form>

      <table>
        <tbody>
          <tr>
            <th>No</th>
            <th>Grocery Name</th>
            <th>Qty</th>
          </tr>
        </tbody>

        {groceryListArray.map((grocery, index) => {
          return (
            <tbody key={grocery.id}>
              <tr
                key={grocery.id}
                style={
                  !grocery.selected ? { color: "black" } : { color: "red" }
                }
                onClick={() => SelectUnSelectGrossary(grocery.id)}
              >
                <th>{index + 1}</th>
                <th>{grocery.name}</th>
                <th>{grocery.qty}</th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
