

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categorys, setCategory] = useState(['Programador']);

  return (
    <>
      <h2>Gif finder</h2>

      <hr />

      <AddCategory setCategory={setCategory} />

      <hr />

      <ol>
        {
          categorys.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>

    </>
  )
}
export default GifExpertApp
