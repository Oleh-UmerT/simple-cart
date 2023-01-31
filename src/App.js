import "./App.css";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount = state.total + 1;
    const existingCArtItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCArtItem = state.items[existingCArtItemIndex];
    let updatedItems;

    if (existingCArtItem) {
      const updatedItem = {
        ...existingCArtItem,
        amount: existingCArtItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCArtItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      total: updatedAmount,
    };
  }
};

function App() {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  console.log(cartState);

  const arr = [
    {
      id: 1,
      name: "test1",
      amount: 1,
    },
    {
      id: 2,
      name: "test2",
      amount: 1,
    },
  ];

  return (
    <div className="App">
      {arr.map((item) => {
        return (
          <button key={item.id} onClick={() => addItem(item)}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default App;
