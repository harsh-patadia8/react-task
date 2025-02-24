import './App.css';
import AdminDashboard from './components/admin/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/Nav';
import Home from './components/Products/Product';
import Cart from './components/cart/Cart';
import { store } from './redux/Store'
import { Provider } from 'react-redux'
import AdminLogin from './components/admin/AdminLogin';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}

          {/* admin routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* user routes */}
          <Route path='/products' element={<Home />} />
          <Route path="/user/cart" element={<Cart />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
