import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FilterProducts({
  // eslint-disable-next-line react/prop-types
  filterItem,
  setFilterItem,
  sortItem,
  setSortItem,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [selected, setSelected] = useState("All");
  const [displaySelected, setDisplaySelected] = useState("All");

  //filtered
  // const onChangeHandler = (e) => {
  //   setFilterItem(e.target.id);
  //   setSelected(e.target.id);
  //   setAnchorEl(null);
  //   setDisplaySelected(e.target.name);
  // };

  //Sorted
  const onHandleSorted = (e) => {
    setSortItem(e.target.id);
    setSelected(e.target.id);
    setAnchorEl(null);
    setDisplaySelected(e.target.name);
  };

  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <i className="fa fa-light fa-filter text-dark mr-3">
          <span className="sorting_class_text">Sort by: {displaySelected}</span>
        </i>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* <Typography sx={{ p: 2 }}> */}
        <div className="sorting">
          <label>
            <input
              onChange={onHandleSorted}
              type="radio"
              className="option-input radio"
              name="All Items"
              id="All"
              value={sortItem}
              checked={selected === "All"}
            />
            All Items
          </label>

          {/* <label>
            <input
              onChange={onChangeHandler}
              type="radio"
              className="option-input radio"
              name="Featured"
              id="isFeatured"
              value={filterItem}
              checked={selected === "isFeatured"}
            />
            Featured
          </label> */}

          <label>
            <input
              onChange={onHandleSorted}
              className="option-input radio"
              type="radio"
              name="Alphabet, A to Z"
              id="AtoZ"
              value={sortItem}
              checked={selected === "AtoZ"}
            />
            Alphabet, A to Z
          </label>

          <label>
            <input
              onChange={onHandleSorted}
              className="option-input radio"
              type="radio"
              name="Alphabet, Z to A"
              id="ZtoA"
              value={sortItem}
              checked={selected === "ZtoA"}
            />
            Alphabet, Z to A
          </label>

          <label>
            <input
              onChange={onHandleSorted}
              className="option-input radio"
              type="radio"
              name="Price, low to high"
              id="Price_lowTohigh"
              value={sortItem}
              checked={selected === "Price_lowTohigh"}
            />
            Price, low to high
          </label>

          <label>
            <input
              onChange={onHandleSorted}
              className="option-input radio"
              type="radio"
              name="Price, high to low"
              value={sortItem}
              id="Price_highTolow"
              checked={selected === "Price_highTolow"}
            />
            Price, high to low
          </label>

          <label>
            <input
              onChange={onHandleSorted}
              className="option-input radio"
              type="radio"
              name="Date, old to new"
              id="Date_OldToNew"
              value={sortItem}
              checked={selected === "Date_OldToNew"}
            />
            Date, old to new
          </label>

          <label>
            <input
              onChange={onHandleSorted}
              className="option-input radio"
              type="radio"
              name="Date, new to old"
              id="Date_NewToOld"
              value={sortItem}
              checked={selected === "Date_NewToOld"}
            />
            Date, new to old
          </label>
        </div>
        {/* </Typography> */}
      </Popover>
    </>
  );
}
