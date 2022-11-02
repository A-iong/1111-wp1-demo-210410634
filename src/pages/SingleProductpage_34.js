import { Link,useParams } from 'react-router-dom'

import products from '../products_data';

const SingleProduct_34 = () => {

  const{ productId} =useParams();
  console.log('productId', productId);
  console.log('products',products);

  const product = products.find((item) =>item.id === productId );
  console.log('product',product);
  const{image,name} = product;
  return (
    <section className='section product'>
      <img src={image} alt="" />
      <h5>{name}</h5>
      <Link to="./products">bake to product</Link>
    </section>
  );
};

export default SingleProduct_34;
