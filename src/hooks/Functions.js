function Discounted(price, discount) {
  return `${price - (price * discount / 100)}`
}

function PriceTTC(price, VAT) {
  return `${price * (VAT / 10)}`
}

function CurrencyFormat(num) {
  return `$${Math.round(num).toFixed(0)}`;
  // return num.toString().replace(/^[+-]?\d+/, function (int) {
  //   return `$` + int.replace(/(\d)(?=(\d{3})+$)/g,);
  // });
}

function FormatSmallDate(value, locale = "en-GB") {
  return new Date(value).toLocaleDateString(locale);
}

function getCurrentDate(separator = '/') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date < 10 ? `0${date}` : `${date}`}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}

const filterProductsBySubcategoryId = (products, subCatId) => {
  const filteredProducts = Object.keys(products)
    .filter((productId) =>
      products[productId].attributes.subcategories.data.some(
        (subcat) => subcat.id === subCatId
      )
    )
    .map((productId) => products[productId]);
  return filteredProducts;
};


const filterProductsByCategoryId = (products, catId) => {
  const filteredProducts = Object.keys(products)
    .filter((productId) =>
      products[productId].attributes.categories.data.some(
        (subcat) => subcat.id === catId
      )
    )
    .map((productId) => products[productId]);
  return filteredProducts;
};

export {
  PriceTTC,
  Discounted,
  CurrencyFormat,
  FormatSmallDate,
  getCurrentDate,
  filterProductsBySubcategoryId,
  filterProductsByCategoryId
}