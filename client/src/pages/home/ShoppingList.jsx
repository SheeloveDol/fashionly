import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import Item from "../../components/Item";

const ShoppingList = () => {
  const dispatch = useDispatch();

  //Setting value for the filter function
  const [value, setValue] = useState("all");

  const items = useSelector((state) => state.cart.items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log("items", items);

  // Function to get items info from Strapi backend
  const getItems = async () => {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  };

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <div className="w-4/5 my-20 mx-auto">
      <h3 className="text-center text-2xl mb-12 sm:mb-0">
        Featured <b>Products</b>
      </h3>
      <div
        className="hidden sm:block m-12 tabs text-center "
        value={value}
        // onClick={handleChange}
      >
        <p
          label='ALL'
          value="all"
          className={(value === "all") ? `tab tab-active tab-bordered` :`tab tab-bordered`}
          onClick={() => handleChange(null, 'all')}
        >
          ALL
        </p>
        <p
          label="NEW ARRIVALS"
          value="newArrivals"
          className={(value === "newArrivals") ? `tab tab-active tab-bordered` :`tab tab-bordered`}
          onClick={() => handleChange(null, 'newArrivals')}
        >
          NEW ARRIVALS
        </p>
        <p
          label="BEST SELLERS"
          value="bestSellers"
          className={(value === "bestSellers") ? `tab tab-active tab-bordered` :`tab tab-bordered`}
          onClick={() => handleChange(null, 'bestSellers')}
        >
          BEST SELLERS
        </p>
        <p 
            label="TOP RATED" 
            value="topRated" 
            className={(value === "topRated") ? `tab tab-active tab-bordered` :`tab tab-bordered`}
            onClick={() => handleChange(null, 'topRated')}
        >
          TOP RATED
        </p>
      </div>
      <div className="grid grid-cols-300 mx-auto my-0  justify-around gap-x-2 gap-y-5">
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </div>
    </div>
  );
};

export default ShoppingList;
