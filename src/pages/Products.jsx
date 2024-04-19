import { useContext, useState } from "react";
// import { useFetch } from "../hooks/useFetch";
import StoreContext from "../hooks/storeContext";
import FilterProducts from "../components/FilterProducts";
import ProductCard from "../components/ProductCard";
import LeftPanel from "../components/LeftPanel";
import { useLocation } from "react-router-dom";
// import PageLoader from "../components/PageLoader";
import { filterProductsBySubcategoryId } from "../hooks/Functions";


// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import CardSqueleton from "../components/CardSqueleton";


const Products = () => {
  // window.scrollTo(0, 0);
  const { products, loading, error, settings } = useContext(StoreContext);


  const location = useLocation();
  // const { CatId } = location.state || {};
  const { catTitle } = location.state || {};
  const { subCatId } = location.state || {};
  const { subcatTitle } = location.state || {};

  // Filtered
  const [filterItem, setFilterItem] = useState("All");
  // const [filteredProductsG, setFilteredProductsG] = useState([]);

  const groupByIngco = products.filter((product) => {
    return product.attributes.categories.data[0].attributes.title === "ingco";
  });

  const groupByDahua = products.filter((product) => {
    return product.attributes.categories.data[0].attributes.title === "dahua";
  });

  const filteredProducts = subCatId
    ? filterProductsBySubcategoryId(products, subCatId)
    : products.filter((product) => {
      if (filterItem === "isFeatured") {
        return product.attributes.isFeatured;
      } else if (filterItem === "All" && catTitle == "ingco") {
        return (
          product.attributes.categories.data[0].attributes.title === "ingco"
        );
      } else if (filterItem === "All" && catTitle == "dahua") {
        return (
          product.attributes.categories.data[0].attributes.title === "dahua"
        );
      } else if (filterItem === "All") {
        return product;
      }
    });

  // Sorted
  const [sortItem, setSortItem] = useState("Date_NewToOld");
  const sortedProductList =
    sortItem === "Price_highTolow"
      ? filteredProducts.sort((a, b) => b.attributes.price - a.attributes.price)
      : sortItem === "Price_lowTohigh"
        ? filteredProducts.sort((a, b) => a.attributes.price - b.attributes.price)
        : sortItem === "AtoZ"
          ? filteredProducts.sort((a, b) =>
            a.attributes.title > b.attributes.title ? 1 : -1
          )
          : sortItem === "ZtoA"
            ? filteredProducts.sort((a, b) =>
              a.attributes.title < b.attributes.title ? 1 : -1
            )
            : sortItem === "Date_OldToNew"
              ? filteredProducts.sort((a, b) =>
                a.attributes.createdAt.localeCompare(b.attributes.createdAt)
              )
              : filteredProducts.sort((a, b) =>
                b.attributes.createdAt.localeCompare(a.attributes.createdAt)
              );

  // load more items
  const [loadCount, setLoadCount] = useState(25);
  const visibleProducts = sortedProductList.slice(0, loadCount);

  const handleLoadMore = () => {
    setLoadCount(loadCount + loadCount);
  };

  const VAT = settings && settings[0].attributes.generals.vat

  return (
    <>
      {/* <!-- Start Content --> */}
      <section id="ProductPage" className="bg-light py-2">
        <div className="container mb-3">
          <div className="row">
            <div className="col-lg-3 pb-4 bg-white">
              <LeftPanel
                products={products}
                subcatTitle={subcatTitle}
                subCatId={subCatId}
              />
            </div>
            <div className="col-lg-9  bg-white">
              <div className="d-flex justify-content-between">
                {/* <div className="col-lg-8 col-md-8 col-6"> */}
                <div className="breadcrumbs">
                  <h6 className="fa h6">
                    {catTitle && catTitle
                      ? catTitle + " / " + subcatTitle && subcatTitle
                      : "All"}
                    <small>
                      {" "}
                      (showing {visibleProducts.length} /{" "}
                      {sortedProductList.length})
                    </small>
                  </h6>
                </div>
                <div className="col-lg-3 col-md-3">
                  {/* <div className=""> */}
                  <FilterProducts
                    filterItem={filterItem}
                    setFilterItem={setFilterItem}
                    sortItem={sortItem}
                    setSortItem={setSortItem}
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                {loading ? (
                  // <PageLoader />
                  <CardSqueleton
                    count={5}
                    col_md_size="col-md-3"
                  />
                ) : (
                  visibleProducts.map((product) =>
                    product.attributes.categories.data[0].attributes.title ===
                      "ingco" ? (
                      <ProductCard
                        // setShowMessage={setShowMessage}
                        key={product.id}
                        col_md_size="col-md-3"
                        id={product.id}
                        subCatId={
                          subCatId
                            ? subCatId
                            : product.attributes.subcategories.data[0].id
                        }
                        subcatTitle={subcatTitle}
                        isNew={product.attributes.isNew}
                        industrial={product.attributes.industrial}
                        isNew_expiredDate={product.attributes.isNew_expiredDate}
                        url={product.attributes.image.data.attributes.url}
                        small_description={product.attributes.small_description}
                        title={product.attributes.title}
                        code={product.attributes.code}
                        price={product.attributes.price}
                        VAT={VAT}
                        discount={product.attributes.discount}
                      />
                    ) : null
                  )
                )}

                {visibleProducts.length <= groupByIngco.length &&
                  loadCount < sortedProductList.length ? (
                  <button
                    className="text-light btn btn-success-dark mb-3"
                    onClick={() => handleLoadMore()}
                  >
                    Load More
                  </button>
                ) : null}

                {groupByIngco.length &&
                  groupByDahua.length != 0 &&
                  !catTitle ? (
                  <hr className="px-2" />
                ) : null}

                {sortedProductList.map((product) =>
                  product.attributes.categories.data[0].attributes.title ===
                    "dahua" ? (
                    <ProductCard
                      key={product.id}
                      col_md_size="col-md-3"
                      id={product.id}
                      subCatId={subCatId}
                      subcatTitle={subcatTitle}
                      isNew={product.attributes.isNew}
                      industrial={product.attributes.industrial}
                      isNew_expiredDate={product.attributes.isNew_expiredDate}
                      url={product.attributes.image.data.attributes.url}
                      small_description={product.attributes.small_description}
                      title={product.attributes.title}
                      code={product.attributes.code}
                      price={product.attributes.price}
                      VAT={VAT}
                      discount={product.attributes.discount}
                    />
                  ) : null
                )}

                {visibleProducts.length <= groupByDahua.length && !catTitle ? (
                  <button
                    className="text-light btn btn-success-dark"
                    onClick={() => handleLoadMore()}
                  >
                    Load More
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Products;
