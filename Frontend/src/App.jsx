import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductList from "./pages/ProductList";
import Pay from "./components/Pay";
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Success from "./components/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />    
        <Route path="/signup" element={user ? <Navigate to="/"/> : <Signup/>} />
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;