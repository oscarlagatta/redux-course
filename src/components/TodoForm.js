import React from "react";

// () means implicit returns in multiple lines
export default props => {
  const {currentTodo, changeCurrent} = props;
  const handleInputChange = (evt) => {
    const val = evt.target.value;
    changeCurrent(val);
  }
  return (
    <form>
      <input type="text" 
      onChange={handleInputChange}
      value={currentTodo}/>
    </form>
  );
}
