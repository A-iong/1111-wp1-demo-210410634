import { useState } from 'react';
import midterm_data_34 from '../midterm_data_34';

const P2Page_34 = () => {
  const [products, setProducts] = useState(midterm_data_34);
  console.log('products', products);
  return (
    <>
      <h2>P2Page_34</h2>
    </>
  );
};
export default P2Page_34;
