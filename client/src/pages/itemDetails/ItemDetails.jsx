import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdAdd, MdRemove, MdOutlineFavoriteBorder } from "react-icons/md";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [count, setCount] = useState(1);
  const [value, setValue] = useState("description");
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getItem = async () => {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  };

  //For related products
  const getItems = async () => {
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image`,
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  };

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative top-[60px] w-4/5 mx-auto">
      <div className="flex flex-wrap gap-x-10">
        {/* IMAGE */}
        <div className="shrink grow basis-2/5 mb-10 sm:mb-0">
          <img
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            alt={item?.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* ACTIONS */}
        <div className="shrink grow basis-1/2 mb-10 sm:mb-0">
          <div className="flex justify-between ">
            <div>Home/Item</div>
            <div>Prev Next</div>
          </div>

          <div className="mt-16 mb-6 mx-0">
            <h3 className="text-xl font-bold">{item?.attributes?.name}</h3>
            <p>${item?.attributes?.price}</p>
            <p className="mt-5 text-xs">{item?.attributes?.longDescription}</p>
          </div>

          {/* COUNT AND BUTTONS */}
          <div className="flex items-center min-h-12 justify-normal gap-4">
            <div className="btn btn-outline border-2 border-black flex items-center justify-between  rounded-none py-1  px-3 w-24">
              <button onClick={() => setCount(Math.max(count - 1, 1))}>
                <MdRemove />
              </button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>
                <MdAdd />
              </button>
            </div>
            <button
              className="btn rounded-none"
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
            >
              Add to Cart
            </button>
          </div>
          {/* WISHLIST */}
          <div>
            <div className="flex mt-5 mb-1.25 mx-0 items-center gap-1 cursor-pointer hover:underline">
              <MdOutlineFavoriteBorder />
              <p className="text-xs">ADD TO WISHLIST</p>
            </div>
            <p className="text-xs mt-2">CATEGORIES: {item?.attributes?.category?.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}</p>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="my-5 mx-0">
        <div className="tabs">
          <div 
            className={value === "description" ? `tab tab-active tab-bordered` : `tab tab-bordered`}
            label="DESCRIPTION"
            value='description'
            onClick={() => handleChange(null, "description")}
          >
            Description
          </div>
          <div
            className={value === "reviews" ? `tab tab-active tab-bordered` : `tab tab-bordered`}
            label="REVIEWS"
            value="reviews"
            onClick={() => handleChange(null, "reviews")}
          >
            Review
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        ) }
        {value === "reviews" && <div>No reviews for this item yet.</div>}
      </div>

      {/* RELATED ITEMS */}
      <div className="w-full mt-12 ">
        <h3 className="text-xl font-bold">Related Products</h3>
        <div className="mt-5 sm:flex sm:flex-wrap gap-2 justify-between">
        {items.slice(5, 9).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
