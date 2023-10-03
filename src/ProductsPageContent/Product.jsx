import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordians from '../components/MainPageContent/Accordian/Accordians';
import ProductDataCard from './ProductDataCard';
import './style.css';

function Product({ FilterData, addToCart }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  function handleCheckboxChange(event) {
    const { value } = event.target;
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  }

  function filterData() {
    if (selectedCategories.length === 0) {
      return FilterData;
    }
    return FilterData.filter((record) => selectedCategories.includes(record.catagory));
  }

  const filteredData = filterData();

  return (
    <>
      <div className="grid">
        <div className="left">
          <h1>Select Category</h1>

          {['veg', 'non-veg', 'Tiffin', 'pizza'].map((category) => (
            <FormControlLabel
              key={category}
              control={(
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={handleCheckboxChange}
                  value={category}
                />
              )}
              label={category}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',

              }}
            />
          ))}
        </div>
        <div className="right">
          <ProductDataCard filterData={filteredData} addToCart={addToCart} />
        </div>
      </div>
      <Accordians />

    </>
  );
}

export default Product;
