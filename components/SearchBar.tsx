"use client";

import { useState } from "react";

// import SearchManufacturer from "./SearchManufacturer"; // 1 variant
import { SearchManufacturer } from "./"; // 2 variant

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="serachbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
