import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const CustomAccordion = ({ expanded, handleChange, category }) => {
  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary>
        {/* <Typography>{accordionTitle}</Typography> */}
        <img
          className="cat_img"
          src={
            import.meta.env.VITE_APP_URL +
            category.attributes.image.data.attributes.url
          }
          alt={category.attributes.description}
          //   onClick={handleFilterCategory}
        />
      </AccordionSummary>
      <AccordionDetails>
        {category.subcategories &&
          category.subcategories.map((subcategory) => (
            <Typography key={subcategory.id}>{subcategory.name}</Typography>
          ))}
      </AccordionDetails>{" "}
    </Accordion>
  );
};

export default CustomAccordion;
