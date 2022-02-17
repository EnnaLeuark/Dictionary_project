import React, { useState } from "react";
import axios from "axios";

export default function DictionaryForm() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
