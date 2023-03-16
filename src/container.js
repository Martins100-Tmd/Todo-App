import { useContext } from "react";
import "./style.css";
import Todo from "./context";

let Container = () => {
  let { item, delItem, addItem, done, Mark, deldone, MarkII } =
    useContext(Todo);
  let rand = done.map((val, index) => {
    return (
      <div
        className={"flex flex-row items-stretch justify-between p-5 rounded shadow w-full"}
        key={index}
      >
        <div className={"flex flex-row items-center w-3/4"}>
          <input
            type={"checkbox"}
            title="Item done?"
            onClick={(e) => MarkII(e)}
          />
          <del className={"font-pop font-semibold text-left text-base w-5/6 ml-3"}>
            {val.text}
          </del>
        </div>
        <p className={"font-pop font-semibold text-base cursor-pointer w-1/4 text-right"}>
          <i
            className={"fa text-base kk"}
            title="remove item"
            onClick={(e) =>
              deldone(
                e.target.parentElement.parentElement.firstChild.children[1].innerHTML.trim()
              )
            }
          >
            &#xf00d;
          </i>
        </p>
      </div>
    );
  });
  let list = item.map((val, index) => {
    return (
      <div
        className="flex flex-row items-stretch justify-between p-5 rounded shadow w-full"
        key={index}
      >
        <div className="flex flex-row items-center w-3/4">
          <input
            type={"checkbox"}
            title="Item done?"
            onClick={(e) => Mark(e)}
            id="js"
          />
          <p className="font-pop font-semibold text-left text-base w-5/6 ml-3">
            {val.text}
          </p>
        </div>
        <p className="font-pop font-semibold text-base cursor-pointer w-1/4 text-right">
          <i
            className="fa text-base kk"
            title="remove item"
            onClick={(e) =>
              delItem(
                e.target.parentElement.parentElement.firstChild.children[1].innerHTML.trim()
              )
            }
          >
            &#xf00d;
          </i>
        </p>
      </div>
    );
  });
  let valid = () => {
    return item.length === 0 && done.length === 0 ? (
      <div className="bg-black px-5 py-2 rounded font-pop font-semibold text-white text-center my-3">
        No item....
      </div>
    ) : (
      <div></div>
    );
  };
  return (
    <div className="sm:w-3/4 mx-auto sm:rounded sm:shadow-md flex flex-col items-center w-full pb-3 relative">
      <nav className="bg-black text-center p-5 rounded-t w-full mb-10">
        <p className="font-pop font-semibold text-center text-white text-xl">
          To-do App
        </p>
      </nav>
      <div className="flex flex-row items-center w-95 mx-auto">
        <input
          type={"text"}
          className="py-3 px-4 rounded-tl rounded-bl outline-none border-none font-pop font-semibold text-base w-3/4 shadow"
          id="text"
        />
        <button
          type={"submit"}
          className="bg-black px-4 py-3 rounded-tr rounded-br text-white font-pop font-semibold w-1/4"
          onClick={() =>
            addItem(
              document.getElementById("text").value,
              document.getElementById("text")
            )
          }
        >
          Add
        </button>
      </div>
      <div className="flex flex-col items-center w-95 mx-auto">
        <div>{valid()}</div>
        <h1 className="font-pop font-semibold text-lg self-start mt-5">
          Todos
        </h1>

        <div className="w-full">
          {item.length === 0 ? (
            <div className="sk w-full p-2 rounded"></div>
          ) : (
            <div className="w-full flex flex-col items-center gap-5">
              {list}
            </div>
          )}
        </div>
        <h1 className="font-pop font-semibold text-lg self-start mt-5">
          Completed Todos
        </h1>
        <div className="w-full">
          {done.length === 0 ? (
            <div className="sk w-full p-2 rounded"></div>
          ) : (
            <div className="w-full flex flex-col items-center gap-5">
              {rand}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
