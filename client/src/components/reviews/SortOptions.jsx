import React from 'react';

const SortOptions = () => {

  /* This component will:
    1) Include a dropdown that will have helful, newest, relevant
    2) Have a state set for the current one, defalted to Relevant
    3) Retrieve a sort change function from the Reviews component to change state of reviews when this is changed
  */

  return (
    <div className="reviews sortOptions" style={{border: '2px solid black'}}>
      <label>Sort By:</label>
      <select>
        <option>Helpful</option>
        <option>Newest</option>
        <option>Relevant</option>
      </select>
       </div>
  )
}

export default SortOptions;