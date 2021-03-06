import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function DictionaryForm() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
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
      <Results results={results} />
    </div>
  );
}
