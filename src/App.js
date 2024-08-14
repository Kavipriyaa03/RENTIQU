// // App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Login from './components/Login/Login';
import Terms from './components/Terms';
//import Contactus from './components/Contactus';
import Privacy from './components/Privacy';
import Return from './components/Return';
import Contactus from './components/Contactus';
//import Form from './components/Form';
import SellWithUs from './components/SellWithUs';
import Faq from './components/Faq';
//import Review from './components/Review';
//import Charity from './components/Charity/Charity';
import ProductsList from './components/Women/ProductList';
import FilterSidebar from './components/Women/FilterSidebar';
import Slider from './components/Women/Slider';
//import ProductDetail from './components/ProductDetail';
//import { CartProvider } from './components/CartContext'; // Ensure the correct path
import FilterSidebarMen from './components/Men/FilterSidebarMen';
import Men from './components/Men/Men';
import SliderMen from './components/Men/SliderMen';
import ProductDetailMen from './components/Products/ProductDetailMen';
import ProductDetailWomen from './components/Products/ProductDetailWomen';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import Groomsmen from './components/Groomsmen/Groomsmen';
import SliderGroomsmen from './components/Groomsmen/SliderGroomsmen';
import ProductDetailGroomsmen from './components/Products/ProductDetailGroomsmen';
import Bridesmaid from './components/Bridesmaid/Bridesmaid';
import SliderBridesmaid from './components/Bridesmaid/SlideBridesmaid';
import ProductDetailBridesmaid from './components/Products/ProductDetailBridesmaid';
import ProductDetailExclusives from './components/Products/ProductDetailExclusives';
import Exclusives from './components/Exclusives/Exclusives';
import SliderExclusives from './components/Exclusives/SliderExclusives';
//import Wishlist from './components/Wishlist';
import Footer from './components/Footer';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminWomenProducts from './components/Admin/AdminWomenProducts';
import AdminMenProducts from './components/Admin/AdminMenProducts';
import AdminBridesmaidProducts from './components/Admin/AdminBridesmaidProducts';
import AdminGroomsmenProducts from './components/Admin/AdminGroomsmenProducts';
import AdminExclusivesProducts from './components/Admin/AdminExclusivesProducts';


const AppContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    color: [],
    size: [],
    occasion: []
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [username, setUsername] = useState(null);
  const location = useLocation();

  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
};

const handleRemoveFromWishlist = (index) => {
    const newWishlistItems = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(newWishlistItems);
};
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
};

