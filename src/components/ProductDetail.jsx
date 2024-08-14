//ProductDetail.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './ProductDetail.css';

// Mock products data
const products = [
  {
    id: 1,
    name: 'Pink Sequins Lycra Lehenga',
    price: 4500,
    description: 'A stunning lycra lehenga perfect for weddings and festive occasions. Made from high-quality fabric, it features intricate embroidery and a modern silhouette.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-pink-sequins-lycra-designer-readymadelehenga-gcrm00327_5_1800x1800.jpg?v=1708953882',
       'https://www.koskii.com/cdn/shop/files/koskii-pink-sequins-lycra-designer-readymadelehenga-gcrm00327_2_1800x1800.jpg?v=1708953882',
       'https://www.koskii.com/cdn/shop/files/koskii-pink-sequins-lycra-designer-readymadelehenga-gcrm00327_6_1800x1800.jpg?v=1708953882',
       'https://www.koskii.com/cdn/shop/files/KOSKII_3_70a2b3bf-879b-487f-83f2-17f917b9b329_1800x1800.jpg?v=1708953882'
   
    ],
  },
  {
    id: 2,
    name: 'Blue Sparkling Gown',
    price: 5200,
    description: 'Net-fabricated, blue-colored, shimmery gown featuring sequin work all over.',
    images: [
      'https://www.koskii.com/cdn/shop/products/koskii-sky-blue-sequins-net-designer-gown-gnrm0022034_sky_blue_6_1800x1800.jpg?v=1662706502',
      'https://www.koskii.com/cdn/shop/products/koskii-sky-blue-sequins-net-designer-gown-gnrm0022034_sky_blue_10_1800x1800.jpg?v=1662706503',
      'https://www.koskii.com/cdn/shop/products/koskii-sky-blue-sequins-net-designer-gown-gnrm0022034_sky_blue_3_1800x1800.jpg?v=1662706502',
      'https://www.koskii.com/cdn/shop/products/koskii-sky-blue-sequins-net-designer-gown-gnrm0022034_sky_blue_7_1800x1800.jpg?v=1662706501'
   
    ],
  },
  {
    id: 3,
    name: 'Seagreen Anarkali',
    price: 3600,
    description: 'Thread and stone embroidered seagreen anarkali without sleeves.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_4_1800x1800.jpg?v=1700136422',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_2_1800x1800.jpg?v=1700136422',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_7_1800x1800.jpg?v=1700136422',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_5_1800x1800.jpg?v=1700136422'
    ],
  },
  {
    id: 4,
    name: 'Onion pink saree',
    price: 4100,
    description: ' Onion pink saree with a full work base which is stylish yet comfortable. Comes with a long trail.',
    images: [
      'https://www.koskii.com/cdn/shop/products/koskii-onion-pink-swarovski-semi-crepe-designer-saree-saus0017318_onion_pink__1_1800x1800.jpg?v=1675058933',
      'https://www.koskii.com/cdn/shop/products/koskii-onion-pink-swarovski-semi-crepe-designer-saree-saus0017318_onion_pink__11_1800x1800.jpg?v=1675058933',
      'https://www.koskii.com/cdn/shop/products/koskii-onion-pink-swarovski-semi-crepe-designer-saree-saus0017318_onion_pink__7_720x.jpg?v=1675058933',
      'https://www.koskii.com/cdn/shop/products/koskii-onion-pink-swarovski-semi-crepe-designer-saree-saus0017318_onion_pink__10_720x.jpg?v=1675058933'
    ],
  },
  {
    id: 5,
    name: 'Seagreen Georgette salwar suit',
    price: 3200,
    description: 'This seagreen Georgette salwar features threadwork embroidery, and the Rentique promise of premium quality.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-stonework-georgette-designer-salwar-suit-ssrm0034972_sea_green_1_3_900x.jpg?v=1718790372',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-stonework-georgette-designer-salwar-suit-ssrm0034972_sea_green_1_10_720x.jpg?v=1718790372',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-stonework-georgette-designer-salwar-suit-ssrm0034972_sea_green_1_2_1800x1800.jpg?v=1718790372',
      'https://www.koskii.com/cdn/shop/files/koskii-seagreen-stonework-georgette-designer-salwar-suit-ssrm0034972_sea_green_1_4_1800x1800.jpg?v=1718790372'


    ],
  },
  {
    id: 6,
    name: 'Rani pink velvet lehanga',
    price: 5500,
    description: 'Embrace elegance with our Rani Pink Velvet Saree, featuring luxurious fabric and intricate detailing. Perfect for special occasions, this saree exudes sophistication and timeless charm.".',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-ranipink-stonework-velvet-designer-readymadelehenga-gcrm0020663_rani_pink_6_1800x1800.jpg?v=1692619653',
      'https://www.koskii.com/cdn/shop/files/koskii-ranipink-stonework-velvet-designer-readymadelehenga-gcrm0020663_rani_pink_4_1800x1800.jpg?v=1692619653',
      'https://www.koskii.com/cdn/shop/files/koskii-ranipink-stonework-velvet-designer-readymadelehenga-gcrm0020663_rani_pink_10_1800x1800.jpg?v=1692619653',
      'https://www.koskii.com/cdn/shop/files/koskii-ranipink-stonework-velvet-designer-readymadelehenga-gcrm0020663_rani_pink_7_1800x1800.jpg?v=1692619653'
    ],
  },
  {
    id: 7,
    name: 'Golden stonework silk saree',
    price: 6900,
    description: 'This lavender based silk saree with embroidery work and comes with a matching stoneworked blouse.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-stonework-softsilk-designer-saree-saus0034136_lavender_wine_1_1_1800x1800.jpg?v=1719839635',
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-stonework-softsilk-designer-saree-saus0034136_lavender_wine_1_2_1800x1800.jpg?v=1715841016',
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-stonework-softsilk-designer-saree-saus0034136_lavender_wine_1_7_1800x1800.jpg?v=1719839635',
      'https://www.koskii.com/cdn/shop/files/koskii-lavender-stonework-softsilk-designer-saree-saus0034136_lavender_wine_1_4_1800x1800.jpg?v=1719839635'
   
    ],
  },
  {
    id: 8,
    name: 'Baby pink cutdana net gown',
    price: 4200,
    description: 'This baby pink cutdana gown features threadwork embroidery and comes with a awesome look.',
    images: [
      'https://www.koskii.com/cdn/shop/files/koskii-babypink-cutdana-net-designer-gown-gnrm0031896_baby_pink_1_1_1800x1800.jpg?v=1722263105',
      'https://www.koskii.com/cdn/shop/files/koskii-babypink-cutdana-net-designer-gown-gnrm0031896_baby_pink_1_7_1800x1800.jpg?v=1713960683',
      'https://www.koskii.com/cdn/shop/files/koskii-babypink-cutdana-net-designer-gown-gnrm0031896_baby_pink_1_6_1800x1800.jpg?v=1722263105',
      'https://www.koskii.com/cdn/shop/files/koskii-babypink-cutdana-net-designer-gown-gnrm0031896_baby_pink_1_4_1800x1800.jpg?v=1715677610',
    ],
  },
  // Add other products with their respective images and descriptions
];

const ProductDetail = ({onAddToCart}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((prod) => prod.id === parseInt(id, 10));

  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalDays, setRentalDays] = useState(4);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);


  
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



  if (!product) 
    return <div>Product not found</div>;
  
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

  

export default ProductDetail;