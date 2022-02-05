import React, { useState } from "react";

export default function DictionaryForm() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionaryForm">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
        <button>Search</button>
      </form>
    </div>
  );
}
