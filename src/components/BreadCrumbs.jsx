import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumbs = () => {
  const location = useLocation();
  console.log(location);

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <Link underline="hover" color="inherit" to={currentLink} key={crumb}>
          {crumb}
        </Link>
      );
    });

  return (
    <div className="container py-3 bg-light">
      <div className="row">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            {crumbs}
            {/* <Link underline="hover" color="inherit" href="/">
          test
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography> */}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
