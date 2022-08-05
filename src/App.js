import React from "react";
import News from "./Components/News";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";

const App = () => {

  return (
    
    <div className="container mx-auto">
    
      <Search />
      <Pagination />
      <News />

    </div>


  );
};

export default App;
