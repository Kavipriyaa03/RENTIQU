// //Women.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ProductList.css';
// import women1 from './Womenimg/dress-1.webp';
// import women2 from './Womenimg/pic-2.webp';
// import women3 from './Womenimg/pic-3.webp';
// import women4 from './Womenimg/saree-1.webp';
// import women5 from './Womenimg/salwaar-1.webp';
// import women6 from './Womenimg/lehanga-3.webp';
// import women7 from './Womenimg/saree-2.webp';
// import women8 from './Womenimg/gown-2.webp';

// // Sample product data
// const products = [
//   { id: 1, name: 'Pink Lehenga', image: women1, price: 4500, category: 'Lehenga', color: 'pink', size: '30', occasion: 'Wedding' },
//   { id: 2, name: 'Blue  Gown', image: women2, price: 3200, category: 'Gown', color: 'blue', size: '32', occasion: 'Wedding' },
//   { id: 3, name: 'Black Anarkali', image: women3, price: 3600, category: 'Anarkali', color: 'black', size: '34', occasion: 'Wedding' },
//   { id: 4, name: 'Onion Pink Saree', image: women4, price: 3100, category: 'Saree', color: 'pink', size: '30', occasion: 'Party' },
//   { id: 5, name: 'Seagreen Salwar', image: women5, price: 2200, category: 'Salwar', color: 'seagreen', size: '32', occasion: 'Casual' },
//   { id: 6, name: 'Rani Lehenga', image: women6, price: 3500, category: 'Lehenga', color: 'pink', size: '30', occasion: 'Wedding' },
//   { id: 7, name: 'Golden Saree', image: women7, price: 5900, category: 'Saree', color: 'gold', size: '34', occasion: 'Festive' },
//   { id: 8, name: 'Babypink Gown', image: women8, price: 3400, category: 'Gown', color: 'pink', size: '36', occasion: 'Wedding' },
// ];

// // Function to filter products based on selected criteria
// const filterProductsByCriteria = (product, filters) => {
//   const { category, price, color, size, occasion } = filters;

//   // Define price ranges
//   const priceRanges = {
//     '1000-2000': [1000, 2000],
//     '2000-5000': [2000, 5000],
//     '5000-10000': [5000, 10000],
//     '10000-15000': [10000, 15000]
//   };

//   // Check if the product's price is within any selected price range
//   const priceMatch = price.length === 0 || price.some(range => {
//     const [min, max] = priceRanges[range] || [0, Infinity];
//     return product.price >= min && product.price <= max;
//   });

//   // Check other filter criteria
//   const categoryMatch = category.length === 0 || category.includes(product.category);
//   const colorMatch = color.length === 0 || color.includes(product.color);
//   const sizeMatch = size.length === 0 || size.includes(product.size.toString());
//   const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

//   return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
// };

// const ProductList = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
//   // Filter products based on search term
//   const searchProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply additional filters
//   const filteredProducts = searchProducts.filter(product =>
//     filterProductsByCriteria(product, filters)
//   );

//   // Determine which products to display
//   const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

//   return (
//     <div className="products-container">
//       {productsToDisplay.length > 0 ? (
//         productsToDisplay.map(product => (
//           <div className="card" key={product.id}>
//             <div className="imgBx">
//               <img src={product.image} alt={product.name} />
//             </div>
//             <div className="contentBx">
//               <h2>{product.name}</h2>
//               <p>{`₹${product.price} / day`}</p>
//               <Link to={`/product/${product.id}`}>Rent</Link>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;

//  import React, { useState, useEffect } from 'react';
//  import { Link } from 'react-router-dom';
//  import axios from 'axios';
//  import './ProductList.css'; // Updated CSS file for Women
//  import Footer from '../Footer';

//  // Function to filter products based on selected criteria
//  const filterProductsByCriteria = (product, filters) => {
//    const { category, price, color, size, occasion } = filters;

//    // Define price ranges
//    const priceRanges = {
//      '500-1000': [500, 1000],
//      '1000-2000': [1000, 2000],
//      '2000-5000': [2000, 5000],
//      '5000-10000': [5000, 10000],
//      '10000-15000': [10000, 15000]
//    };

//    // Check if the product's price is within any selected price range
//    const priceMatch = price.length === 0 || price.some(range => {
//      const [min, max] = priceRanges[range] || [0, Infinity];
//      return product.price >= min && product.price <= max;
//   });

