import { useEffect, useState } from 'react';
import Alert_34 from '../components/Alert_34';
import Product_34 from '../components/Product_34';
import data_34 from './data_34';

const All_Page = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(data_34);

  useEffect(() => {
    const filterProducts = data_34.filter((product) =>
      product.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setProducts(filterProducts);
  }, [searchName]);

  useEffect(() => {
    const filterProducts = data_34.filter((product) =>
      product.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setProducts(filterProducts);
  }, [searchName]);

  const filterItems = (category) => {
    if (category === 'all') {
      setProducts(data_34);
    } else {
      const newProducts = data_34.filter(
        (products) => products.category === category
      );
      setProducts(newProducts);
    }
  };

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const clearAllProducts = () => {
    showAlert(true, 'all products deleted', 'danger');
    setProducts([]);
  };

  const fetchAllProducts = () => {
    // showAlert(true,'empty list','danger');
    setProducts(data_34);
  };

  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input
                type="text"
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
                className="search-input"
                placeholder="search..."
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button
                className="company-btn"
                onClick={() => filterItems('all')}
              >
                All
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems('mercedes')}
              >
                Mercedes-Banz
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems('bmw')}
              >
                BMW
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems('audi')}
              >
                AUDI
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems('porsche')}
              >
                Porsche
              </button>
            </article>
          </div>
          <button className="clear-btn" onClick={clearAllProducts}>
            Clear All
          </button>
          <button className="fetch-btn" onClick={fetchAllProducts}>
            Fetch All
          </button>
        </div>
        {alert.show && <Alert_34 {...alert} removeAlert={showAlert} />}
        <div className="products-right">
          <div className="products-container">
            {products.map((products) => {
              const { id, img, name, price } = products;
              return (
                <Product_34 key={id} img={img} name={name} price={price} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default All_Page;
