import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  useEffect(() => {
    setTimeout(() => {
      navigate("/products");
    }, 2000);
  });

  return (
    <section className="container py-5">
      <div className="row text-center text-dark pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Ooops! Page doesn't exist!</h1>
          <p>
            Go to <Link>Homepage</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
