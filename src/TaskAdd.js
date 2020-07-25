import React from "react";

const TaskAdd = ({ data, changeHandler, clickHandler }) => {
  return (
    <form>
      <input value={data} onChange={changeHandler} />
      <button onClick={clickHandler}>Save</button>
    </form>
  );
};

export default TaskAdd;
