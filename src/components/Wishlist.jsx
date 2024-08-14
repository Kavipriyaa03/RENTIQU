import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = ({ wishlistItems, onRemoveFromWishlist }) => {
    return (
        <div className="wishlist-container">
            <h1>Your Wishlist</h1>
            <div className="wishlist-items">
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item, index) => (
                        <div className="wishlist-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h2>{item.name}</h2>
                                <p>Price: ₹{item.price}</p>
                                <button onClick={() => onRemoveFromWishlist(index)}>Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your wishlist is empty.</p>
                )}
            </div>
            <Link to="/"><button className="continue-shopping-button">Continue Shopping</button></Link>
        </div>
    );
};

export default Wishlist;