const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
};


  useEffect(() => {
    if (location.state?.category) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: [location.state.category]
      }));
    }
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
  }

  if (location.state?.username) { // Update username from login
      setUsername(location.state.username);
  }

    
  }, [location.state]);

  const showNavbarAndFooter = !["/login","/adm","/admin/men","/admin/women","/admin/bridesmaid","/admin/groomsmen","/admin/exclusives"].includes(location.pathname);

  return (
    <div>
      {showNavbarAndFooter && <Navbar onSearch={setSearchTerm} username={username} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<Aboutus />} />
        {/* <Route path='/review' element={<Review />} />*/}
        {/*<Route path='/contact' element={<Contactus />} />*/}
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/return' element={<Return />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/aboutus' element={<Aboutus />} />
       {/* <Route path='/men' element={<Men />} />*/}
        <Route path='/sell' element={<SellWithUs />} />
        <Route path='faq' element={<Faq />} />
        {/*<Route path='/charity' element={<Charity />} />*/}
        <Route path='/terms' element={<Terms />} />
        <Route path='/women' element={
          <>
            <Slider />
            <div style={{ display: 'flex', marginTop: '20px' }}>
              <div className="filter-sidebar-container">
                <button 
                  className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
                  onClick={toggleFilter}
                >
                  &#9776;
                </button>
                
                  <FilterSidebar 
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    isOpen={isFilterOpen}
                    onClose={toggleFilter}
                  />
                
              </div>
              <div style={{ flex: 1, paddingLeft: '20px' }}>
                <ProductsList searchTerm={searchTerm} filters={filters} />
              </div>
            </div>
          </>
        } />
 
 <Route path="/men" element={
                    <>
                        <SliderMen />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div className="filter-sidebar-container">
                                <button
                                    className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
                                    onClick={toggleFilter}
                                >
                                    &#9776;
                                </button>
                                {isFilterOpen && (
                                    <FilterSidebarMen
                                        filters={filters}
                                        onFilterChange={handleFilterChange}
                                        isOpen={isFilterOpen}
                                        onClose={toggleFilter}
                                    />
                                )}
                            </div>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Men searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />

<Route path="/groomsmen" element={
                    <>
                        <SliderGroomsmen />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Groomsmen searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />

<Route path="/bridesmaid" element={
                    <>
                        <SliderBridesmaid />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Bridesmaid searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />

<Route path="/exclusives" element={
                    <>
                        <SliderExclusives />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Exclusives searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />

       

        <Route path="/groomsmenproduct/:id" element={<ProductDetailGroomsmen onAddToCart={handleAddToCart} />} />
        <Route path="/bridesmaidproduct/:id" element={<ProductDetailBridesmaid onAddToCart={handleAddToCart} />} />
        <Route path="/exclusivesproduct/:id" element={<ProductDetailExclusives onAddToCart={handleAddToCart} />} />

        <Route path='/product/:id' element={<ProductDetailWomen onAddToCart={handleAddToCart} />} />
        <Route path='/menproduct/:id' element={<ProductDetailMen onAddToCart={handleAddToCart}/>} />
        <Route path='/cart' element={<Cart cartItems={cartItems} onRemoveItem={handleRemoveItem}/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/adm' element={<AdminDashboard/>}/>
        <Route path='/admin/men' element={<AdminDashboard><AdminMenProducts/></AdminDashboard>}/>
        <Route path='/admin/women' element={<AdminDashboard><AdminWomenProducts/></AdminDashboard>}/>
        <Route path='/admin/bridesmaid' element={<AdminDashboard><AdminBridesmaidProducts/></AdminDashboard>}/>
        <Route path='/admin/groomsmen' element={<AdminDashboard><AdminGroomsmenProducts/></AdminDashboard>}/>
        <Route path='/admin/exclusives' element={<AdminDashboard><AdminExclusivesProducts/></AdminDashboard>}/>
         
        {/* <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} onRemoveFromWishlist={handleRemoveFromWishlist} />} /> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

const App = () => {
  return (
    
      <Router>
        <AppContent />
      </Router>
    
  );
};

export default App;

// App.jsx

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminWomenProducts from './components/AdminWomenProducts';
// import WomenProductsList from './components/Women/ProductList';
//  import AdminGroomsmenProducts from './components/AdminGroomsmenProducts';
// // import Groomsmen from './Components/Groomsmen';
// import Bridesmaid from './components/Bridesmaid/Bridesmaid';
// import Exclusives from './components/Exclusives/Exclusives';
// import AdminBridesmaidProducts from './components/AdminBridesmaidProduct';
// import AdminExclusivesProducts from './components/AdminExclusivesProduct';
// import Men from './components/Men/Men';

// const App = () => {
//   return ( 
//         <BrowserRouter>
//         <Routes>
//           {/* Route for the men's products list page */}
//           <Route path="/product" element={<WomenProductsList />} />
//           {/* <Route path="/" element={<Groomsmen />} /> */}
//           <Route path="/bridesmaidproduct" element={<Bridesmaid />} />
//           <Route path="/exclusivesproduct" element={<Exclusives />} />

//           {/* Route for viewing a single product's details */}

//           {/* Route for the admin products management page */}
//           <Route path="/admin/womenproducts" element={<AdminWomenProducts />} />
//           <Route path="/admin/groomsmenproducts" element={<AdminGroomsmenProducts />} />
//           <Route path="/admin/bridesmaidproduct" element={<AdminBridesmaidProducts />} />
//           <Route path="/admin/exclusivesproduct" element={<AdminExclusivesProducts />} />
//           {/* <Route path="/menproduct" element={<Men/>}/> */}
//         <Route path="/men" element={<Men/>}/>
//         </Routes>
//         </BrowserRouter>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminWomenProducts from './components/AdminWomenProducts';
// import WomenProductsList from './components/Women/ProductList';
// import AdminGroomsmenProducts from './components/AdminGroomsmenProducts';
// import Bridesmaid from './components/Bridesmaid/Bridesmaid';
// import Exclusives from './components/Exclusives/Exclusives';
// import AdminBridesmaidProducts from './components/AdminBridesmaidProduct';
// import AdminExclusivesProducts from './components/AdminExclusivesProduct';
// import Men from './components/Men/Men';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* User-facing routes */}
//         <Route path="/product" element={<WomenProductsList />} />
//         <Route path="/bridesmaidproduct" element={<Bridesmaid />} />
//         <Route path="/exclusivesproduct" element={<Exclusives />} />
//         <Route path="/men" element={<Men />} />

//         {/* Admin routes */}
//         <Route path="/admin/womenproducts" element={<AdminWomenProducts />} />
//         <Route path="/admin/groomsmenproducts" element={<AdminGroomsmenProducts />} />
//         <Route path="/admin/bridesmaidproducts" element={<AdminBridesmaidProducts />} />
//         <Route path="/admin/exclusivesproducts" element={<AdminExclusivesProducts />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

