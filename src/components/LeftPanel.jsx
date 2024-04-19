import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import SubCategories from "./SubCategories";
// import StoreContext from "../hooks/storeContext";
import { NavLink, useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";
// import ProductsList from "./ProductsList";

export default function LeftPanel({ subCatId, subcatTitle }) {
  const location = useLocation();
  const { catTitle } = location.state || {};

  // console.log("catTitle: " + catTitle)

  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [categories, setCategories] = useState([]);
  const { data, loading, error } = useFetch("/categories?populate=*");

  useEffect(() => {
    data && setCategories(data);
  }, [data]);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  }, []);

  return (
    <>
      <h1 className="text-dark shadow px-3 py-2 bg-white">
        <b>Products</b>
      </h1>
      {error ? (
        <h2 style={{ color: "red" }}>Something went wrong! {error}</h2>
      ) : loading ? (
        <PageLoader />
      ) : (
        categories.map((category) => (
          <Accordion
            className="mt-3 mb-2 shadow"
            key={category.id}
            expanded={expanded === category.id}
            onChange={handleChange(category.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <img
                className="cat_img"
                src={
                  import.meta.env.VITE_APP_URL +
                  category.attributes.image.data.attributes.url
                }
                alt={category.attributes.description}
              />
            </AccordionSummary>
            <AccordionDetails>
              <NavLink
                to={`/products?${category.attributes.title}`}
                state={{
                  catTitle: category.attributes.title,
                  subcatTitle: "All",
                }}
                className={`text-decoration-none
                  ${catTitle == category.attributes.title &&
                    subcatTitle == "All"
                    ? "focus"
                    : ""
                  }`}
              >
                All
              </NavLink>
              <SubCategories CatId={category.id} subCatId={subCatId} />
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </>
  );
}
