import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "bulma/css/bulma.css";
import Bikes from "./components/Bikes";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Header from "./components/Header";

const App = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bikesPerPage] = useState(10);
  const [filterBikes, setFilterBikes] = useState([]);

  const splitPages = (arr) => {
    console.log(currentPage);
    const indexLastPage = currentPage * bikesPerPage;
    const indexFirtsPage = indexLastPage - bikesPerPage;
    console.log(indexFirtsPage);
    console.log(indexLastPage);
    return arr.slice(indexFirtsPage, indexLastPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`https://bikewise.org:443/api/v2/incidents?`);
      setBikes(res.data.incidents);
      setFilterBikes(splitPages(res.data.incidents));
      setLoading(false);
      console.log(res);
    };

    fetchData();
  }, []);

  const date = new Date().getTime() / 1000;

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setFilterBikes(splitPages(bikes));
  };

  const onSearchText = (textValue) => {
    console.log(bikes);
    const copiedCurrentBikes = [...bikes];
    let filteredBikes;
    if (textValue) {
      filteredBikes = copiedCurrentBikes.filter((value) =>
        value.title.includes(textValue)
      );
    } else {
      filteredBikes = copiedCurrentBikes;
    }
    setFilterBikes(splitPages(filteredBikes));
  };

  return (
    <div className="App">
      <Header />
      description
      <Filter handlerInput={onSearchText} />
      <Bikes bikes={filterBikes} loading={loading} />
      <Pagination
        bikesPerPage={bikesPerPage}
        totalBikes={bikes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
