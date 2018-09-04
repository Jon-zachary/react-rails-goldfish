import React from 'react';
const NewFishForm = (props) => {
  return(
    <form>
      <label htmlFor="name">Name</label>
      <input 
      type="text"
      name="name" 
      onChange={props.handleChange}
      value={props.name}
      ></input>

      <label htmlFor="variety">Varitey</label>
      <input 
      type="text"
      name="variety"
      onChange={props.handleChange}
      value={props.variety}
      ></input>

      <button type="submit" onClick={props.handleSubmit}>Submit</button>
    </form>
  )
}
export default NewFishForm