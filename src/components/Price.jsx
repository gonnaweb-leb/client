import { Discounted, CurrencyFormat } from "../hooks/Functions";

const Price = ({ discount, price }) => {

  return (
    <>
      {
        <>
          <span className="Old_Price">{CurrencyFormat(price)}</span>
          <span className="New_Price">
            {CurrencyFormat(Discounted(price, discount))}
          </span>
        </>
      }
    </>
  );
};

export default Price;
