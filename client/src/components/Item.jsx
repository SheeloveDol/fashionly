import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { MdAdd, MdRemove } from "react-icons/md";
import { addToCart,  } from '../state';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, width }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const { category, price, name, image } = item.attributes;
    const {
        data: {
          attributes: {
            formats: {
              medium: { url },
            },
          },
        },
      } = image;

  return (
    <div width={width}>
      <div 
        className='relative'
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img 
            className='w-[300px] h-[400px] cursor-pointer'
            alt={item.name}
            scr={`http://localhost:1337${url}`}
            onClick={() => navigate(`/item/${item.id}`)}
        />
        <div
            className={isHovered ? `block absolute bottom-[10%] left-0 w-full px-[5%]` : `hidden`} 
        >
            <div
                className='flex justify-between'
            >   
                <div
                className='flex items-center rounded-[3px]'
                >
                    <button onClick={() => setCount(Math.max(count - 1, 1))}>
                        <MdRemove />
                    </button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>
                        <MdAdd />
                    </button>
                </div>
                <button
                    className='text-white bg-primary-300'
                    onClick={() => {
                        dispatch(addToCart({ item: {...item, count}}))
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
      </div>
      <div className='mt-[3px]'>
        <p>
            {category
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
        </p>
        <p>{name}</p>
        <p className='font-bold'>${price}</p>
      </div>
    </div>
  );
};

export default Item
