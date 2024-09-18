import { useState } from "react";
// import { List } from "./Body";

const AddItems = () => {
  const [Inputval, setInputval] = useState("");
  const [isFormVisible, setisFormVisible] = useState("");
  

  const submitHandler = (e) => {
    e.preventDefault();
    // setInputval("")
  };

  

  const updateinputval = (e) => {
    setInputval(e.target.value);
  };

  const openNewForm = () => {
    setisFormVisible(true);
  };

  const hideForm = () => {
    setisFormVisible(false);
  };

  return (
    <div>
      <button onClick={openNewForm}></button>
      {isFormVisible && (
        <form onSubmit={submitHandler} className="mt-3">
          <input type="text" value={Inputval} onChange={updateinputval} />
          <div className="mt-3">
            <button
              className="px-3 py-1 rounded-md bg-blue-400"
              onClick={submitHandler}
              
            >
              Submit
            </button>
            <button className="mr-5" onClick={hideForm}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddItems;
