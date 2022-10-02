import React from 'react';

const Categories = ({ filterItems, categories }) => {
  const categoriesList = categories.map((category, index)=> {
    return (
      <button className='filter-btn' onClick={()=>filterItems(category)} key={index}>{category}</button>
    )
  })
  return (
    <div className='btn-container'>
      {categoriesList}
    </div>
  );
};

export default Categories;