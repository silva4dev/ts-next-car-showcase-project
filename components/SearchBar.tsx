"use client";

import { useState } from "react";
import { SearchManufacturer } from "@/components";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
