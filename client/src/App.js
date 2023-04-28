

import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Navbar from "./pages/global/Navbar"
import Home from "./pages/home/Home";
import ItemDetails from "./pages/itemDetails/ItemDetails"
import Checkout from "./pages/checkout/Checkout"
import Confirmation from "./pages/checkout/Confirmation"


// To start from the top of the page when going to a different page
const ScrollToTop = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="item/:itemId" element={<ItemDetails />}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="confirmation" element={<Confirmation />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
