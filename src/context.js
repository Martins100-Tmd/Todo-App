import { createContext, useState } from "react";

const Todo = createContext();

export function TodoProvider({ children }) {
  let [item, setitem] = useState([]);
  let [done, setdone] = useState([]);

  let addItem = (text, textInput) => {
    if (text !== "") {
      setitem((prev) => [...prev, { text }]);
    }
    textInput.value = "";
  };
  let delItem = (mole) => {
    let b = [];
    item.forEach((val) => {
      if (val.text !== mole) {
        b.push(val);
      }
    });
    setitem(b);
  };
  let checkremove = function (mole) {
    let b = item.filter((val) => {
      return val.text !== mole;
    });
    setitem(b);
  };
  let doneLost = (dum) => {
    let d = done.filter((son) => {
      return son.text !== dum;
    });
    return d;
  };
  let Mark = function (e) {
    let text = e.target.parentElement.children[1].innerHTML;
    if (e.target.checked) {
      checkremove(text);
      setdone((prev) => [...prev, { text }]);
    }
  };
  let MarkII = function (e) {
    let text = e.target.parentElement.children[1].innerHTML;
    if (e.target.checked) {
      setdone(doneLost(text));
      setitem((prev) => [...prev, { text }]);
    }
  };
  let deldone = (mole) => {
    let cleanup = done.filter((son) => {
      return son.text !== mole && son.text !== "";
    });
    setdone(cleanup);
  };
  return (
    <Todo.Provider
      value={{
        item,
        addItem,
        delItem,
        Mark,
        done,
        deldone,
        checkremove,
        MarkII,
      }}
    >
      {children}
    </Todo.Provider>
  );
}

export default Todo;
