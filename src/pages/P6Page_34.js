import { useEffect, useState } from 'react';
import Product_34 from '../components/Product_34';
import midterm_data_34 from '../midterm_data_34';

const P6Page_34 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_34);

  console.log('products', products);

  return (
    <>
      <h2>P6Page_34</h2>
    </>
  );
};
export default P6Page_34;