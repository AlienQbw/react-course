import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
              className="btn"
            >
              Remove Item
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setPeople([]);
        }}
        className="btn"
      >
        Delete all items
      </button>
    </>
  );
};

export default UseStateArray;
