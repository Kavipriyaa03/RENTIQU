import React, { useState } from 'react';
import Axios from 'axios';
import './SellWithUs.css';
import Footer from './Footer';

const SellWithUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    city: '',
    designer: '',
    productDescription: '',
    outfitSize: '',
    margin: '',
    height: '',
    frontPictures: [],
    labelPicture: [],
    proofOfPurchase: '',
    proofOfPurchaseFile: [],
    productCondition: '',
    worn: '',
    packaging: '',
    originalPrice: '',
    purchaseYear: '',
    offerPrice: '',
    rentOption: ''
  });
 
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };




  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData();
    
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await Axios.post('http://localhost:8080/api/sellwithus/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });


    // Add your form submission logic here
    setSubmitted(true);
    }
    catch(error){
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="us">
    <div className = "sell">
    <div className="sell-with-us-container">
      <h1>SELL WITH US</h1>
      <p>You can now cash in on your wardrobe by listing your designer wear on our website to sell, we charge a 20% commission on all sales.</p>
      {submitted ? (
          <div className="submission-message">
            <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
          </div>
        ) : (
          <form className="sell-with-us-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-full-name">
                <label>Full Name*</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-contact-number">
                <label>Contact Number*</label>
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-email">
                <label>Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-city">
                <label>City*</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-designer">
                <label>Designer of the Outfit*</label>
                <input type="text" name="designer" value={formData.designer} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-description">
                <label>Product Description*</label>
                <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} required />
              </div>
            </div>
            <div className="sell-with-us-form-group sell-with-us-size">
              <label>Outfit Size*</label>
              <div className="sell-with-us-radio-group">
                <label><input type="radio" name="outfitSize" value="XS" onChange={handleChange} required /> XS</label>
                <label><input type="radio" name="outfitSize" value="S" onChange={handleChange} /> S</label>
                <label><input type="radio" name="outfitSize" value="M" onChange={handleChange} /> M</label>
                <label><input type="radio" name="outfitSize" value="L" onChange={handleChange} /> L</label>
                <label><input type="radio" name="outfitSize" value="XL" onChange={handleChange} /> XL</label>
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-margin">
                <label>Margin in the Outfit</label>
                <input type="text" name="margin" value={formData.margin} onChange={handleChange} />
              </div>
              <div className="sell-with-us-form-group sell-with-us-height">
                <label>Your Height*</label>
                <input type="text" name="height" value={formData.height} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-upload-front">
                <label>Upload Front Pictures of the Outfit*</label>
                <input type="file" name="frontPictures" className="sell-with-us-file-input" onChange={handleChange} multiple required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-upload-label">
                <label>Upload Label Picture Inside the Outfit*</label>
                <input type="file" name="labelPicture" className="sell-with-us-file-input" onChange={handleChange} required />
                </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-proof">
                <label>Proof of Purchase*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="proofOfPurchase" value="Invoice" onChange={handleChange} required /> Invoice</label>
                  <label><input type="radio" name="proofOfPurchase" value="Email" onChange={handleChange} /> Email</label>
                </div>
                <input type="file" name="proofOfPurchaseFile" className="sell-with-us-file-input" onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-condition">
                <label>Product Condition (New)*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="productCondition" value="Yes" onChange={handleChange} required /> Yes</label>
                  <label><input type="radio" name="productCondition" value="No" onChange={handleChange} /> No</label>
                </div>
                </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-times-worn">
                <label>Worn*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="worn" value="Yes" onChange={handleChange} required /> Yes</label>
                  <label><input type="radio" name="worn" value="No" onChange={handleChange} /> No</label>
                </div>
              </div>
              <div className="sell-with-us-form-group sell-with-us-packaging">
                <label>Packaging*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="packaging" value="Yes" onChange={handleChange} required /> Yes</label>
                  <label><input type="radio" name="packaging" value="No" onChange={handleChange} /> No</label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-original-price">
                <label>Original Price*</label>
                <input type="text" name="originalPrice" value={formData.originalPrice} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-purchase-year">
                <label>Purchase Year*</label>
                <input type="number" name="purchaseYear" min="1900" max={new Date().getFullYear()} value={formData.purchaseYear} onChange={handleChange} required />
              </div>
            </div>
            <div className="sell-with-us-form-group sell-with-us-offer-price">
              <label>Your Offer Price (in rupees)*</label>
              <input type="text" name="offerPrice" value={formData.offerPrice} onChange={handleChange} required />
            </div>

            <div className="sell-with-us-form-group sell-with-us-rent">
              <label>Are you open to putting your outfit up for rent?*</label>
              <div className="sell-with-us-radio-group">
                <label><input type="radio" name="rentOption" value="Yes" onChange={handleChange} required /> Yes</label>
                <label><input type="radio" name="rentOption" value="No" onChange={handleChange} /> No</label>
                </div>
            </div>
            <button type="submit" className="sell-with-us-submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};


      
      {/* {submitted ? (
        <div className="submission-message">
          <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
        </div>
      ) : (
        <form className="sell-with-us-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-full-name">
              <label>Full Name*</label>
              <input type="text" required />
            </div>
            <div className="sell-with-us-form-group sell-with-us-contact-number">
              <label>Contact Number*</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-email">
              <label>Email*</label>
              <input type="email" required />
            </div>
            <div className="sell-with-us-form-group sell-with-us-city">
              <label>City*</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-designer">
              <label>Designer of the Outfit*</label>
              <input type="text" required />
            </div>
            <div className="sell-with-us-form-group sell-with-us-description">
              <label>Product Description*</label>
              <input type="text" required />
            </div>
          </div>
          <div className="sell-with-us-form-group sell-with-us-size">
            <label>Outfit Size*</label>
            <div className="sell-with-us-radio-group">
              <label><input type="radio" name="size" value="XS" required /> XS</label>
              <label><input type="radio" name="size" value="S" /> S</label>
              <label><input type="radio" name="size" value="M" /> M</label>
              <label><input type="radio" name="size" value="L" /> L</label>
              <label><input type="radio" name="size" value="XL" /> XL</label>
              <label><input type="radio" name="size" value="XXL-XXXL" /> XXL-XXXL</label>
            </div>
          </div>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-margin">
              <label>Margin in the outfit</label>
              <input type="text" />
            </div>
            <div className="sell-with-us-form-group sell-with-us-height">
              <label>Your Height*</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-upload-front">
              <label>Upload Front Pictures of the Outfit*</label>
              <input type="file" className="sell-with-us-file-input" multiple required />
            </div>
            <div className="sell-with-us-form-group sell-with-us-upload-label">
              <label>Upload Label Picture Inside the Outfit*</label>
              <input type="file" className="sell-with-us-file-input" required />
            </div>
          </div>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-proof">
              <label>Proof of Purchase*</label>
              <div className="sell-with-us-checkbox-group">
                <label><input type="checkbox" name="proof" value="Invoice" /> Invoice/Bill</label>
                <label><input type="checkbox" name="proof" value="Email" /> Email</label>
                <label><input type="checkbox" name="proof" value="Transaction" /> Transaction</label>
                <label><input type="checkbox" name="proof" value="Other" /> Other</label>
              </div>
              <input type="file" className="sell-with-us-file-input" required />
            </div>
            <div className="sell-with-us-form-group sell-with-us-condition">
              <label>Product Condition*</label>
              <div className="sell-with-us-radio-group">
                <label><input type="radio" name="condition" value="New with tags" required /> New with tags</label>
                <label><input type="radio" name="condition" value="New without tags" /> New without tags</label>
                <label><input type="radio" name="condition" value="Very good" /> Very good condition</label>
                <label><input type="radio" name="condition" value="Good" /> Good condition</label>
                <label><input type="radio" name="condition" value="Fair" /> Fair condition</label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-times-worn">
              <label>Number of Times Worn*</label>
              <div className="sell-with-us-radio-group">
                <label><input type="radio" name="times-worn" value="1-2" required /> 1-2</label>
                <label><input type="radio" name="times-worn" value="2-5" /> 2-5</label>
                <label><input type="radio" name="times-worn" value="Above 5" /> Above 5</label>
              </div>
            </div>
            <div className="sell-with-us-form-group sell-with-us-packaging">
              <label>Packaging*</label>
              <div className="sell-with-us-radio-group">
                <label><input type="radio" name="packaging" value="Dust Bag" required /> Dust Bag</label>
                <label><input type="radio" name="packaging" value="Box" /> Box</label>
                <label><input type="radio" name="packaging" value="Not available" /> Not available</label>
              </div>
              <input type="file" className="sell-with-us-file-input" required />
            </div>
          </div>
          <div className="form-row">
            <div className="sell-with-us-form-group sell-with-us-original-price">
              <label>Original Purchase Price*</label>
              <input type="text" required />
            </div>
            <div className="sell-with-us-form-group sell-with-us-purchase-year">
              <label>Purchase Year*</label>
              <input type="text" required />
            </div>
          </div>
          <div className="sell-with-us-form-group sell-with-us-offer-price">
            <label>Your Offer Price (in rupees)*</label>
            <input type="text" required />
          </div>
          <div className="sell-with-us-form-group sell-with-us-concierge">
            <label>Would you like to sign up for our Concierge Service?*</label>
            <div className="sell-with-us-radio-group">
              <label><input type="radio" name="concierge" value="Yes" required /> Yes</label>
              <label><input type="radio" name="concierge" value="No" /> No</label>
            </div>
          </div>
          <div className="sell-with-us-form-group sell-with-us-rent">
            <label>Are you open to putting your outfit up for rent?*</label>
            <div className="sell-with-us-radio-group">
              <label><input type="radio" name="rent" value="Yes" required /> Yes</label>
              <label><input type="radio" name="rent" value="No" /> No</label>
            </div>
          </div>
          <button type="submit" className="sell-with-us-submit-button">Submit</button>
        </form>
      )}
      
    </div><br></br><br></br><br></br>
    <Footer/>
    </div>
  );
}; */}

export default SellWithUs;