import { useState, useEffect } from "react";
import "./App.css";
import { Card, Button, Skeleton } from "./components";
import { Menu, RefreshCw } from "react-feather";
import fetchMeal from "./controller/api-fetch";

function App() {
  const [pagination, setPagination] = useState(6);
  const [meals, setMeals] = useState([]);

  const loadMoreItems = () => {
    const pageNumber =
      meals.length - pagination === 1 ? pagination + 1 : pagination + 2;
    setPagination(pageNumber);
  };

  //
  const fetchItems = async () => {
    const data = await fetchMeal();
    setMeals(data);
  };

  // use effect function to load fetchItems
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <div className="app-logo" />
        <h4>Come Chop</h4>
        <div className="menu-bar">
          <Menu color="#fa9e0d" />
        </div>
      </header>
      <main>
        <div className="content-container">
          {meals.length ? (
            <Card data={meals} pagination={pagination} />
          ) : (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
        </div>
        <div className="bottom-buttons">
          {meals.length !== pagination || meals.length < pagination ? (
            <Button onClick={loadMoreItems}>
              <p>Load More Meal</p>
              <RefreshCw color="white" />
            </Button>
          ) : null}
          <Button text="Learn More" />
        </div>
      </main>
    </div>
  );
}

export default App;
