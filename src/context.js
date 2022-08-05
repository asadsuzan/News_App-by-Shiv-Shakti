import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

// defining constant

const API = "http://hn.algolia.com/api/v1/search?";

const initilaState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};

// Context creation
const AppContext = React.createContext();

// Provider creation
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initilaState);

  //   fetch data
  const fetchData = (url) => {
    dispatch({ type: "LOADING" })
    axios
      .get(url)
      .then((res) => {
        const { hits, nbPages } = res.data;

        dispatch({
          type: "GET_DATA",
          payload: {
            hits,
            nbPages,
          },

        });

      })
      .catch((error) => window.alert(error.message));
  };

// PAGINATION
// JUMP TO NEXT PAGE 
  const jumpNext = () => dispatch({ type: "NEXT_PAGE" })

//  PAGINATION
//  JUMP TO PREV PAGE
  const jumpPrev = () => dispatch({ type: "PREV_PAGE" })

  // remove news home
  const removeNews = (id) => dispatch({ type: "REMOVE_NEWS", payload: { id } })
  
  // set query for search news 
  const setSearchQuery = (searchQuery) => dispatch({ type: "SEARCH_NEWS", payload: { searchQuery } })
  
  // display news 
  useEffect(() => {
    fetchData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return <AppContext.Provider value={{ ...state, removeNews, setSearchQuery, jumpNext, jumpPrev }}>{children}</AppContext.Provider>;
};

// global context (custom hook)
const useGlobalContext = () =>  useContext(AppContext);


export { AppContext, AppProvider, useGlobalContext };
