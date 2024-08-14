import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailExclusives.css';

const products = [
  {
    id: 1,
    name: 'Red Stonework Lehenga',
    price: 5200,
    description: 'An epitome of bridal elegance, this Red Stonework Lehenga features intricate Zari work, a stylish blouse, exuding timeless charm and grandeur.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-red-stonework-net-designer-readymadelehenga-gcss0033273_red_1_9_1800x1800.jpg?v=1710331305',
      'https://www.koskii.com/cdn/shop/files/koskii-red-stonework-net-designer-readymadelehenga-gcss0033273_red_1_1_1800x1800.jpg?v=1710331318',
      'https://www.koskii.com/cdn/shop/files/koskii-red-stonework-net-designer-readymadelehenga-gcss0033273_red_1_5_1800x1800.jpg?v=1710331318',
      'https://www.koskii.com/cdn/shop/files/koskii-red-stonework-net-designer-readymadelehenga-gcss0033273_red_1_7_1800x1800.jpg?v=1710331318'
    ],
  },
  {
    id: 2,
    name: 'Maroon Banaras Saree',
    price: 4200,
    description: 'An epitome of bridal elegance, this Maroon Banaras Saree features intricate Zari work, a stylish blouse, exuding timeless charm and grandeur.',
    images: [
      'https://www.koskii.com/cdn/shop/products/koskii-maroon-zariwork-banarasi-designer-saree-saus0018941_maroon_4_1800x1800.jpg?v=1638376601',
      'https://www.koskii.com/cdn/shop/products/koskii-maroon-zariwork-banarasi-designer-saree-saus0018941_maroon_5_1800x1800.jpg?v=1638376599',
      'https://www.koskii.com/cdn/shop/products/koskii-maroon-zariwork-banarasi-designer-saree-saus0018941_maroon_2_1800x1800.jpg?v=1638376600',
      'https://www.koskii.com/cdn/shop/products/koskii-maroon-zariwork-banarasi-designer-saree-saus0018941_maroon_6_1800x1800.jpg?v=1638376600'
    ],
  },
  {
    id: 3,
    name: 'Grey Cutdana Raw Silk Gown',
    price: 6600,
    description: 'An epitome of bridal elegance, this Grey Cutdana gown features intricate raw silk work, exuding timeless charm and grandeur.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-grey-cutdana-rawsilk-designer-gown-gnrm0032089_grey_1_6_1800x1800.jpg?v=1708086921',
      'https://www.koskii.com/cdn/shop/files/koskii-grey-cutdana-rawsilk-designer-gown-gnrm0032089_grey_1_1_1800x1800.jpg?v=1708086946',
      'https://www.koskii.com/cdn/shop/files/koskii-grey-cutdana-rawsilk-designer-gown-gnrm0032089_grey_1_4_1800x1800.jpg?v=1708086946',
      'https://www.koskii.com/cdn/shop/files/koskii-grey-cutdana-rawsilk-designer-gown-gnrm0032089_grey_1_5_1800x1800.jpg?v=1708086946'
    ],
  },
  // {
  //   id: 4,
  //   name: 'Onion Pink Mirror Saree',
  //   price: 5100,
  //   description: 'An epitome of bridal elegance, this onion pink saree features intricate Mirror work, a stylish blouse, exuding timeless charm and grandeur.',
  //   images: [
  //     'https://www.koskii.com/cdn/shop/files/koskii-onionpink-mirrorwork-silk-designer-saree-saus0034134_onionpink_1_1_1800x1800.jpg?v=1712338447',
  //     'https://www.koskii.com/cdn/shop/files/koskii-onionpink-mirrorwork-silk-designer-saree-saus0034134_onionpink_1_2_1800x1800.jpg?v=1719827220',
  //     'https://www.koskii.com/cdn/shop/files/koskii-onionpink-mirrorwork-silk-designer-saree-saus0034134_onionpink_1_3_1800x1800.jpg?v=1719827220',
  //     'https://www.koskii.com/cdn/shop/files/koskii-onionpink-mirrorwork-silk-designer-saree-saus0034134_onionpink_1_4_1800x1800.jpg?v=1719827220'
  //   ],
  // },
  // Additional products can be added here
];

const ProductDetailExclusives = ({ onAddToCart }) => {
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
      const securityDeposit = product.price * 4 * 0.8; // 50% of 4 days rental cost
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
        securityDeposit,
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
        <p className="security-deposit">Security Deposit: ₹{(product.price * 4) * 0.8}</p>
        <p className="total-cost">Total Cost: ₹{product.price * rentalDays + (product.price * 4) * 0.8}</p>
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

export default ProductDetailExclusives;
