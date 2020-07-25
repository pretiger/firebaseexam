import React from "react";

const TaskDisplay = ({ datas, deleteHandler }) => {
  return datas.map((data) => (
    <div key={data.id}>
      <p>{data.todo}</p>
      <button onClick={() => deleteHandler(data.id)}>Delete</button>
    </div>
  ));
};

export default TaskDisplay;