//    // Check other filter criteria
//    const categoryMatch = category.length === 0 || category.includes(product.category);
//    const colorMatch = color.length === 0 || color.includes(product.color);
//    const sizeMatch = size.length === 0 || size.includes(product.size.toString());
//    const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

//    return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
//  };

// const Women = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
//    const [products, setProducts] = useState([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);

//    useEffect(() => {
//      const fetchProducts = async () => {
//        try {
//          const response = await axios.get('http://localhost:8080/api/womenproducts/women');
//          const productsData = response.data;

//          // Fetch images in parallel with products data
//          const productsWithImages = await Promise.all(productsData.map(async (product) => {
//            try {
//              const imageResponse = await axios.get(`http://localhost:8080/api/womenproducts/women/image/${product.id}`);
//              return {
//                ...product,
//                base64Image: imageResponse.data,
//              };
//            } catch (error) {
//              console.error(`Error fetching image for product ${product.id}:`, error);
//              return product; // Return product without image if there's an error
//            }
//         }));

//          setProducts(productsWithImages);
//          setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
// console.error("Error fetching products:", error);
//       }
//     };

//      fetchProducts();
//   }, []);

//   // Filter products based on search term
//    const searchProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply additional filters
//    const filteredProducts = searchProducts.filter(product =>
//      filterProductsByCriteria(product, filters)
//    );

//    // Determine which products to display
//    const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

//    if (loading) return <p>Loading...</p>;
//    if (error) return <p>Error loading products.</p>;

//    return (
//      <div>
//      <div className="women-products-container"> {/* Updated class name */}
//        {productsToDisplay.length > 0 ? (
//          productsToDisplay.map(product => (
//            <div className="women-card" key={product.id}> {/* Updated class name */}
//              <div className="men-imgBx"> {/* Updated class name */}
//                <img src={`data:image/jpeg;base64,${product.base64Image}`} alt={product.name} />
//              </div>
//              <div className="contentBx"> {/* Updated class name */}
//                <h2>{product.name}</h2>
//                <p>{`₹${product.price} / day`}</p>
//               <Link to={`/product/${product.id}`}>Rent</Link>
//            </div>
//            </div>
//         ))
//       ) : (
//       <p>No products available</p>
//       )}
//     </div>
    
//     </div>
//    );
//  };

// export default Women;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'; // Updated CSS file for Women
import Footer from '../Footer';

// Function to filter products based on selected criteria
const filterProductsByCriteria = (product, filters) => {
  const { category, price, color, size, occasion } = filters;

  // Define price ranges
  const priceRanges = {
    '500-1000': [500, 1000],
    '1000-2000': [1000, 2000],
    '2000-5000': [2000, 5000],
    '5000-10000': [5000, 10000],
    '10000-15000': [10000, 15000]
  };

  // Check if the product's price is within any selected price range
  const priceMatch = price.length === 0 || price.some(range => {
    const [min, max] = priceRanges[range] || [0, Infinity];
    return product.price >= min && product.price <= max;
  });

  // Check other filter criteria
  const categoryMatch = category.length === 0 || category.includes(product.category);
  const colorMatch = color.length === 0 || color.includes(product.color);
  const sizeMatch = size.length === 0 || size.includes(product.size.toString());
  const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

  return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
};

const Women = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/womenproducts/women');
        const productsData = response.data;

        // Fetch images in parallel with products data
        const productsWithImages = await Promise.all(productsData.map(async (product) => {
          try {
            const imageResponse = await axios.get(`http://localhost:8080/api/womenproducts/women/image/${product.id}`);
            return {
              ...product,
              base64Image: imageResponse.data,
            };
          } catch (error) {
            console.error(`Error fetching image for product ${product.id}:`, error);
            return product; // Return product without image if there's an error
          }
        }));

        setProducts(productsWithImages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  const searchProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply additional filters
  const filteredProducts = searchProducts.filter(product =>
    filterProductsByCriteria(product, filters)
  );

  // Determine which products to display
  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div>
      <div className="women-products-container"> {/* Updated class name */}
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map(product => (
            <div className="women-card" key={product.id}> {/* Updated class name */}
              <div className="imgBx"> {/* Updated class name */}
                <img src={`data:image/jpeg;base64,${product.base64Image}`} alt={product.name} />
              </div>
              <div className="contentBx"> {/* Updated class name */}
                <h2>{product.name}</h2>
                <p>{`₹${product.price} / day`}</p>
                <Link to={`/product/${product.id}`}>Rent</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Women;
