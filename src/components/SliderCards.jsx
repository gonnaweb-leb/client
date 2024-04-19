// import "../css/SliderCards.css";
import Carousal from "@itseasy21/react-elastic-carousel";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import StoreContext from "../hooks/storeContext";
// import { filterProductsBySubcategoryId } from "../hooks/Functions";
import CardSqueleton from "./CardSqueleton";

const SliderCards = ({ subCatId, subcatTitle, productId, relatedProducts, VAT }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 240, itemsToShow: 1, itemsToScroll: 2, pagination: false },
    { width: 300, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 480, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    // { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    // { width: 600, itemsToShow: 4 },
    // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    // { width: 1450, itemsToShow: 5 },
    // { width: 1750, itemsToShow: 6 },
  ];
  const { products, loading, error } = useContext(StoreContext);
  // const VAT = settings && settings[0].attributes.generals.vat


  return (
    <Carousal
      breakPoints={breakPoints}
    // onResize={(currentBreakPoint) => console.log(currentBreakPoint)}
    >
      {error ? (
        "Something went wrong:--" + error
      ) : loading ? (
        // <PageLoader />
        <CardSqueleton
          count={5}
          col_md_size="col-11"
        />
      ) : (
        relatedProducts.map((product) => (
          <ProductCard
            col_md_size={"col-11"}
            key={product.id}
            id={product.id}
            subCatId={
              subCatId ? subCatId : product.attributes.subcategories.data[0].id
            }
            subcatTitle={subcatTitle}
            isNew={product.attributes.isNew}
            isNew_expiredDate={product.attributes.isNew_expiredDate}
            industrial={product.attributes.industrial}
            url={product.attributes.image.data.attributes.url}
            small_description={product.attributes.small_description}
            title={product.attributes.title}
            code={product.attributes.code}
            price={product.attributes.price}
            VAT={VAT}
            discount={product.attributes.discount}
          />
        ))
      )}
    </Carousal>
  );
};
export default SliderCards;
