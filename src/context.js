import { createContext, useState } from "react";

const Todo = createContext();

export function TodoProvider({ children }) {
  let [item, setitem] = useState([]);
  let [done, setdone] = useState([]);

  var addItem = (text, textInput) => {
    setitem((prev) => [...prev, { text }]);
    textInput.value = "";
  };
  var delItem = (mole) => {
    let b = [];
    item.forEach((val) => {
      if (val.text !== mole) {
        b.push(val);
      }
    });
    setitem(b);
  };
  let checkremove = function (mole) {
    let b = [];
    item.forEach((val) => {
      if (val.text !== mole) {
        b.push(val);
      }
    });
    setitem(b);
  };
  let checkremoveII = function (mole) {
    let b = [];
    item.forEach((val) => {
      if (val.text !== mole) {
        b.push(val);
      }
    });
    setdone(b);
  };
  let Mark = function (e) {
    let a =
      e.target.parentElement.parentElement.firstChild.children[1].innerHTML.trim();
    let b = e.target.parentElement.children[1].innerHTML;
    if (e.target.checked) {
      checkremove(b);
      setdone((prev) => [...prev, { a }]);
    }
  };
  let MarkII = function (e) {
    let text =
      e.target.parentElement.parentElement.firstChild.children[1].innerHTML.trim();
    let b = e.target.parentElement.children[1].innerHTML;
    if (e.target.checked) {
      checkremoveII(b);
      setitem((prev) => [...prev, { text }]);
    }
  };
  let deldone = (mole) => {
    let b = [];
    item.forEach((val) => {
      if (val.text !== mole) {
        b.push(val);
      }
    });
    setdone(b);
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
