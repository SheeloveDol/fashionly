import { useNavigate } from "react-router-dom";
import { MdPersonOutline, MdOutlineShoppingBag, MdOutlineSearch, MdOutlineMenu } from "react-icons/md";
import { SlUser } from "react-icons/sl"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-center h-[60px] w-full fixed top-0 left-0 z-1 bg-white/95 border border-red-300">
      <div 
        className="border border-blue-500  flex w-4/5 m-auto justify-between items-center">
        <div onClick={() => navigate("/")} className="cursor-pointer hover">
          Fashionly
        </div>
        <div className="border flex justify-between gap-5 z-2">
          <MdOutlineSearch className="hover cursor-pointer"/>
          <MdPersonOutline className="hover cursor-pointer"/>
          <MdOutlineShoppingBag className="hover cursor-pointer"/>
          <MdOutlineMenu className="hover cursor-pointer"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
