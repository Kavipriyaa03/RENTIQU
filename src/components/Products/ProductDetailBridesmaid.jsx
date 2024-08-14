import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './ProductDetailBridesmaid.css';

// Mock products data
const products = [
  {
    id: 1,
    name: 'Bottle Green Salwar Suit',
    price: 2000,
    description: 'Beaded mesh, with a shallow U-neckline, U-back, and golden straps. This slim U-line salwar suit is finished with a wide set-on waistband and sheer side cutouts.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-bottlegreen-zariwork-rawsilk-designer-salwar-suit-ssrm0035087_bottle_green_1_3_1800x1800.jpg?v=1718788603',
      'https://www.koskii.com/cdn/shop/files/koskii-bottlegreen-zariwork-rawsilk-designer-salwar-suit-ssrm0035087_bottle_green_1_1_1800x1800.jpg?v=1713782240',
      'https://www.koskii.com/cdn/shop/files/koskii-bottlegreen-zariwork-rawsilk-designer-salwar-suit-ssrm0035087_bottle_green_1_7_1800x1800.jpg?v=1718788603',
      'https://www.koskii.com/cdn/shop/files/koskii-bottlegreen-zariwork-rawsilk-designer-salwar-suit-ssrm0035087_bottle_green_1_5_1800x1800.jpg?v=1718788603'
    ],
  },
  {
    id: 2,
    name: 'Seagreen Tissue Saree',
    price: 3200,
    description: 'Net-fabricated, seagreen-colored, gotapatti tissue saree featuring sequin work all over.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-gotapatti-tissue-designer-saree-saus0033513_seagreen_1_1_1800x1800.jpg?v=1715840519',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-gotapatti-tissue-designer-saree-saus0033513_seagreen_1_3_1800x1800.jpg?v=1719839366',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-gotapatti-tissue-designer-saree-saus0033513_seagreen_1_7_1800x1800.jpg?v=1719839366',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-gotapatti-tissue-designer-saree-saus0033513_seagreen_1_4_1800x1800.jpg?v=1719839366',
    ],
  },
  {
   id: 3,
   name: 'Lavendar Tissue Lehenga',
    price: 600,
    description: 'Thread and stone embroidered lavender colored lehenga with dupatta.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-printed-tissue-designer-readymadelehenga-gcrm0034955_lavender_1_10_1800x1800.jpg?v=1722924480',
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-printed-tissue-designer-readymadelehenga-gcrm0034955_lavender_1_1_1800x1800.jpg?v=1722924479',
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-printed-tissue-designer-readymadelehenga-gcrm0034955_lavender_1_8_1800x1800.jpg?v=1722924479',
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-printed-tissue-designer-readymadelehenga-gcrm0034955_lavender_1_5_1800x1800.jpg?v=1722924479'
    ],
  },
  // {
  //   id: 4,
  //   name: 'Beige Stonework Net Gown',
  //   price: 4100,
  //   description: ' Beige Stonework strappy gown with a full flowy base which is stylish yet comfortable. Comes with a long trail.',
  //   images: [
  //     'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_2_1800x1800.jpg?v=1713960898',
  //     'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_3_1800x1800.jpg?v=1722262405',
  //     'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_8_1800x1800.jpg?v=1722262405',
  //     'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_5_1800x1800.jpg?v=1715677652'
  //   ],
  // },
  // {
  //   id: 5,
  //   name: 'Maroon Zariwork Anarkali',
  //   price: 2200,
  //   description: 'This maroon Zariwork anarkali features threadwork embroidery, a stitched pant, and the Rentique promise of premium quality.',
  //   images: [
  //     'https://www.koskii.com/cdn/shop/files/koskii-maroon-zariwork-rawsilk-designer-salwar-suit-ssrm0035086_maroon_1_7_1800x1800.jpg?v=1718789678',
  //     'https://www.koskii.com/cdn/shop/files/koskii-maroon-zariwork-rawsilk-designer-salwar-suit-ssrm0035086_maroon_1_6_1800x1800.jpg?v=1713782054',
  //     'https://www.koskii.com/cdn/shop/files/koskii-maroon-zariwork-rawsilk-designer-salwar-suit-ssrm0035086_maroon_1_9_1800x1800.jpg?v=1718789680',
  //     'https://www.koskii.com/cdn/shop/files/koskii-maroon-zariwork-rawsilk-designer-salwar-suit-ssrm0035086_maroon_1_5_1800x1800.jpg?v=1718789678'
  //   ],
  // },
 // {
 //   id: 6,
 //   name: 'Cotton Smocked Midi Dress',
 //   price: 500,
 //   description: 'This  midi dress offers a timeless look with its smocked bodice and flowy skirt.Add a striped cardigan for a casual yet sophisticated touch.',
 //   images: [
 //     'https://pc-ap.rtrcdn.com/productimages/front/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080',
 //     'https://pc-ap.rtrcdn.com/productimages/back/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080',
 //     'https://pc-ap.rtrcdn.com/productimages/side/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080',
 //     'https://pc-ap.rtrcdn.com/productimages/editorial/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080'
 //   ],
 // },
 // {
 //   id: 7,
 //   name: 'Orange Banarasi Cotton Readymade Salwar Suit',
 //   price: 900,
 //   description: 'This orange cotton salwar suit features Banarasi embroidery and comes with a matching bottom and dupatta.',
 //   images: [
 //     '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_7_1800x1800.jpg?v=1720443115',
 //     '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_4_1800x1800.jpg?v=1720443115',
 //     '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_2_1800x1800.jpg?v=1720443115',
 //     '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_3_1800x1800.jpg?v=1720443115'
 //   ],
 // },
 // {
 //   id: 8,
 //   name: 'Sky Blue Threadwork Net Readymade Lehenga',
 //   price: 1200,
 //   description: 'This sky blue net lehenga features threadwork embroidery and comes with a ready-made blouse and dupatta.',
 //   images: [
 //     '//www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_6_1800x1800.jpg?v=1720700300',
 //     'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_8_900x.jpg?v=1720700299',
 //     'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_7_900x.jpg?v=1720700300',
 //     'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_3_900x.jpg?v=1720700300'
 //   ],
 // },

  
  // Add other products with their respective images and descriptions
];


const ProductDetailBridesmaid = ({ onAddToCart }) => {
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

export default ProductDetailBridesmaid;
