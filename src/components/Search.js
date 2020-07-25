import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="search"></div>
    </div>
  );
};

export default Search;
