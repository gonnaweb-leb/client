import { useContext, useEffect, useState } from "react";
import StoreContext from "../hooks/storeContext";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Search = () => {
  const { products, loading, error } = useContext(StoreContext);
  const [input, setInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  // useEffect(
  //   (input) => {
  //     input && setInput(input);
  //   },
  //   [input]
  // );

  // console.log("search products: " + products + loading + error);

  const handleChange = (value) => {
    setInput(value);
    // const searchWorld = value;
    const results = products.filter((product) => {
      return (
        product.attributes.code.toLowerCase().includes(value.toLowerCase()) ||
        product.attributes.title.toLowerCase().includes(value.toLowerCase()) ||
        (product.attributes.small_description &&
          product.attributes.small_description
            .toLowerCase()
            .includes(value.toLowerCase())) ||
        product.attributes.full_description
          .toLowerCase()
          .includes(value.toLowerCase())
      );
    });

    if (value === "") {
      setSearchResults([]);
    } else {
      setSearchResults(results);
    }
  };

  const clearInput = () => {
    setSearchResults([]);
    setInput("");
  };
  return (
    <>
      <div className="searchBox d-lg-3 flex-sm-fill mt-3 mb-4 col-sm-auto pr-3">
        <div className="input-group">
          <input
            type="text"
            value={input}
            className="form-control"
            // id="inputMobileSearch"
            placeholder="Search ..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="input-group-text">
            {input == "" ? (
              <i className="fa fa-fw fa-search"></i>
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {searchResults.length ? (
          <div className="search_results">
            <ul className="result_data">
              {searchResults.map((result) => {
                return (
                  <li className="" key={result.id}>
                    <Link
                      to={`/${result.title}`}
                      state={{ id: result.id }}
                      className="nav-link"
                    >
                      {/* <div className="d-flex flex-row justify-content-between align-items-center p-2 rounded"> */}
                      <div className="justify-content-between align-items-center p-2 rounded">
                        <div className="mr-1">
                          <img
                            className="rounded"
                            src={
                              import.meta.env.VITE_APP_URL +
                              result.attributes.image.data.attributes.url
                            }
                            width="50"
                          />
                        </div>
                        <div className="align-items-center qty mt-2">
                          <h6 className="text-dark">
                            {result.attributes.code}
                          </h6>
                          <h6 className="text-dark ml_r-2">
                            {/* {"-"} */}
                          </h6>
                          <h6 className="text-dark">
                            {result.attributes.title}
                          </h6>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Search;
