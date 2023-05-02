import { useSelector, useDispatch } from "react-redux";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";
import {
  setIsCartOpen,
  increaseItemCount,
  decreaseItemCount,
  removeFromCart,
} from "../../state";
import { useNavigate } from "react-router-dom";

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  const FlexBox = ({ children }) => {
    return <div className="flex items-center justify-between ">{children}</div>;
  };

  return (
    <div
      className={
        isCartOpen
          ? `block bg-black/40 fixed z-10 top-0 w-full h-full overflow-auto`
          : `hidden`
      }
    >
      {/* Modal TODO: MAX WIDTH*/}
      <div className="fixed right-0 bottom-0 w-[400px] h-full bg-white">
        <div className="p-[30px] overflow-auto h-full">
          {/* Header */}
          <FlexBox className="mb-[15px]">
            <p className="text-lg font-bold">SHOPPING BAG ({cart.length})</p>
            <button onClick={() => dispatch(setIsCartOpen({}))}>
              <MdClose />
            </button>
          </FlexBox>

          {/* Cart list */}
          <div>
            {cart.map((item) => (
              <div key={`${item.attributes.name}-${item.id}`}>
                <FlexBox className="py-[15px] px-[0px]">
                  <div className="flex basis-2/5 grow shrink">
                    <img
                      className="w-[123px] h-[164px]"
                      alt={item?.name}
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </div>

                  {/* ITEM NAME */}
                  <div className="flex basis-3/5 grow shrink">
                    <FlexBox className="mb-[15px]">
                      <p className="font-bold">{item.attributes.name}</p>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <MdClose />
                      </button>
                    </FlexBox>

                    {/*ITEM SHORT DESCRIPTION */}
                    <p>{item.attributes.shortDescription}</p>

                    {/* NUMBER OF ITEMS */}
                    <FlexBox className="my-15px">
                      <div className="flex items-center border-[1.5px]">
                        <button
                          onClick={() =>
                            dispatch(decreaseItemCount({ id: item.id }))
                          }
                        >
                          <MdRemove />
                        </button>
                        <p>{item.count}</p>
                        <button
                          onClick={() =>
                            dispatch(increaseItemCount({ id: item.id }))
                          }
                        >
                          <MdAdd />
                        </button>
                      </div>

                      {/* PRICE */}
                      <p>${item.attributes.price}</p>
                    </FlexBox>
                  </div>
                </FlexBox>
                <div className="divider"></div>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="my-[20px]">
            <FlexBox className="my-[20px]">
              <p className="font-bold">SUBTOTAL</p>
              <p className="font-bold">${totalPrice}</p>
            </FlexBox>
            <button
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
              className="btn min-w-full mt-[20px]"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
