import React from "react";

const FilterJobs = ({ updateFilterChoice, filterChoice }) => {
  return (
    <div id="filter-jobs">
      {/* <label className="plainText">Filter by Category:</label> */}
      <div className="iconContainer">
        <i className="fas fa-sort-down"></i>
        <select value={filterChoice} onChange={updateFilterChoice}>
          <option value="">Filter by category</option>
          {/* <option value="">None</option> */}
          <option value="Remote">Remote</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Animals">Animals</option>
          <option value="Children">Children</option>
          <option value="Elderly">Elderly</option>
          <option value="Physically demanding">Physically demanding</option>
          <option value="Misc">Misc</option>
          <option value="Other">Other</option>
          <option value="N/A">N/A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterJobs;
