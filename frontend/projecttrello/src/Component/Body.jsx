import AddItems from "./AddItems";
import Filter from "./Filter";
import {useEffect, useState } from "react";

const Body = () => {
  const [Items, setItems] = useState([]);

  const generateNewList = () => {
    setItems([...Items, Items.length]);
  };

  return (
    <div className="flex-wrap gap-2 flex-grow">
      <div className="w-full mb-4">
        <Filter />
      </div>

      <div className="flex flex-wrap">
        {Items.map((item, index) => (
          <div key={index} className="w-1/3 p-2">
            <List />
          </div>
        ))}
      </div>

      <button
        className="mt-4 ml-3 p-3 bg-blue-500 text-white rounded-lg"
        onClick={generateNewList}
      >
        + Add List
      </button>
    </div>
  );
};

const List = () => {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (input.trim() === "") {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [input]);

  const addCard = () => {
    setCards([...cards, <Card key={cards.length} />]);
  };

  return (
    <div className="p-4 bg-purple-300 rounded-lg shadow-md" draggable>
      {/* <h3 className="text-lg font-bold mb-4"><input type="text" placeholder="enter the list title" /></h3> */}

      <div className="p-2">
        <input
          className="w-full text-xl"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter your list title"
        />
      </div>

      {cards.map((card, index) => (
        <div key={index} className="mb-2">
          {card}
        </div>
      ))}

      <AddItems onAdd={addCard} />

      {showButton && (
        <button
          className="mt-2 p-2 bg-green-500 text-white rounded-lg"
          onClick={addCard}
        >
          + Add Card
        </button>
      )}
    </div>
  );
};

const Card = () => {
  return (
    <div className="p-2">
      <input
        className=" bg-blue-200 rounded-lg shadow-sm w-full text-lg"
        type="text"
        placeholder="enter todos"
      />
    </div>
  );
};

export default Body;
