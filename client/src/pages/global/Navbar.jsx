import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdPersonOutline, MdOutlineShoppingBag, MdOutlineSearch, MdOutlineMenu } from "react-icons/md";
import { setIsCartOpen } from "../../state"

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Accessing cartSlice 
  const cart = useSelector((state) => state.cart.cart);


  return (
    <nav className="flex items-center justify-center h-[60px] w-full fixed top-0 left-0 z-1 bg-white/95 border border-red-300">
      <div 
        className="border border-blue-500  flex w-4/5 m-auto justify-between items-center">
        <div onClick={() => navigate("/")} className="cursor-pointer hover">
          Fashionly
        </div>
        <div className="border flex justify-between gap-5 z-2">
          <button>
            <MdOutlineSearch className="hover cursor-pointer"/>
          </button>
          <button>
            <MdPersonOutline className="hover cursor-pointer"/>
          </button>
          <button onClick={() => dispatch(setIsCartOpen({}))}
            className="border relative"  
          >
            <div className={`absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-1 -right-2 dark:border-gray-900 ${cart.length === 0 ? 'invisible' : 'visible' }`} >{cart.length}</div>
            <MdOutlineShoppingBag className="hover cursor-pointer"/>
          </button>
          <button>
            <MdOutlineMenu className="hover cursor-pointer"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
