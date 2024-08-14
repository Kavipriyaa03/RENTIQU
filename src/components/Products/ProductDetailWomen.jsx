import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './ProductDetailWomen.css';

// Mock products data
// const products = [
//   {
//     id: 1,
//     name: 'Yellow Lehenga',
//     price: 1000,
//     description: 'A stunning yellow lehenga perfect for weddings and festive occasions. Made from high-quality fabric, it features intricate embroidery and a modern silhouette.',
//     images: [
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836902727_FM3668-3_1.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836904176_FM3668-3_3.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836904927_FM3668-3_4.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836905634_FM3668-3_5.jpg',
//     ],
//   },
//   {
//     id: 2,
//     name: 'Wine Sparkling Gown',
//     price: 1200,
//     description: 'Net-fabricated, wine-colored, shimmery gown featuring sequin work all over.',
//     images: [
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836852171_FM3645-1_1.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836852886_FM3645-1_2.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836853561_FM3645-1_3.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836854955_FM3645-1_5.jpg'
//     ],
//   },
//   {
//     id: 3,
//     name: 'Golden Anarkali',
//     price: 600,
//     description: 'Thread and stone embroidered golden anarkali with dupatta.',
//     images: [
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721837875745_FM4042-2_1.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721837877404_FM4042-2_3.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721837878264_FM4042-2_4.jpg',
//       'https://dhb8p39s5y2g5.cloudfront.net/rib/1721837878966_FM4042-2_5.jpg'
//     ],
//   },
//   {
//     id: 4,
//     name: 'Royal Blue Strappy Flowy Gown',
//     price: 1100,
//     description: ' Royal blue strappy gown with a full flowy base which is stylish yet comfortable. Comes with a long trail.',
//     images: [
//       '//www.thestylease.com/cdn/shop/products/Royalbluestrappyflowygown1.jpg?v=1617648693',
//       '//www.thestylease.com/cdn/shop/products/Royalbluestrappyflowygown2_1200x.jpg?v=1617648693',
//       '//www.thestylease.com/cdn/shop/products/Royalbluestrappyflowygown3.jpg?v=1617648693',
//       '//www.thestylease.com/cdn/shop/products/Royalbluestrappyflowygown4_1.jpg?v=1617648693'
//     ],
//   },
//   {
//     id: 5,
//     name: 'Pink Threadwork Georgette Saree',
//     price: 1200,
//     description: 'This pink Georgette saree features threadwork embroidery, an unstitched blouse, and the Rentique promise of premium quality.',
//     images: [
//       '//www.koskii.com/cdn/shop/files/koskii-pink-threadwork-georgette-designer-saree-saus0032422_pink_5_1800x1800.jpg?v=1695998497',
//       '//www.koskii.com/cdn/shop/files/koskii-pink-threadwork-georgette-designer-saree-saus0032422_pink_6_1800x1800.jpg?v=1695234515',
//       '//www.koskii.com/cdn/shop/files/koskii-pink-threadwork-georgette-designer-saree-saus0032422_pink_3_1800x1800.jpg?v=1695234515',
//       '//www.koskii.com/cdn/shop/files/koskii-pink-threadwork-georgette-designer-saree-saus0032422_pink_2_1800x1800.jpg?v=1695234514'
//     ],
//   },
//   {
//     id: 6,
//     name: 'Cotton Smocked Midi Dress',
//     price: 500,
//     description: 'This  midi dress offers a timeless look with its smocked bodice and flowy skirt.Add a striped cardigan for a casual yet sophisticated touch.',
//     images: [
//       'https://pc-ap.rtrcdn.com/productimages/front/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080',
//       'https://pc-ap.rtrcdn.com/productimages/back/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080',
//       'https://pc-ap.rtrcdn.com/productimages/side/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080',
//       'https://pc-ap.rtrcdn.com/productimages/editorial/1080x/a7/CLUB238.jpg?auto=webp&optimize=medium&width=1080'
//     ],
//   },
//   {
//     id: 7,
//     name: 'Orange Banarasi Cotton Readymade Salwar Suit',
//     price: 900,
//     description: 'This orange cotton salwar suit features Banarasi embroidery and comes with a matching bottom and dupatta.',
//     images: [
//       '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_7_1800x1800.jpg?v=1720443115',
//       '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_4_1800x1800.jpg?v=1720443115',
//       '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_2_1800x1800.jpg?v=1720443115',
//       '//www.koskii.com/cdn/shop/files/koskii-orange-banarasi-cotton-designer-salwar-suit-ssrm0035306_orange_1_3_1800x1800.jpg?v=1720443115'
//     ],
//   },
//   {
//     id: 8,
//     name: 'Sky Blue Threadwork Net Readymade Lehenga',
//     price: 1200,
//     description: 'This sky blue net lehenga features threadwork embroidery and comes with a ready-made blouse and dupatta.',
//     images: [
//       '//www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_6_1800x1800.jpg?v=1720700300',
//       'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_8_900x.jpg?v=1720700299',
//       'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_7_900x.jpg?v=1720700300',
//       'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-net-designer-readymadelehenga-gcrm0034897_sky_blue_1_3_900x.jpg?v=1720700300'
//     ],
//   },

  
//   // Add other products with their respective images and descriptions
// ];

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


const ProductDetailWomen = ({ onAddToCart }) => {
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
  const [showNotification, setShowNotification] = useState(false);


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

  // const handleRentNow = () => {
  //   let message = '';
  //   if (!selectedSize && !startDate) {
  //     message = 'Please select a size and start date.';
  //   } else if (!selectedSize) {
  //     message = 'Please select a size.';
  //   } else if (!startDate) {
  //     message = 'Please select a start date.';
  //   }

  //   if (message) {
  //     setValidationMessage(message);
  //     return;
  //   }

  //   if (product) {
  //     const rentalCost = product.price * rentalDays;
  //     const securityDeposit = product.price * 4 * 0.8; // 50% of 4 days rental cost
  //     const totalCost = rentalCost + securityDeposit;

  //     const item = {
  //       name: product.name,
  //       image: currentImage,
  //       price: product.price,
  //       days: rentalDays,
  //       size: selectedSize,
  //       startDate,
  //       endDate,
  //       totalCost,
  //       securityDeposit,
  //     };

  //     onAddToCart(item);
  //     setIsModalOpen(true);  // Show the modal
  //   }
  // };

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
      setShowNotification(true);  // Show the pop-up notification
      setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
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
        <div className="action-buttons">
          <button className="rent-now" onClick={handleRentNow}>Rent Now</button>
        </div>
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

      {showNotification && (
        <div className="notification-popup">
          <p>Product added to cart successfully!</p>
        </div>
      )}
      
    </div>
  );
};

export default ProductDetailWomen;