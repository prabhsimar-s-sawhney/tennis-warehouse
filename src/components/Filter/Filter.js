import { Checkbox } from '@mui/material';
import { useEffect, useState } from 'react';
import './Filter.css';

const Filter = ({changeCheckedItems}) => {
  const [brands, setBrands] = useState();
  useEffect(() => {
    fetch("http://0c2e-123-63-231-93.ngrok.io/getVendors")
    .then(res => res.json())
    .then(brands => setBrands(brands))
},[])
  
  return (
    <>
      <div className='filter-box'>
        {brands && brands.map((brand)=>(
          <h4 key={brand.id}>
            <Checkbox
              label={brand.name}
              name={brand.name}
              onChange={(e) => changeCheckedItems(e)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            {brand.name}
          </h4>
        ))}
      </div>
    </>
  )
}

export default Filter;