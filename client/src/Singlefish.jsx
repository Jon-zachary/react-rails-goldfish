import React from 'react';

const SingleFish = (props) => {
  return (
    <div className="single-fish">
      <span>{props.name}: </span>
      <span>{props.variety}</span>
    </div>
  )
}

export default SingleFish