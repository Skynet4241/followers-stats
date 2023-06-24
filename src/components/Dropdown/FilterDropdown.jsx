import { useState } from "react";
import { FilterSelectWrap } from "./FilterDropdown.styled";

export const FilterDropdown = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState("show_all");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <FilterSelectWrap>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="show_all">Show All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </FilterSelectWrap>
  );
};
