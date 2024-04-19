import "../css/Home.css";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import HomeBanner from "../components/HomeBanner";
import PageLoader from "../components/PageLoader";

const Home = () => {
  window.scrollTo(0, 0);

  const [subCategories, setSubCategories] = useState([]);
  const { data, loading, error } = useFetch("subcategories?populate=*");

  useEffect(() => {
    data && setSubCategories(data);
  }, [data]);

  const SpecialCategories = subCategories.filter((item) => {
    return (
      item.attributes.title == "p20s" ||
      item.attributes.title == "s12" ||
      item.attributes.title == "packages"
    );
  });

  return (
    <div id="HomePage" className="bg-white">
      <HomeBanner />

      <section id="Categeory_Month" className="container py-5">
        <div className="row text-center text-dark pt-3">
          <div className="col-lg-8 m-auto">
            <h1>Same Battery - multiple tools</h1>
            <h4>S12 and P20S batteries used in a wide range of tools</h4>
          </div>
        </div>
        <div className="row">
          {error ? (
            "Something went wrong:--" + error
          ) : loading ? (
            <PageLoader />
          ) : (
            SpecialCategories.map((subCat) => (
              <div key={subCat.id} className="col-12 col-md-4 p-5 mt-3">
                <NavLink
                  to="products"
                  state={{
                    subCatId: subCat.id,
                    catTitle:
                      subCat.attributes.categories.data[0].attributes.title,
                    subcatTitle: subCat.attributes.title,
                  }}
                  className="text-decoration-none"
                >
                  <img
                    alt={subCat.attributes.title}
                    src={
                      import.meta.env.VITE_APP_URL +
                      subCat.attributes.image.data.attributes.url
                    }
                    className="rounded-circle img-fluid border"
                  />
                  <h5 className="text-dark text-center py-3">
                    {subCat.attributes.title}
                  </h5>
                </NavLink>
                <p className="text-center">
                  <NavLink
                    to="products"
                    state={{
                      subCatId: subCat.id,
                      catTitle: subCat.attributes.categories.data[0].attributes.title,
                      subcatTitle: subCat.attributes.title,
                    }}
                    className="text-light btn btn-success-dark"
                  >
                    Go Product
                  </NavLink>
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
