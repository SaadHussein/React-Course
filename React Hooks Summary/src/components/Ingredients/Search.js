import React, { useEffect, useState, useRef } from "react";
import useHttp from "../../hooks/http";
import Card from "../UI/Card";
import "./Search.css";
import ErrorModal from "../UI/ErrorModal";

const Search = React.memo((props) => {
  const { onLoadedIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, error, data, sendRequest, clear } = useHttp();

  useEffect(() => {
    console.log(enteredFilter);
    const timer = setTimeout(() => {
      console.log(enteredFilter);
      console.log(inputRef.current.value);
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          "https://react-hooks-update-41854-default-rtdb.firebaseio.com/ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadedIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadedIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
