import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailMen.css';
// Mock products data

const products = [
  {
    id: 1,
    name: 'Cream Sherwani',
    price: 3500,
    description: 'A classic sherwani rendered in tussar silk is elevated with intricate embroidery reminiscent of the geometry and floral.',
    images: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGDW5FXRVXuVfA7WRatMlRLJWlZQXNuGWhbTRTUMLMsZV5Tequ6VKWEYfqMcBWzt1uHLAK8jSUqdcYeaTUXvlRZcXVkrKwugfNjFVzVzsl',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsywBBy6H6jbr4zfHzybtr9Z4wDCkOa_hj8ImBtNynAAvO7DYaE-6G2IP9ehkwHYkT8rrDfOP5cjRHBEWmVks9zU73vv7cLY6WfuRs1G9C',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ97rEpF126V0da7WEVCJ76wkz95zx59vyEvclnvMqA79PA7A0Eomb3KNdeVLWaJ2K3VAFqIl66v4abSQVXnEdqnpZbhbfcXARFgr1C6Tw',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGDW5FXRVXuVfA7WRatMlRLJWlZQXNuGWhbTRTUMLMsZV5Tequ6VKWEYfqMcBWzt1uHLAK8jSUqdcYeaTUXvlRZcXVkrKwugfNjFVzVzsl'
    ],
  },
  {
    id: 2,
    name: 'Pink Shaded Kurta',
    price: 3000,
    description: 'Elevate your formal wardrobe with our kurta in a stunning shade of pink.',
    images: [
      'https://mrbutton.in/cdn/shop/products/26-08-22MRBUTTONDAY200449_1.jpg?v=1665482675&width=540',
      'https://mrbutton.in/cdn/shop/products/26-08-22MRBUTTONDAY200451_1.jpg?v=1665482675&width=1800',
      'https://mrbutton.in/cdn/shop/products/26-08-22MRBUTTONDAY200439_1.jpg?v=1665482675&width=1800',
      'https://mrbutton.in/cdn/shop/products/26-08-22MRBUTTONDAY200448_1.jpg?v=1665482675&width=1800'
    ],
  },

  {
    id: 3,
    name: 'Blue Blazer Set',
    price: 2200,
    description: 'A sleek blue blazer featuring intricate sequin detailing on the lapel, pair it with smart trousers for a sophisticated and stylish look.',
    images: [
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01911.jpg?v=1663849912&width=1800',
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01931.jpg?v=1666264231&width=1800',
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01917.jpg?v=1666264233&width=1800',
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01925.jpg?v=1666264233&width=1800'
    
    ],
  },

  {
    id: 4,
    name: 'Old Gold jacket',
    price: 2600,
    description: 'Elevate your festive wear game with our Old Gold Jacket in a sleek gold shade.',
    images: [
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01309.jpg?v=1665479084&width=1800',
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01327.jpg?v=1665479084&width=1800',
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01332.jpg?v=1663852529&width=1800',
      'https://mrbutton.in/cdn/shop/products/24-08-22DAY_01316.jpg?v=1663852529&width=1800'
    ],
  },

  {
    id: 5,
    name: 'Velvet Partywear shirt',
    price: 2000,
    description: 'Stylish and awesome look in the partywear, ornately detailed with  patterns.',
    images: [
      'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8718_480x.jpg?v=1708952039',
      'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8713_480x.jpg?v=1708952035',
      'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8707_480x.jpg?v=1695896142',
      'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8724_480x.jpg?v=1708952039'
    ],
  },

  {
    id: 6,
    name: 'Dusty Pink Solid Blazer',
    price: 3800,
    description: 'Made with blended rayon fabric this outfit ensures you stay comfortable all along.',
    images: [
      'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image3_1024x1024.jpg?v=1703568494',
      'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image1.jpg?v=1703568488&width=2000',
      'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image2.jpg?v=1703568492&width=2000',
      'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image4.jpg?v=1703568498&width=2000'   
   
    ],
  },

  {
    id: 7,
    name: 'Black Suit',
    price: 3500,
    description: 'Mens carbon black Self Textured Suit',
    images: [
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image1_1024x1024.jpg?v=1706083241',
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image3_1024x1024.jpg?v=1706083249',
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image2_1024x1024.jpg?v=1706083245',
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image4.jpg?v=1706083260&width=2000'
    ],
  },

  {
    id: 8,
    name: 'Pink Formal Suit',
    price: 3900,
    description: 'Immerse yourself in elegance with this solid pink formal suit. The intricate medallion patterns, and antique buttons reflect a seamless blend of tradition and contemporary design.',
    images: [
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image3.jpg?v=1707372182&width=2000',
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image5.jpg?v=1707372191&width=2000',
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image4.jpg?v=1707372187&width=2000',
      'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image7.jpg?v=1707372200&width=2000'
    ],
  },
  // Add other men's products with their respective images and descriptions
];

