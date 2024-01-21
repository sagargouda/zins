import Restcard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.019677&lng=76.111056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setlistofRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // conditional rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              // filtering restaurant card and updating ui

              const filteredSearch = listOfRestaurants.filter((rest) => {
                return (
                  // searchText.toLowerCase() === rest.info?.name.toLowerCase()
                  rest.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
              });

              if (filteredSearch.length > 0) {
                setFilteredRest([...filteredSearch]);
              } else {
                console.log("no matching restaurants");
                setFilteredRest([]);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="search-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info?.avgRating > 4.2;
            });
            // setlistofRestaurants(filteredList);
            setFilteredRest(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Button
        </button>
      </div>
      {/*  when i don't find a restaurant */}
      {filteredRest.length === 0 && <h1>Restaurant doesn't exist</h1>}

      <div className="body">
        {/* top rated thing here */}

        {/* restaurant card here  */}
        {filteredRest.map((resCard) => (
          <Restcard key={resCard.info.id} resData={resCard}></Restcard>
        ))}
      </div>
    </>
  );
}

export default Body;
