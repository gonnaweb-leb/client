import { useEffect, useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
// import StoreContext from "../hooks/storeContext";
import { NavLink } from "react-router-dom";

function SubCategories({ CatId, subCatId }) {
  // console.log("catId: " + catId);
  // console.log("sub categories - subCatId: " + subCatId);
  const [subCategories, setSubCategories] = useState([]);
  const { data, loading, error } = useFetch(
    "subcategories?populate=*&filters[categories][id][$eq]=" + CatId
  );

  const sortedSubCategories = subCategories.sort((a, b) =>
    a.attributes.title.toLowerCase() > b.attributes.title.toLowerCase() ? 1 : -1
  )

  useEffect(() => {
    data && setSubCategories(data);
  }, [data]);

  return (
    <>
      {error
        ? "Something went wrong:--" + error
        : loading
          ? "Loading SubCategories..."
          : <ul className="collapse show list-unstyled pl-3">
            {
              sortedSubCategories.map((subcategory) => (
                <li key={subcategory.id}>
                  <NavLink
                    to={`/products?${subcategory.attributes.categories.data[0].attributes.title}/${subcategory.attributes.title}`}
                    state={{ CatId: subcategory.attributes.categories.data[0].id, subCatId: subcategory.id, catTitle: subcategory.attributes.categories.data[0].attributes.title, subcatTitle: subcategory.attributes.title }}
                    className={`text-decoration-none
                  ${subcategory.id == subCatId ? "focus" : ""}`}
                    data-subcategory={subcategory.id}
                    id={subcategory.id}
                  // onClick={handleFilterSubcategory}
                  >
                    {subcategory.attributes.title}
                  </NavLink>
                </li>
              ))}
          </ul>
      }
    </>
  );
}

export default SubCategories;