const ProductDetailMen = ({ onAddToCart, onAddToWishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((prod) => prod.id === parseInt(id, 10));

  const [currentImage, setCurrentImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalDays, setRentalDays] = useState(4);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');


  useEffect(() => {
    if (startDate && rentalDays) {
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + rentalDays);
      setEndDate(end.toISOString().split('T')[0]);
    }
  }, [startDate, rentalDays]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleRentalDaysChange = (e) => {
    setRentalDays(Number(e.target.value));
  };

  const handleSizeChartToggle = () => {
    setIsSizeChartOpen(!isSizeChartOpen);
  };

  const handleRentNow = () => {
    let message = '';
    if (!selectedSize && !startDate) {
      message = 'Please select a size and start date.';
    } else if (!selectedSize) {
      message = 'Please select a size.';
    } else if (!startDate) {
      message = 'Please select a start date.';
    }
  
    if (message) {
      setValidationMessage(message);
      return;
    }



    if (product) {
      const rentalCost = product.price * rentalDays;
      const securityDeposit = product.price * 4 * 0.5; // 50% of 4 days rental cost
      const totalCost = rentalCost + securityDeposit;

      const item = {
        name: product.name,
        image: currentImage,
        price: product.price,
        days: rentalDays,
        size: selectedSize,
        startDate,
        endDate,
        totalCost,
        securityDeposit
      };

      onAddToCart(item);
      navigate('/cart'); // Navigate to the cart page
    }
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-page">
      <div className="product-gallery">
        <img src={currentImage} alt={product.name} className="main-image" />
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
              className={`thumbnail ${image === currentImage ? 'selected-thumbnail' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">Price: ₹{product.price} / day</p>
        <p className="security-deposit">Security Deposit: ₹{(product.price * 4) * 0.5}</p>
        <p className="total-cost">Total Cost: ₹{product.price * rentalDays + (product.price * 4) * 0.5}</p>
        <div className="size-selection">
          <h4>Select Size</h4>
          <div className="sizes">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="check-size">
            <button onClick={handleSizeChartToggle}>Check Size</button>
          </div>
        </div>
        <div className="rental-details">
          <div className="rental-dates">
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              readOnly
            />
          </div>
          <div className="rental-duration">
            <label htmlFor="rental-days">Rental Duration:</label>
            <select id="rental-days" value={rentalDays} onChange={handleRentalDaysChange}>
              <option value={4}>4 days</option>
              <option value={8}>8 days</option>
              <option value={16}>16 days</option>
            </select>
          </div>
        </div>
        {validationMessage && <p className="validation-message">{validationMessage}</p>}
        <button className="rent-now" onClick={handleRentNow}>Rent Now</button>
        <p>Note: You can order this product up to 100 days in advance only.</p>
      </div>

      {isSizeChartOpen && (
        <div className="size-chart-modal">
          <div className="size-chart-content">
            <span className="close-button" onClick={handleSizeChartToggle}>&times;</span>
            <h3>Size Chart</h3>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Bust (inches)</th>
                  <th>Waist (inches)</th>
                  <th>Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>32</td>
                  <td>24</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>34</td>
                  <td>26</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>36</td>
                  <td>28</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>38</td>
                  <td>30</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>40</td>
                  <td>32</td>
                  <td>42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailMen;
// import React, { useState, useEffect } from 'react';
// import { Link,useParams, useNavigate } from 'react-router-dom';
// import './ProductDetailMen.css';
// import WishlistIcon from './wishlist.jpg';
// // Mock products data
// const products = [
//   {
//     id: 1,
//     name: 'Cream Sherwani',
//     price: 3500,
//     description: 'A classic sherwani rendered in tussar silk is elevated with intricate embroidery reminiscent of the geometry and floral.',
//     images: [
//       'https://manyavar.scene7.com/is/image/manyavar/SHOS309_303-Beige.9211_03-12-2023-21-51:650x900',
//        'https://manyavar.scene7.com/is/image/manyavar/SHOS309_303-Beige.9192_03-12-2023-21-50:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/SHOS309_303-Beige.9205_03-12-2023-21-51?wid=1244',
//       'https://manyavar.scene7.com/is/image/manyavar/SHOS309_303-Beige.9215_03-12-2023-21-53:650x900'
//     ],
//   },
//   {
//     id: 2,
//     name: 'Saffari Blue Kurta',
//     price: 3000,
//     description: 'Elevate your formal wardrobe with our kurta in a stunning shade of blue.',
//     images: [
//       'https://manyavar.scene7.com/is/image/manyavar/SDES093_326-Teal%20Blue.4293_22-04-2024-11-42:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/SDES093_326-Teal%20Blue.4281_22-04-2024-11-40:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/SDES093_326-Teal%20Blue.4288_22-04-2024-11-41:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/SDES093_326-Teal%20Blue.4300_22-04-2024-11-43:650x900'
//     ],
//   },

//   {
//     id: 3,
//     name: 'Wine Indowestern Set',
//     price: 2200,
//     description: 'A sleek wine indowestern featuring intricate sequin detailing on the lapel, pair it with smart trousers for a sophisticated and stylish look.',
//     images: [
//       'https://manyavar.scene7.com/is/image/manyavar/IWD0752V-322-Wine.12859_21-03-2024-11-49:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/IWD0752V-322-Wine.12848_21-03-2024-11-45:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/IWD0752V-322-Wine.12866_21-03-2024-11-50:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/IWD0752V-322-Wine.12873_21-03-2024-11-50:650x900'
    
//     ],
//   },

//   {
//     id: 4,
//     name: 'Maroon jacket',
//     price: 2600,
//     description: 'Elevate your party wear game with our Party Wear Shirt in a sleek Wine shade.',
//     images: [
//       'https://manyavar.scene7.com/is/image/manyavar/WC00200_Maroon25081_20-05-2023-10-54:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/WC00200_Maroon25078_20-05-2023-10-53:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/WC00200_Maroon25086_20-05-2023-10-54:650x900',
//       'https://manyavar.scene7.com/is/image/manyavar/WC00200_Maroon25076_20-05-2023-10-53:650x900'
//     ],
//   },

//   {
//     id: 5,
//     name: 'Velvet Partywear shirt',
//     price: 2000,
//     description: 'Stylish and awesome look in the partywear, ornately detailed with  patterns.',
//     images: [
//       'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8718_480x.jpg?v=1708952039',
//       'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8713_480x.jpg?v=1708952035',
//       'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8707_480x.jpg?v=1695896142',
//       'https://thehouseofrare.com/cdn/shop/files/VALVE-NAVY8724_480x.jpg?v=1708952039'
//     ],
//   },

//   {
//     id: 6,
//     name: 'Dusty Pink Solid Blazer',
//     price: 3800,
//     description: 'Made with blended rayon fabric this outfit ensures you stay comfortable all along.',
//     images: [
//       'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image3_1024x1024.jpg?v=1703568494',
//       'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image1.jpg?v=1703568488&width=2000',
//       'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image2.jpg?v=1703568492&width=2000',
//       'https://blackberrys.com/cdn/shop/files/Casual-Blazer-In-Dusty-Pink-Adley-EJCC2219P3BA23FL-image4.jpg?v=1703568498&width=2000'   
   
//     ],
//   },

//   {
//     id: 7,
//     name: 'Black Suit',
//     price: 3500,
//     description: 'Mens carbon black Self Textured Suit',
//     images: [
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image1_1024x1024.jpg?v=1706083241',
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image3_1024x1024.jpg?v=1706083249',
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image2_1024x1024.jpg?v=1706083245',
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Black_Textured_Formal_Suits_Carbon-CPPM2031Z1PS24FL-image4.jpg?v=1706083260&width=2000'
//     ],
//   },

//   {
//     id: 8,
//     name: 'Pink Formal Suit',
//     price: 3900,
//     description: 'Immerse yourself in elegance with this solid pink formal suit. The intricate medallion patterns, and antique buttons reflect a seamless blend of tradition and contemporary design.',
//     images: [
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image3.jpg?v=1707372182&width=2000',
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image5.jpg?v=1707372191&width=2000',
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image4.jpg?v=1707372187&width=2000',
//       'https://blackberrys.com/cdn/shop/files/Three_Piece_Pink_Solid_Formal_Suit_Raylit-CPNM1991P2PS24FL-image7.jpg?v=1707372200&width=2000'
//     ],
//   },
//   // Add other men's products with their respective images and descriptions
// ];

// const ProductDetailMen = ({ onAddToCart, onAddToWishlist }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((prod) => prod.id === parseInt(id, 10));

//   const [currentImage, setCurrentImage] = useState(product?.images[0]);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [rentalDays, setRentalDays] = useState(4);
//   const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
//   const [validationMessage, setValidationMessage] = useState('');


//   useEffect(() => {
//     if (startDate && rentalDays) {
//       const start = new Date(startDate);
//       const end = new Date(start);
//       end.setDate(start.getDate() + rentalDays);
//       setEndDate(end.toISOString().split('T')[0]);
//     }
//   }, [startDate, rentalDays]);

//   const handleThumbnailClick = (image) => {
//     setCurrentImage(image);
//   };

//   const handleSizeClick = (size) => {
//     setSelectedSize(size);
//   };

//   const handleStartDateChange = (e) => {
//     setStartDate(e.target.value);
//   };

//   const handleRentalDaysChange = (e) => {
//     setRentalDays(Number(e.target.value));
//   };

//   const handleSizeChartToggle = () => {
//     setIsSizeChartOpen(!isSizeChartOpen);
//   };

//   const handleRentNow = () => {
//     let message = '';
//     if (!selectedSize && !startDate) {
//       message = 'Please select a size and start date.';
//     } else if (!selectedSize) {
//       message = 'Please select a size.';
//     } else if (!startDate) {
//       message = 'Please select a start date.';
//     }
  
//     if (message) {
//       setValidationMessage(message);
//       return;
//     }



//     if (product) {
//       const rentalCost = product.price * rentalDays;
//       const securityDeposit = product.price * 4 * 0.5; // 50% of 4 days rental cost
//       const totalCost = rentalCost + securityDeposit;

//       const item = {
//         name: product.name,
//         image: currentImage,
//         price: product.price,
//         days: rentalDays,
//         size: selectedSize,
//         startDate,
//         endDate,
//         totalCost,
//         securityDeposit
//       };

//       onAddToCart(item);
//       navigate('/cart'); // Navigate to the cart page
//     }
//   };

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="product-page">
//       <div className="wishlist-icon">
//         <Link to="/wishlist"><img src={WishlistIcon} alt="Wishlist" /></Link>
//         </div>
//       <div className="product-gallery">
//         <img src={currentImage} alt={product.name} className="main-image" />
//         <div className="thumbnail-images">
//           {product.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               onClick={() => handleThumbnailClick(image)}
//               className={`thumbnail ${image === currentImage ? 'selected-thumbnail' : ''}`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-details">
//         <h1>{product.name}</h1>
//         <p>{product.description}</p>
//         <p className="price">Price: ₹{product.price} / day</p>
//         <p className="security-deposit">Security Deposit: ₹{(product.price * 4) * 0.5}</p>
//         <p className="total-cost">Total Cost: ₹{product.price * rentalDays + (product.price * 4) * 0.5}</p>
//         <div className="size-selection">
//           <h4>Select Size</h4>
//           <div className="sizes">
//             {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
//               <button
//                 key={size}
//                 className={`size-button ${selectedSize === size ? 'selected' : ''}`}
//                 onClick={() => handleSizeClick(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//           <div className="check-size">
//             <button onClick={handleSizeChartToggle}>Check Size</button>
//           </div>
//         </div>
//         <div className="rental-details">
//           <div className="rental-dates">
//             <label htmlFor="start-date">Start Date:</label>
//             <input
//               type="date"
//               id="start-date"
//               value={startDate}
//               onChange={handleStartDateChange}
//             />
//             <label htmlFor="end-date">End Date:</label>
//             <input
//               type="date"
//               id="end-date"
//               value={endDate}
//               readOnly
//             />
//           </div>
//           <div className="rental-duration">
//             <label htmlFor="rental-days">Rental Duration:</label>
//             <select id="rental-days" value={rentalDays} onChange={handleRentalDaysChange}>
//               <option value={4}>4 days</option>
//               <option value={8}>8 days</option>
//               <option value={16}>16 days</option>
//             </select>
//           </div>
//         </div>
//         {validationMessage && <p className="validation-message">{validationMessage}</p>}
//         <button className="rent-now" onClick={handleRentNow}>Rent Now</button>
//         <p>Note: You can order this product up to 100 days in advance only.</p>
//       </div>

//       {isSizeChartOpen && (
//         <div className="size-chart-modal">
//           <div className="size-chart-content">
//             <span className="close-button" onClick={handleSizeChartToggle}>&times;</span>
//             <h3>Size Chart</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Size</th>
//                   <th>Bust (inches)</th>
//                   <th>Waist (inches)</th>
//                   <th>Hip (inches)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>XS</td>
//                   <td>32</td>
//                   <td>24</td>
//                   <td>34</td>
//                 </tr>
//                 <tr>
//                   <td>S</td>
//                   <td>34</td>
//                   <td>26</td>
//                   <td>36</td>
//                 </tr>
//                 <tr>
//                   <td>M</td>
//                   <td>36</td>
//                   <td>28</td>
//                   <td>38</td>
//                 </tr>
//                 <tr>
//                   <td>L</td>
//                   <td>38</td>
//                   <td>30</td>
//                   <td>40</td>
//                 </tr>
//                 <tr>
//                   <td>XL</td>
//                   <td>40</td>
//                   <td>32</td>
//                   <td>42</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetailMen;