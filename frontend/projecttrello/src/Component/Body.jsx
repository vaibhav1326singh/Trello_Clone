import AddItems from "./AddItems";
import Filter from "./Filter";
import {useState} from "react";

const Body = () => {
  const [Items, setItems] = useState([]);
  const [buttonLabel, setButtonLabel] = useState('+ Add List');


  const generateNewList = () => {
    setItems([...Items, Items.length]);
    {setButtonLabel('+ Add Another List')}

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
        {buttonLabel}
      </button>
    </div>
  );
};

const List = () => {
  const [cards, setCards] = useState([]);
  const [ListTitle, setListTitle] = useState("");
  


  const addCard = () => {
    setCards([...cards, <Card key={cards.length} />]);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md" >
      

      <div className="p-2">
        <input
          className="w-full text-xl"
          type="text"
          value={ListTitle}
          onChange={(e) => setListTitle(e.target.value)}
          placeholder="enter your list title"
        />
        
      </div>

      {cards.map((card, index) => (
        <div key={index} className="mb-2">
          {card}
        </div>
      ))}

      <AddItems onAdd={addCard} />
      
      {ListTitle && (
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
        className=" bg-white rounded-lg shadow-sm w-full text-lg"
        draggable
        type="text"
        placeholder="enter todos"
      />
    </div>
  );
};

export default Body;
