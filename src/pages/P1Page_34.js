const P1Page_34 = () => {
  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
              />
            </form>

            <h4>Company</h4>

            <article className="companies">
              <button className="company-btn">all</button>

              <button className="company-btn">ikea</button>

              <button className="company-btn">marcos</button>

              <button className="company-btn">caressa</button>
            </article>
          </div>
        </div>

        <div className="products-right">
          <div className="products-container">
            <div className="single-product">
              <img
                src="/images/product-10.jpg"
                className="single-product-img img"
                alt="entertainment center"
              />
              <footer>
                <h5 className="name">entertainment center</h5>

                <span className="price">$29.98</span>
              </footer>
            </div>

            <div className="single-product">
              <img
                src="/images/product-5.jpg"
                className="single-product-img img"
                alt="dining table"
              />

              <footer>
                <h5 className="name">dining table</h5>

                <span className="price">$6.99</span>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default P1Page_34;
