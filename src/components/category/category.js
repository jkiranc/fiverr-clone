import React from 'react';
import './category.css'
import Header from '../Home/header'
import CategoryNav from '../categorynav/categorynav'
import GridCard from '../gridcard/gridcard'
import data from './data.json'

const Category = () => {
  return <div className="category">
    <Header/>
    <CategoryNav/>
    <div className="category_row">
    {data.map((v,i)=>(
      <GridCard userData={v}/>
    ))}
    </div>

  </div>;
};

export default Category;
